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

const classDetails = {
  id: "web",
  title: "Web Development",
  description: "Ace coding interviews with our 34-day DSA program ",
  image: "/images/dsa_files/web.png",
  price: 0,
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
    navigate(`/web`);
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
    };

    if (classDetails.price === 0) {
      try {
        await makeAuthenticatedRequest(`${server}/api/save-purchase`, "POST", purchasePayload);
        handlePurchaseUpdate();
        navigate(`/web`);
      } catch (err) {
        console.error("Error saving free access:", err);
        alert(err.message || "Failed to grant access.");
      }
      return;
    }

    if (!window.Razorpay) {
      alert("Payment gateway not loaded");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_LIVE_KEY,
      amount: classDetails.price * 100,
      currency: "INR",
      name: "Atom Classes",
      description: `Payment for ${classDetails.title}`,
      handler: async function (response) {
        try {
          await makeAuthenticatedRequest(`${server}/api/save-purchase`, "POST", purchasePayload);
          handlePurchaseUpdate();
          navigate(`/web`);
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
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box sx={{ flexGrow: 1, py: 0, px: 18 }}>
      <Typography variant="h4" fontWeight={700} mb={3} textAlign="center" color="primary">
        Fullstack Web Development
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          justifyContent: isMobile ? "center" : "flex-start",
          overflowX: isMobile ? "hidden" : "auto",
          overflowY: isMobile ? "auto" : "hidden",
          gap: isMobile ? 2 : 15,
          pb: 2,
          px: isMobile ? 0.5 : 1,
          scrollSnapType: isMobile ? "none" : "x mandatory",
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: 4,
          },
        }}
      >
        <Box
          sx={{
            scrollSnapAlign: isMobile ? "none" : "start",
            flexShrink: 0,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <Card
            sx={{
              height: "100%",
              borderRadius: 4,
              boxShadow: 6,
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              transition: "0.3s ease",
              maxWidth: isMobile ? "95%" : 400,
              mx: "auto",
            }}
          >
            <CardMedia
              component="img"
              height="240"
              image={classDetails.image}
              alt={classDetails.title}
              sx={{
                objectFit: "cover",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
            <CardContent sx={{ flexGrow: 1, px: 3 }}>
              <Typography variant="h5" fontWeight={600}>
                {classDetails.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {classDetails.description}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    borderRadius: "50px",
                    pointerEvents: "none",
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                  }}
                >
                  FREE
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
                      fontSize: "1rem",
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
                  "&:hover": { transform: "scale(1.03)" },
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
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                {isPurchased ? "Study" : "Buy"}
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box
          sx={{
            scrollSnapAlign: isMobile ? "none" : "start",
            flexShrink: 0,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <Card
            sx={{
              height: "100%",
              borderRadius: 4,
              boxShadow: 8,
              backgroundColor: "#f5f5f5",
              p: 3,
              transition: "box-shadow 0.5s, transform 0.3s",
              ...(highlightDesc && {
                boxShadow: "0 0 25px 5px rgba(25, 118, 210, 0.6)",
                transform: "scale(1.02)",
              }),
            }}
          >
            <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
              What You'll Learn:
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {[
                "HTML, CSS, and JavaScript (Responsive Web Design)",
                "Modern frameworks like React or Angular",
                "Server-side programming (Node.js, Express.js, or others)",
                "RESTful APIs and routing",
                "Authentication and Authorization",
                "CRUD operations",
                "Hosting (Vercel, render, or traditional servers)",
                "Relational databases (MySQL, PostgreSQL",
              ].map((point, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 2.5,
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    listStyle: "none",
                    position: "relative",
                    pl: 3,
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
      </Box>

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
              src="/images/dsa_files/webss.png"
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
