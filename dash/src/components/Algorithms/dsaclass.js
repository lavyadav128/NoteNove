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
import { makeAuthenticatedRequest } from "../makeauth";
import server from "../../environment";

const batches = [
  {
    id: "dsa",
    title: "Dsa Sheet",
    description: "Ace coding interviews with our 34-day DSA program and master data structure and algorithms",
    imageUrl: "/images/dsa_files/dsa.png",
    screenshot: "/images/dsa_files/dsass.png",
    price: 0,
    isPremium: true,
    redirectPath: "/dsa",
    whatYouLearn: [
      "Master the fundamentals of Data Structures & Algorithms",
      "Learn with a structured 34-day roadmap",
      "Most frequent and expected questions",
      "Solve 200+ curated LeetCode problems",
      "Prepare for top service-based companies",
      "Get personalized mentorship & doubt support",
      "Prepare for top product-based companies",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    description: "Create modern, responsive web apps with our structured fullstack roadmap",
    imageUrl: "/images/dsa_files/web.png",
    screenshot: "/images/dsa_files/webss.png",
    price: 0,
    isPremium: true,
    redirectPath: "/web",
    whatYouLearn: [
      "HTML, CSS, and JavaScript (Responsive Web Design)",
      "Modern frameworks like React or Angular",
      "Server-side programming (Node.js, Express.js, or others)",
      "RESTful APIs and routing",
      "Authentication and Authorization",
      "CRUD operations",
      "Hosting (Vercel, render, or traditional servers)",
      "Relational databases (MySQL, PostgreSQL",
    ],
  },
];

const CombinedClassPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [purchaseInfo, setPurchaseInfo] = useState({});
  const [openModalId, setOpenModalId] = useState(null);
  const [openExploreId, setOpenExploreId] = useState(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const data = await makeAuthenticatedRequest(`${server}/api/user-purchases`);
        const info = {};
        batches.forEach((batch) => {
          const purchase = data.find((p) => p.classId === batch.id);
          if (purchase) info[batch.id] = purchase;
        });
        setPurchaseInfo(info);
      } catch (err) {
        console.error("Failed to fetch purchases:", err.message);
      }
    };
    fetchPurchases();
  }, []);

  const handleBuyRedirect = async (batch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    const purchasePayload = {
      classId: batch.id,
      batchTitle: batch.title,
      price: batch.price,
      imageUrl: batch.imageUrl,
      description: batch.description,
    };

    if (batch.price === 0) {
      try {
        await makeAuthenticatedRequest(`${server}/api/save-purchase`, "POST", purchasePayload);
        setPurchaseInfo((prev) => ({ ...prev, [batch.id]: { expiryDate: new Date().toISOString() } }));
        navigate(batch.redirectPath);
      } catch (err) {
        alert(err.message || "Failed to grant access.");
      }
      return;
    }

    try {
      const orderRes = await makeAuthenticatedRequest(`${server}/api/create-order`, "POST", {
        amount: batch.price,
        receipt: `receipt_${batch.id}_${Date.now()}`,
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_LIVE_KEY,
        amount: batch.price * 100,
        currency: "INR",
        name: "Atom Classes",
        description: `Payment for ${batch.title}`,
        order_id: orderRes.id,
        handler: async function () {
          try {
            await makeAuthenticatedRequest(`${server}/api/save-purchase`, "POST", purchasePayload);
            setPurchaseInfo((prev) => ({ ...prev, [batch.id]: { expiryDate: new Date().toISOString() } }));
            navigate(batch.redirectPath);
          } catch (err) {
            alert(err.message || "Error saving your purchase.");
          }
        },
        prefill: { name: "", email: "", contact: "" },
        notes: { batchId: batch.id },
        theme: { color: "#1976d2" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Payment initialization failed. Please try again.");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, py: isMobile ? 2 : 4, px: isMobile ? 1.5 : 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 6,
        }}
      >
        {batches.map((batch) => {
          const isPurchased = !!purchaseInfo[batch.id];
          const expiryDate = purchaseInfo[batch.id]?.expiryDate ? new Date(purchaseInfo[batch.id].expiryDate) : null;

          return (
            <Box key={batch.id} sx={{ width: isMobile ? "100%" : 400 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  boxShadow: 6,
                  transition: "box-shadow 0.3s, transform 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover": {
                    boxShadow: 12,
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={batch.imageUrl}
                  alt={batch.title}
                  sx={{ objectFit: "cover", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                />
                <CardContent sx={{ px: 3 }}>
                  <Typography variant="h6" fontWeight={600}>{batch.title}</Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>{batch.description}</Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Button
                      variant="contained"
                      color={batch.price === 0 ? "success" : "warning"}
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
                      {batch.price === 0 ? "FREE" : `₹${batch.price}`}
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
                    onClick={() => setOpenExploreId(batch.id)}
                    sx={{ width: "48%", fontWeight: 600, borderRadius: 2, textTransform: "none" }}
                  >
                    Explore
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      isPurchased ? navigate(batch.redirectPath) : handleBuyRedirect(batch)
                    }
                    sx={{ width: "48%", fontWeight: 600, borderRadius: 2, textTransform: "none" }}
                  >
                    {isPurchased ? "Study" : "Buy Now"}
                  </Button>
                </CardActions>
              </Card>

              <Dialog open={openModalId === batch.id} onClose={() => setOpenModalId(null)} maxWidth="sm" fullWidth>
                <DialogContent sx={{ position: "relative", p: 3, textAlign: "center" }}>
                  <IconButton onClick={() => setOpenModalId(null)} sx={{ position: "absolute", top: 8, right: 8 }}>
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {batch.title} Preview
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={batch.screenshot}
                      alt={`${batch.title} Preview`}
                      style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: 10 }}
                    />
                  </Box>
                </DialogContent>
              </Dialog>

              <Dialog
                open={openExploreId === batch.id}
                onClose={() => setOpenExploreId(null)}
                maxWidth="sm"
                fullWidth
              >
                <DialogContent sx={{ position: "relative", p: 3 }}>
                  <IconButton onClick={() => setOpenExploreId(null)} sx={{ position: "absolute", top: 8, right: 8 }}>
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="h6" fontWeight={600} color="primary" gutterBottom textAlign="center">
                    What You'll Learn in {batch.title}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {batch.whatYouLearn.map((point, index) => (
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
                            content: '"\u2705"',
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
                    onClick={() => setOpenModalId(batch.id)}
                    sx={{
                      mt: 3,
                      fontWeight: 600,
                      borderRadius: 2,
                      display: "block",
                      mx: "auto",
                      textTransform: "none",
                    }}
                  >
                    View Screenshot
                  </Button>
                </DialogContent>
              </Dialog>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CombinedClassPage;
