import React, { useEffect, useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Button,
  CircularProgress,
  Alert,
  Fade,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeAuthenticatedRequest } from './makeauth';
import server from '../environment';

const MyBatchesPage = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState(0); // 0: Free, 1: Paid
  const navigate = useNavigate();
  const premiumClassIds = ['2', '3', '1']; // Add any classId you consider premium


  useEffect(() => {
    const fetchPurchasedBatches = async () => {
      try {
        const res = await makeAuthenticatedRequest(`${server}/api/user-purchases`);



        const responseData = Array.isArray(res) ? res : res.data;
        const enrichedBatches = (Array.isArray(responseData) ? responseData : []).map(batch => ({
          ...batch,
          isPremium: premiumClassIds.includes(batch.classId) || batch.isPremium === true,
        }));
        setBatches(enrichedBatches);

        
      } catch (err) {
        if (err.response?.status === 401) {
          navigate('/login');
        } else {
          setError('Failed to load your purchased batches. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedBatches();
  }, [navigate]);

  const renderBatchCard = (batch) => {
    const description = batch.description?.trim() || 'No description available.';
    const imageUrl = batch.imageUrl?.trim() || '/images/default.png';
    const expiryDate = batch.expiryDate ? new Date(batch.expiryDate) : null;
    const isPremium = batch.isPremium === true;

    let studyLink = '';

    if (batch.classId === 'dsa') {
      studyLink = '/dsa';
    } else if (batch.classId === 'web') {
      studyLink = '/web';
    } else {
      studyLink = isPremium
        ? `/premium/class/${batch.classId}`
        : `/class/${batch.classId}`;
    }

    return (
      <Grid item xs={12} sm={6} md={4} key={batch.classId}>
        <Fade in timeout={500}>
          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: 6,
              backgroundColor: '#fdfdfd',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 12,
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={imageUrl}
              alt={batch.title}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {batch.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ minHeight: 40 }}>
                {description}
              </Typography>
              <Stack direction="row" spacing={1} mt={2}>
                <Chip
                  label={isPremium ? 'Premium' : 'Purchased'}
                  color={isPremium ? 'secondary' : 'primary'}
                  size="small"
                />
              </Stack>
              {expiryDate && (
                <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                  Expires on: {expiryDate.toLocaleDateString()}
                </Typography>
              )}
            </CardContent>
            <Box sx={{ px: 2, pb: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ fontWeight: 600, borderRadius: 2, textTransform: 'none' }}
                onClick={() => navigate(studyLink)}
              >
                Study
              </Button>
            </Box>
          </Card>
        </Fade>
      </Grid>
    );
  };

  if (loading) {
    return (
      <Stack alignItems="center" mt={10}>
        <CircularProgress />
      </Stack>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ margin: '40px auto', maxWidth: '600px' }}>
        {error}
      </Alert>
    );
  }

  const freeBatches = batches.filter((batch) => !batch.price || batch.price === 0);
  const paidBatches = batches.filter((batch) => batch.price && batch.price > 0);
  const displayBatches = tab === 0 ? freeBatches : paidBatches;

  return (
    <Box sx={{ px: { xs: 1, md: 17 }, py: 0 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 800, color: '#1976d2' }}>
        My Batches
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, newVal) => setTab(newVal)}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        <Tab label="Free Batches" />
        <Tab label="Paid Batches" />
      </Tabs>

      {displayBatches.length === 0 ? (
        <Typography variant="h6" align="center" mt={5}>
          No {tab === 0 ? 'free' : 'paid'} batches found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {displayBatches.map(renderBatchCard)}
        </Grid>
      )}
    </Box>
  );
};

export default MyBatchesPage;
