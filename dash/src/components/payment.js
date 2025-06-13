import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
import axios from "axios";
import server from "../environment";

const PaymentsPage = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const res = await axios.get(`${server}/api/user-purchases`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPurchases(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load payment information.");
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        My Payments
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      ) : purchases.length === 0 ? (
        <Typography variant="body1" mt={4}>
          No purchases found.
        </Typography>
      ) : (
        <Grid container spacing={3} mt={1}>
          {purchases.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Class ID: {item.classId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{item.price && item.price > 0 ? item.price : 0}
                  </Typography>
                  {item.purchaseDate && (
                    <Typography variant="body2" color="text.secondary">
                      Purchased On: {new Date(item.purchaseDate).toLocaleDateString()}
                    </Typography>
                  )}
                  {item.expiryDate && (
                    <Typography variant="body2" color="text.secondary">
                      Expires On: {new Date(item.expiryDate).toLocaleDateString()}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default PaymentsPage;
