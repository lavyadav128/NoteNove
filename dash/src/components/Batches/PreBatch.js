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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeAuthenticatedRequest } from '../makeauth';
import server from '../../environment';

const classList = [
  { id: '1', title: 'Class 10', description: 'Master all subjects with our comprehensive Class 10 content.', imageUrl: '/images/p10.png', price: 0, isPremium: true },
  { id: '2', title: 'Class 11 (Jee + Boards)', description: 'Strengthen your foundation with advanced concepts.', imageUrl: '/images/p11.png', price: 99, isPremium: true },
  { id: '3', title: 'Class 12 (Jee + Boards)', description: 'Ace your boards and entrance exams with Class 12 content.', imageUrl: '/images/p12.png', price: 99, isPremium: true },
];

const ClassCard = ({ id, title, description, imageUrl, price, isPremium, purchaseInfo, onPurchase }) => {
  const navigate = useNavigate();
  const isPurchased = !!purchaseInfo;
  const expiryDate = purchaseInfo?.expiryDate ? new Date(purchaseInfo.expiryDate) : null;

  const handleExploreRedirect = () => {
    navigate(`/premium/class/${id}/explore`);
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
      imageUrl: imageUrl,
      isPremium: isPremium,
    };

    if (price === 0) {
      try {
        await makeAuthenticatedRequest(`${server}/api/save-purchase`, 'POST', purchasePayload);
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

    try {
      const orderResponse = await fetch(`${server}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: price, receipt: `receipt_${id}_${Date.now()}` }),
      });

      const order = await orderResponse.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_LIVE_KEY,
        amount: order.amount,
        currency: 'INR',
        name: 'Atom Classes',
        description: `Payment for ${title}`,
        order_id: order.id,
        handler: async function (response) {
          try {
            await makeAuthenticatedRequest(`${server}/api/save-purchase`, 'POST', purchasePayload);
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
    } catch (err) {
      console.error('Failed to create Razorpay order:', err);
      alert('Failed to initiate payment. Try again.');
    }
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
        image={imageUrl}
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
          {isPurchased ? 'Study' : 'Buy Now'}
        </Button>
      </CardActions>
    </Card>
  );
};

const ClassCardPage = () => {
  const [purchasedBatches, setPurchasedBatches] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: 800, mb: 4, color: '#1976d2' }}
      >
        Select Your Class
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          justifyContent: isMobile ? 'center' : 'flex-start',
          overflowX: isMobile ? 'hidden' : 'auto',
          overflowY: isMobile ? 'auto' : 'hidden',
          gap: isMobile ? 3 : 3,
          pb: 2,
          px: isMobile ? 0.5 : 1,
          scrollSnapType: isMobile ? 'none' : 'x mandatory',
          '&::-webkit-scrollbar': { height: 8 },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ccc',
            borderRadius: 4,
          },
        }}
      >
        {classList.map((cls) => (
          <Box
            key={cls.id}
            sx={{
              flex: '0 0 auto',
              scrollSnapAlign: isMobile ? 'none' : 'start',
              display: 'flex',
              justifyContent: 'center',
              width: isMobile ? '100%' : 'auto',
              px: 0,
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
