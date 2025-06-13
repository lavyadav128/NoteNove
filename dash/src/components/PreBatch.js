import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeAuthenticatedRequest } from './makeauth';
import server from "../environment";

const classList = [
  { id: '1', title: 'Class 10', description: 'Master all subjects with our comprehensive Class 10 content.', image: '/images/p10.png', price: 99,"isPremium": true },
  { id: '2', title: 'Class 11 (Jee + Boards)', description: 'Strengthen your foundation with advanced concepts.', image: '/images/p11.png', price: 99,"isPremium": true },
  { id: '3', title: 'Class 12 (Jee + Boards)', description: 'Ace your boards and entrance exams with Class 12 content.', image: '/images/p12.png', price: 99,"isPremium": true },
];

const ClassCard = ({ id, title, description, image, price,isPremium, purchaseInfo, onPurchase }) => {
  const navigate = useNavigate();

  const isPurchased = !!purchaseInfo;
  const expiryDate = purchaseInfo?.expiryDate ? new Date(purchaseInfo.expiryDate) : null;

  const handleExploreRedirect = () => {
    navigate(`/class/${id}/explore`);
  };

  const handleBuyRedirect = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first');
      return;
    }

    const purchasePayload = {
      classId: id,
      batchTitle: title,
      price: price,
      description: description,
      imageUrl: image,
      isPremium: isPremium,
    };

    if (price === 0) {
      try {
        await makeAuthenticatedRequest(
          `${server}/api/save-purchase`,
          'POST',
          purchasePayload
        );
        onPurchase(id);
        navigate(`/premium/class/${id}`);
      } catch (err) {
        console.error('Error saving free access:', err);
        alert(err.message || 'Failed to grant access.');
      }
      return;
    }

    if (!window.Razorpay) {
      alert('Payment gateway not loaded');
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_LIVE_KEY,
      amount: price * 100,
      currency: 'INR',
      name: 'Atom Classes',
      description: `Payment for ${title}`,
      handler: async function (response) {
        try {
          await makeAuthenticatedRequest(
            `${server}/api/save-purchase`,
            'POST',
            purchasePayload
          );
          onPurchase(id);
          navigate(`/premium/class/${id}`);
        } catch (err) {
          console.error('Error saving purchase:', err);
          alert(err.message || 'Error saving your purchase.');
        }
      },
      prefill: { name: '', email: '', contact: '' },
      notes: { batchId: id },
      theme: { color: '#1976d2' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Card
      sx={{
        width: 330,
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 6,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 12,
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover', borderBottom: '1px solid #eee' }}
      />
      <CardContent sx={{ px: 3, pt: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48 }}>
          {description}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
          <Chip
            label={price === 0 ? 'FREE' : `₹${price}`}
            color={price === 0 ? 'success' : 'warning'}
            sx={{ fontWeight: 'bold', px: 1.5 }}
          />
          {isPurchased && <Chip label="Purchased" color="primary" size="small" />}
        </Stack>
        <Box sx={{ minHeight: 24, mt: 1, display: 'flex', alignItems: 'center' }}>
          {isPurchased && expiryDate && (
            <Typography variant="caption" sx={{ color: 'gray', fontWeight: 600 }}>
              Expires on: {expiryDate.toLocaleDateString()}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          onClick={handleExploreRedirect}
          sx={{
            width: '48%',
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#e3f2fd' },
          }}
        >
          Explore
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            isPurchased ? navigate(`/premium/class/${id}`) : handleBuyRedirect()
          }
          sx={{
            width: '48%',
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
          }}
        >
          {isPurchased ? 'Study' : 'Buy'}
        </Button>
      </CardActions>
    </Card>
  );
};

const ClassCardPage = () => {
  const [purchasedBatches, setPurchasedBatches] = useState({});

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const data = await makeAuthenticatedRequest(`${server}/api/user-purchases`);
        const purchasesMap = {};
        data.forEach((purchase) => {
          purchasesMap[purchase.classId] = purchase;
        });
        setPurchasedBatches(purchasesMap);
      } catch (err) {
        console.error('Failed to fetch purchases:', err.message);
        if (!err.message.includes('No authentication token')) {
          alert(`Failed to load purchases: ${err.message}`);
        }
      }
    };

    fetchPurchases();
  }, []);

  const handlePurchaseUpdate = (classId) => {
    setPurchasedBatches((prev) => ({
      ...prev,
      [classId]: prev[classId] || { expiryDate: new Date().toISOString() },
    }));
  };

  return (
<Box sx={{ py: 0, px: { xs: 1, sm: 5, md: 10, lg: 16 } }}>
  <Typography
    variant="h5"
    textAlign="center"
    gutterBottom
    sx={{
      fontWeight: 800,
      mb: { xs: 3, sm: 4 },
      color: '#1976d2',
      fontSize: { xs: '1.5rem', sm: '2rem' },
    }}
  >
    Select Your Class
  </Typography>

  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      flexWrap: { xs: 'nowrap', sm: 'wrap' },
      justifyContent: { sm: 'center' },
      alignItems: { xs: 'center', sm: 'stretch' },
      gap: { xs: 2.5, sm: 3 },
      overflowX: { xs: 'auto', sm: 'unset' },
      scrollSnapType: { xs: 'x mandatory', sm: 'none' },
      px: { xs: 0.5, sm: 1 },
      pb: 3,
    }}
  >
    {classList.map((cls) => (
      <Box
        key={cls.id}
        sx={{
          flex: { xs: '0 0 90%', sm: '1 0 300px' },
          scrollSnapAlign: 'start',
          mx: { xs: 'auto', sm: 0 },
        }}
      >
        <ClassCard
          {...cls}
          purchaseInfo={purchasedBatches[cls.id]}
          onPurchase={handlePurchaseUpdate}
        />
      </Box>
    ))}
  </Box>
</Box>

  );
};

export default ClassCardPage;
