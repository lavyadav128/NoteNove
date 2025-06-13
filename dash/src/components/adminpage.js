import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  CircularProgress,
  Alert,
  Chip,
  Divider
} from '@mui/material';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { makeAuthenticatedRequest } from './makeauth';
import server from '../environment';

const DoubtCard = ({ doubt }) => {
  const { subject, message, contact, createdAt } = doubt;
  const time = createdAt ? new Date(createdAt).toLocaleString() : 'Unknown';

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        <HelpOutlineIcon sx={{ mr: 1 }} />
        {subject}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        {message}
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {contact && (
          <Grid item>
            <Chip
              icon={<ContactMailIcon />}
              label={`Contact: ${contact}`}
              color="info"
              variant="outlined"
            />
          </Grid>
        )}
        <Grid item>
          <Chip
            icon={<QueryBuilderIcon />}
            label={`Submitted: ${time}`}
            color="default"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

const AdminDoubtsPage = () => {
  const [doubts, setDoubts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoubts = async () => {
    try {
      const res = await makeAuthenticatedRequest(`${server}/api/admin/doubts`);
      if (!Array.isArray(res)) throw new Error("Invalid response");
      setDoubts(res.reverse()); // latest first
    } catch (err) {
      console.error('Error fetching doubts:', err);
      setError('Failed to fetch doubts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoubts();
  }, []);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 5 }} />;
  if (error) return <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>;

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" align="center">
        User Doubts (Admin Dashboard)
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {doubts.length === 0 ? (
        <Typography align="center" color="text.secondary" mt={5}>
          No doubts submitted yet.
        </Typography>
      ) : (
        doubts.map((doubt, index) => <DoubtCard key={index} doubt={doubt} />)
      )}
    </Box>
  );
};

export default AdminDoubtsPage;
