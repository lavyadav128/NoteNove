import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Button,
  IconButton,
  TextField,
  Autocomplete,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Fade,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SchoolIcon from '@mui/icons-material/School';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import axios from "axios";

import Dsaclass from "./dsaclass";
import Webclass from "./webclas";
import Courses from "./Courses";
import PreBatch from "./PreBatch";
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

  const fallbackCourses = [
    { title: "Class 10", route: "/cou" },
    { title: "Class 11 (Jee + Boards)", route: "/cou" },
    { title: "Class 12 (Jee + Boards)", route: "/cou" },
    { title: "Class 11 (Neet + Boards)", route: "/cou" },
    { title: "Class 12 (Neet + Boards)", route: "/cou" },
    { title: "DSA", route: "/dsac" },
    { title: "Web Development", route: "/webc" },
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
          if (title === "DSA") route = "/dsac";
          else if (title === "Web Development") route = "/webc";

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
    const allCourses = [...purchases, ...fallbackCourses];
    const uniqueTitles = Array.from(new Set(allCourses.map((course) => course.title)));
    const options = uniqueTitles.map((title) => ({ label: title }));
    setSearchOptions(options);
  }, [purchases]);

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
          px: 2,
          py: 4,
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
              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} alignItems="center" justifyContent="center">
                <Autocomplete
                  freeSolo
                  options={searchOptions}
                  inputValue={searchInput}
                  onInputChange={(event, newInputValue) => setSearchInput(newInputValue)}
                  onChange={(event, newValue) => {
                    if (newValue && newValue.label) handleSearch(newValue.label);
                  }}
                  getOptionLabel={(option) =>
                    typeof option === "string" ? option : option.label
                  }
                  sx={{ width: isMobile ? "100%" : 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Search batches..." variant="outlined" />
                  )}
                />
                <Button variant="contained" onClick={() => handleSearch(searchInput)}>
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

                  {/* Spacing added below title */}
                  <Box mt={6} />

                  <Grid container spacing={6}>
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
                        <Typography variant="h6" fontWeight={600}>My Batches</Typography>
                        <Typography variant="body2">Track your classes by Class ID.</Typography>
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
                        <Typography variant="h6" fontWeight={600}>Notifications</Typography>
                        <Typography variant="body2">View important messages from the owner.</Typography>
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
                        <Typography variant="h6" fontWeight={600}>Doubt / Issue</Typography>
                        <Typography variant="body2">Raise and track your academic or technical doubts.</Typography>
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
                        <Typography variant="h6" fontWeight={600}>Payments</Typography>
                        <Typography variant="body2">Manage your payments and subscriptions.</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            )}

            <Routes>
              <Route path="/auth" element={<Authentication />} />
              <Route path="/dsac" element={<Dsaclass />} />
              <Route path="/webc" element={<Webclass />} />
              <Route path="/cou" element={<Courses />} />
              <Route path="/pre" element={<PreBatch />} />
              <Route path="/mybatches" element={<MyBatchesPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/doubts" element={<DoubtPage />} />
              <Route path="/payments" element={<PaymentsPage />} />
            </Routes>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
