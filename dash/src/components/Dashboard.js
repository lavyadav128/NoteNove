import React, { useEffect, useState } from "react";
import {Box,Card,CardContent,Grid,Typography,Paper,Button,IconButton,TextField,Autocomplete,createTheme,ThemeProvider,CssBaseline,Fade,useMediaQuery,useTheme,Snackbar,Alert,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SchoolIcon from '@mui/icons-material/School';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import axios from "axios";

import Dsaclass from "./Algorithms/dsaclass";
import Courses from "./Batches/Courses";
import PreBatch from "./Batches/PreBatch";
import RevBatch from "./Revision/RevBatch";
import ColBatch from "./College/ColBatch";
import Authentication from "./authentication";
import MyBatchesPage from "./MyBatchesPage";
import server from "../environment";
import NotificationPage from "./notification";
import DoubtPage from "./doubt";
import PaymentsPage from "./payment";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname !== "/dashboard";
  const isMainDashboard = location.pathname === "/dashboard";

  const [searchInput, setSearchInput] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const fallbackCourses = [
    { title: "premium Batches", route: "/pre" },
    { title: "Batches", route: "/cou" },
    { title: "DsaAlgo", route: "/dsac" },
    { title: "Revision", route: "/rev" },
  ];

  const handleSearch = (selectedTitle) => {
    const allCourses = [...purchases, ...fallbackCourses];
    const found = allCourses.find(
      (item) => item.title.toLowerCase() === selectedTitle.toLowerCase()
    );
    if (found) {
      navigate(found.route);
    } else {
      alert("No matching batch found.");
    }
  };

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const res = await axios.get(`${server}/api/user-purchases`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!Array.isArray(res.data)) {
          console.warn("⚠️ Unexpected response format:", res.data);
          return;
        }

        const mapped = res.data.map((item) => {
          const title = item.title?.trim();
          let route = "/cou";
          if (title === "Revision") route = "/rev";
          else if (title === "DsaAlgo") route = "/dsac";
          else if (title === "premium Batches") route = "/pre";

          return {
            title,
            route,
            price: item.price,
            expiryDate: item.expiryDate,
            classId: item.classId,
            image: `/images/p${item.classId}.png`,
          };
        });

        setPurchases(mapped);
      } catch (err) {
        console.error("Error fetching purchases", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  useEffect(() => {
    const options = fallbackCourses.map((course) => ({ label: course.title }));
    setSearchOptions(options);
  }, []);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "newNotification") {
        try {
          const data = JSON.parse(event.newValue);
          if (data?.message) {
            setPopupMessage(data.message);
            setShowPopup(true);
          }
        } catch (e) {
          console.error("Invalid notification format", e);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: darkMode ? "#121212" : "#f9f9f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 0,
          py: 0,
        }}
      >
        <Card
          sx={{
            width: "98vw",
            height: "95vh",
            borderRadius: 4,
            boxShadow: 6,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            mx: "auto",
          }}
        >
          <CardContent sx={{ flex: 1, overflowY: "auto", p: isMobile ? 2 : 4 }}>
            <Box display="flex" justifyContent="flex-end" mb={2}>
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            {isMainDashboard && (
              <Box
                display="flex"
                flexDirection={{ xs: "row", sm: "row" }}
                gap={1}
                alignItems="center"
                justifyContent="center"
                flexWrap={{ xs: "nowrap", sm: "nowrap" }}
                sx={{ width: "100%", mb: 2 }}
              >
                <Box sx={{ flexGrow: 1, maxWidth: { xs: "100%", sm: 500 } }}>
                  <Autocomplete
                    freeSolo
                    options={searchOptions}
                    inputValue={searchInput}
                    onInputChange={(event, newInputValue) =>
                      setSearchInput(newInputValue)
                    }
                    onChange={(event, newValue) => {
                      if (newValue && newValue.label)
                        handleSearch(newValue.label);
                    }}
                    getOptionLabel={(option) =>
                      typeof option === "string" ? option : option.label
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search batches..."
                        variant="outlined"
                        fullWidth
                        sx={{ height: "50px" }}
                      />
                    )}
                  />
                </Box>
                <Button
                  variant="contained"
                  onClick={() => handleSearch(searchInput)}
                  sx={{
                    height: "45px",
                    px: 3,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  Search
                </Button>
              </Box>
            )}

            {showBackButton && (
              <Button
                onClick={() => navigate(-1)}
                startIcon={<ArrowBackIosNewIcon />}
                sx={{ mt: 2 }}
              >
                Back
              </Button>
            )}

            {isMainDashboard && (
              <Fade in={true} timeout={1000}>
                <Box mt={6}>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Dashboard Sections
                  </Typography>

                  <Box mt={2} />

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Paper
                        elevation={4}
                        sx={{
                          p: 5,
                          borderRadius: 3,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "0.3s",
                          "&:hover": {
                            boxShadow: "0px 0px 20px 4px rgba(0, 123, 255, 0.4)",
                            transform: "scale(1.03)",
                          },
                        }}
                        onClick={() => navigate("/mybatches")}
                      >
                        <SchoolIcon fontSize="large" />
                        <Typography variant="h6" fontWeight={600}>
                          My Batches
                        </Typography>
                        <Typography variant="body2">
                          Track your classes by Class ID.
                        </Typography>
                      </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Paper
                        elevation={4}
                        sx={{
                          p: 5,
                          borderRadius: 3,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "0.3s",
                          "&:hover": {
                            boxShadow: "0px 0px 20px 4px rgba(0, 123, 255, 0.4)",
                            transform: "scale(1.03)",
                          },
                        }}
                        onClick={() => navigate("/notifications")}
                      >
                        <NotificationsIcon fontSize="large" />
                        <Typography variant="h6" fontWeight={600}>
                          Notifications
                        </Typography>
                        <Typography variant="body2">
                          View important messages from the owner.
                        </Typography>
                      </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Paper
                        elevation={4}
                        sx={{
                          p: 5,
                          borderRadius: 3,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "0.3s",
                          "&:hover": {
                            boxShadow: "0px 0px 20px 4px rgba(0, 123, 255, 0.4)",
                            transform: "scale(1.03)",
                          },
                        }}
                        onClick={() => navigate("/doubts")}
                      >
                        <HelpOutlineIcon fontSize="large" />
                        <Typography variant="h6" fontWeight={600}>
                          Doubt / Issue
                        </Typography>
                        <Typography variant="body2">
                          Raise and track your academic or technical doubts.
                        </Typography>
                      </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Paper
                        elevation={4}
                        sx={{
                          p: 5,
                          borderRadius: 3,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "0.3s",
                          "&:hover": {
                            boxShadow: "0px 0px 20px 4px rgba(0, 123, 255, 0.4)",
                            transform: "scale(1.03)",
                          },
                        }}
                        onClick={() => navigate("/payments")}
                      >
                        <PaymentIcon fontSize="large" />
                        <Typography variant="h6" fontWeight={600}>
                          Payments
                        </Typography>
                        <Typography variant="body2">
                          Manage your payments and subscriptions.
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Box mt={8} textAlign="center">
                    <Typography variant="h6" fontWeight={700} mb={2}>
                      📞 Contact With Us
                    </Typography>
                    <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
                      <IconButton
                        component="a"
                        href="https://whatsapp.com/channel/0029VbBV3BB5kg732Ch60Q1R"
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#0077b5" }}
                      >
                        <LinkedInIcon fontSize="large" />
                      </IconButton>
                      <IconButton
                        component="a"
                        href="https://whatsapp.com/channel/0029VbBV3BB5kg732Ch60Q1R"
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#25D366" }}
                      >
                        <WhatsAppIcon fontSize="large" />
                      </IconButton>
                      <IconButton
                        component="a"
                        href="https://www.instagram.com/crrack_it?igsh=MWI5d2FodmJocjFvbw=="
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#E4405F" }}
                      >
                        <InstagramIcon fontSize="large" />
                      </IconButton>
                      <IconButton
                        component="a"
                        href="https://t.me/+PiG4n-LCEw0yMDg1"
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#0088cc" }}
                      >
                        <TelegramIcon fontSize="large" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Fade>
            )}

            <Routes>
              <Route path="/auth" element={<Authentication />} />
              <Route path="/dsac" element={<Dsaclass />} />
              <Route path="/cou" element={<Courses />} />
              <Route path="/pre" element={<PreBatch />} />
             {/* <Route path="/rev" element={<RevBatch />} />
              <Route path="/col" element={<ColBatch />} />   */}
              <Route path="/mybatches" element={<MyBatchesPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/doubts" element={<DoubtPage />} />
              <Route path="/payments" element={<PaymentsPage />} />
            </Routes>
          </CardContent>
        </Card>
      </Box>

      {/* 🔔 Snackbar for new notification */}
      <Snackbar
        open={showPopup}
        autoHideDuration={4000}
        onClose={() => setShowPopup(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="info" onClose={() => setShowPopup(false)}>
          🔔 {popupMessage || "New Notification Received!"}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default Dashboard;
