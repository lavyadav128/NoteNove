import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { makeAuthenticatedRequest } from "./makeauth";
import server from "../environment";

// ...imports stay the same

const classDetails = {
  id: "dsa",
  title: "Dsa Sheet",
  description: "Ace coding interviews with our 34-day DSA program",
  imageUrl: "/images/dsa_files/dsa.png",
  price: 10, // ✅ Updated Price
  isPremium:true,

};

const DSAClass = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [highlightDesc, setHighlightDesc] = useState(false);
  const [purchaseInfo, setPurchaseInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const isPurchased = !!purchaseInfo;
  const expiryDate = purchaseInfo?.expiryDate ? new Date(purchaseInfo.expiryDate) : null;

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const data = await makeAuthenticatedRequest(`${server}/api/user-purchases`);
        const purchase = data.find((p) => p.classId === classDetails.id);
        if (purchase) {
          setPurchaseInfo(purchase);
        }
      } catch (err) {
        console.error("Failed to fetch DSA purchase:", err.message);
        if (!err.message.includes("No authentication token")) {
          alert(`Failed to load DSA purchase: ${err.message}`);
        }
      }
    };
    fetchPurchases();
  }, []);

  const handlePurchaseUpdate = () => {
    setPurchaseInfo({ expiryDate: new Date().toISOString() });
  };

  const handleExploreClick = () => {
    setHighlightDesc(true);
    setTimeout(() => setHighlightDesc(false), 1000);
  };

  const handleExploreRedirect = () => {
    navigate(`/dsa`);
  };

  const handleBuyRedirect = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }
  
    const purchasePayload = {
      classId: classDetails.id,
      batchTitle: classDetails.title,
      price: classDetails.price,
      imageUrl: classDetails.imageUrl,
      description: classDetails.description,
    };
  
    if (classDetails.price === 0) {
      try {
        await makeAuthenticatedRequest(`${server}/api/save-purchase`, "POST", purchasePayload);
        handlePurchaseUpdate();
        navigate(`/dsa`);
      } catch (err) {
        console.error("Error saving free access:", err);
        alert(err.message || "Failed to grant access.");
      }
      return;
    }
  
    // ✅ 1. Call backend to create Razorpay order
    try {
      const orderRes = await makeAuthenticatedRequest(`${server}/api/create-order`, "POST", {
        amount: classDetails.price,
        receipt: `receipt_dsa_${Date.now()}`,
      });
  
      if (!orderRes || !orderRes.id) {
        throw new Error("Invalid Razorpay order response");
      }
  
      const options = {
        key: process.env.REACT_APP_RAZORPAY_LIVE_KEY,
        amount: classDetails.price * 100,
        currency: "INR",
        name: "Atom Classes",
        description: `Payment for ${classDetails.title}`,
        order_id: orderRes.id, // ✅ Pass order_id from backend
        handler: async function (response) {
          try {
            // You can optionally verify response.razorpay_signature here
            await makeAuthenticatedRequest(`${server}/api/save-purchase`, "POST", purchasePayload);
            handlePurchaseUpdate();
            navigate(`/dsa`);
          } catch (err) {
            console.error("Error saving purchase:", err);
            alert(err.message || "Error saving your purchase.");
          }
        },
        prefill: { name: "", email: "", contact: "" },
        notes: { batchId: classDetails.id },
        theme: { color: "#1976d2" },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Failed to create Razorpay order:", err);
      alert("Payment initialization failed. Please try again.");
    }
  };
  

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box sx={{ flexGrow: 1, py: isMobile ? 2 : 0, px: isMobile ? 1.5 : 18 }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight={700}
        mb={3}
        textAlign="center"
        color="primary"
      >
        Dsa Practise Sheet
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          pb: 2,
        }}
      >
        {/* Purchase Card */}
        <Card
          sx={{
            width: isMobile ? "100%" : 400,
            borderRadius: 4,
            boxShadow: 6,
            mx: "auto",
            transition: "box-shadow 0.3s, transform 0.3s",
            "&:hover": {
              boxShadow: 12,
              transform: "scale(1.02)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={classDetails.imageUrl}
            alt={classDetails.title}
            sx={{ objectFit: "cover", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
          />
          <CardContent sx={{ px: 3 }}>
            <Typography variant="h6" fontWeight={600}>
              {classDetails.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {classDetails.description}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Button
                variant="contained"
                color={classDetails.price === 0 ? "success" : "warning"}
                sx={{
                  borderRadius: "50px",
                  pointerEvents: "none",
                  px: 2,
                  py: 0.5,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                }}
              >
                {classDetails.price === 0 ? "FREE" : `₹${classDetails.price}`}
              </Button>
              {isPurchased && (
                <Box
                  sx={{
                    bgcolor: "#1976d2",
                    color: "#fff",
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.3,
                    borderRadius: 50,
                    ml: "auto",
                    fontSize: "0.9rem",
                  }}
                >
                  Purchased
                </Box>
              )}
            </Box>
            {isPurchased && expiryDate && (
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={600}
                mt={1}
                display="block"
              >
                Expires on: {expiryDate.toLocaleDateString()}
              </Typography>
            )}
          </CardContent>

          <CardActions sx={{ px: 3, pb: 3, pt: 1, justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleExploreClick}
              sx={{
                width: "48%",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Explore
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                isPurchased ? handleExploreRedirect() : handleBuyRedirect()
              }
              sx={{
                width: "48%",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              {isPurchased ? "Study" : "Buy Now"}
            </Button>
          </CardActions>
        </Card>

        {/* Description Card */}
        <Card
          sx={{
            width: isMobile ? "100%" : 400,
            borderRadius: 4,
            boxShadow: 8,
            backgroundColor: "#f5f5f5",
            p: 3,
            transition: "box-shadow 0.5s, transform 0.3s",
            ...(highlightDesc && {
              boxShadow: "0 0 25px 5px rgba(25, 118, 210, 0.6)",
              transform: "scale(1.02)",
            }),
            "&:hover": {
              boxShadow: 12,
              transform: "scale(1.02)",
            },
          }}
        >
          <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
            What You'll Learn:
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            {[
              "Master the fundamentals of Data Structures & Algorithms",
              "Learn with a structured 34-day roadmap",
              "Most frequent and expected questions",
              "Solve 200+ curated LeetCode problems",
              "Prepare for top service-based companies",
              "Get personalized mentorship & doubt support",
              "Prepare for top product-based companies",
            ].map((point, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 1.4,
                  fontSize: "1rem",
                  listStyle: "none",
                  pl: 3,
                  position: "relative",
                  "&::before": {
                    content: '"✅"',
                    position: "absolute",
                    left: 0,
                  },
                }}
              >
                {point}
              </Typography>
            ))}
          </Box>

          <Button
            variant="outlined"
            color="secondary"
            onClick={handleOpenModal}
            sx={{
              mt: 3,
              fontWeight: 600,
              borderRadius: 2,
              alignSelf: "center",
              display: "block",
              mx: "auto",
              textTransform: "none",
            }}
          >
            View Screenshot
          </Button>
        </Card>
      </Box>

      {/* Screenshot Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogContent sx={{ position: "relative", p: 3, textAlign: "center" }}>
          <IconButton onClick={handleCloseModal} sx={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            DSA Class Preview
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/dsa_files/dsass.png"
              alt="DSA Preview"
              style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: 10 }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DSAClass;
