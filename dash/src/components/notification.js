import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  CircularProgress,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
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
    isNew: true
  },
];

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [popupNotif, setPopupNotif] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Simulate fetching from API
    setTimeout(() => {
      const seen = JSON.parse(localStorage.getItem('seenNotifIds')) || [];
      setNotifications(dummyNotifications);

      const unseen = dummyNotifications.find(
        (notif) => notif.isNew && !seen.includes(notif.id)
      );

      if (unseen) {
        setPopupNotif(unseen);
        setOpen(true);
        localStorage.setItem('seenNotifIds', JSON.stringify([...seen, unseen.id]));
      }
    }, 1000);
  }, []);

  return (
    <Box sx={{ p: isMobile ? 2 : 4 }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        <NotificationsActiveIcon sx={{ mr: 1, fontSize: isMobile ? 24 : 32 }} />
        Notifications
      </Typography>
      <Divider sx={{ mb: isMobile ? 2 : 4 }} />

      {notifications.length === 0 ? (
        <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 6 }} />
      ) : (
        <Grid container spacing={isMobile ? 2 : 3}>
          {notifications.map((notif) => (
            <Grid item xs={12} sm={6} md={4} key={notif.id}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 3,
                  backgroundColor: '#f9f9ff',
                  p: isMobile ? 1 : 2,
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
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

      {/* New notification popup */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          📢 {popupNotif?.title} — {popupNotif?.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NotificationsPage;
