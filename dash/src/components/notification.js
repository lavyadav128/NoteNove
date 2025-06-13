import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  Divider,
  CircularProgress
} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const dummyNotifications = [
  {
    id: 1,
    title: 'New Feature Released!',
    message: 'We have added a new Test Series section. Check it out now!',
    timestamp: '2025-06-13T10:45:00Z',
    isNew: true
  },
  {
    id: 2,
    title: 'Maintenance Scheduled',
    message: 'Platform will be down for maintenance on June 15th, 12AM - 2AM.',
    timestamp: '2025-06-12T14:00:00Z',
    isNew: false
  },
  {
    id: 3,
    title: 'Welcome to the Platform!',
    message: 'Explore free and paid batches curated just for you.',
    timestamp: '2025-06-10T08:00:00Z',
    isNew: false
  }
];

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNotifications(dummyNotifications);
    }, 1000);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
        <NotificationsActiveIcon sx={{ mr: 1 }} />
        Notifications
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {notifications.length === 0 ? (
        <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 6 }} />
      ) : (
        <Grid container spacing={3}>
          {notifications.map((notif) => (
            <Grid item xs={12} sm={6} md={4} key={notif.id}>
              <Card elevation={6} sx={{ borderRadius: 3, backgroundColor: '#f9f9ff' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {notif.title}
                    {notif.isNew && (
                      <Chip
                        label="New"
                        color="error"
                        size="small"
                        sx={{ ml: 1, verticalAlign: 'middle' }}
                      />
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                    {notif.message}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formatDate(notif.timestamp)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default NotificationsPage;
