import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { makeAuthenticatedRequest } from './makeauth';
import server from '../environment';

const DoubtPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    contact: ''
  });

  const [loading, setLoading] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await makeAuthenticatedRequest(`${server}/api/submit-doubt`, 'POST', formData);
      if (res.success) {
        setSuccessSnackbar(true);
        setFormData({ subject: '', message: '', contact: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      console.error(err);
      setErrorSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ px: isMobile ? 2 : 4, py: 3 }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        gutterBottom
        fontWeight="bold"
      >
        <HelpOutlineIcon sx={{ mr: 1 }} />
        Ask a Doubt
      </Typography>

      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          p: isMobile ? 2 : 4,
          mt: 4,
          borderRadius: 3
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={isMobile ? 2 : 3}>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                name="subject"
                fullWidth
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Doubt / Issue"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Email or Phone (optional)"
                name="contact"
                fullWidth
                value={formData.contact}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Doubt'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Snackbar Alerts */}
      <Snackbar
        open={successSnackbar}
        autoHideDuration={4000}
        onClose={() => setSuccessSnackbar(false)}
      >
        <Alert
          onClose={() => setSuccessSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Doubt submitted successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={4000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert
          onClose={() => setErrorSnackbar(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          Failed to submit doubt. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DoubtPage;
