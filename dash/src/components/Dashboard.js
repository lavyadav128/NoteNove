import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Button,
  Dialog,
  DialogContent,
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
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import axios from "axios";

import Dsaclass from "./dsaclass";
import Webclass from "./webclas";
import Courses from "./Courses";
import Authentication from "./authentication";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname !== "/dashboard";
  const isMainDashboard = location.pathname === "/dashboard";

  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [activeNoteKey, setActiveNoteKey] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const noteDescriptions = {
    mindmap: [
      "Visual representation of key topics and subtopics.",
      "Helps in quick understanding and memory retention.",
      "Connects concepts in a logical structure.",
    ],
    shortNotes: [
      "Concise summary of chapters.",
      "Highlights key formulas and definitions.",
      "Ideal for last-minute revision.",
    ],
    completeNotes: [
      "Detailed explanation of every topic.",
      "Includes theory, examples, and diagrams.",
      "Good for deep understanding and exam prep.",
    ],
    oneShotNotes: [
      "Ultra-condensed notes for rapid revision.",
      "Only most important points and shortcuts.",
      "Perfect for 1-day before exam brush-up.",
    ],
  };

  const screenshots = {
    mindmap: "/images/mindmap.png",
    shortNotes: "/images/shortNotes.png",
    completeNotes: "/images/completeNotes.png",
    oneShotNotes: "/images/oneShotNotes.png",
  };

  const noteCards = [
    { title: "Mindmap", color: "#ffffff", textColor: "#1565c0", key: "mindmap" },
    { title: "Short Notes", color: "#ffffff", textColor: "#ef6c00", key: "shortNotes" },
    { title: "Complete Notes", color: "#ffffff", textColor: "#2e7d32", key: "completeNotes" },
    { title: "One Shot Notes", color: "#ffffff", textColor: "#8e24aa", key: "oneShotNotes" },
  ];

  const fallbackCourses = [
    { title: "Class 10", route: "/cou" },
    { title: "Class 11 (Jee + Boards)", route: "/cou" },
    { title: "Class 12 (Jee + Boards)", route: "/cou" },
    { title: "Class 11 (Neet + Boards)", route: "/cou" },
    { title: "Class 12 (Neet + Boards)", route: "/cou" },
    { title: "DSA", route: "/dsac" },
    { title: "Web Development", route: "/webc" },
  ];

  const handleOpenModal = (key) => {
    setActiveNoteKey(key);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveNoteKey(null);
  };

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
        const res = await axios.get("/api/user-purchases", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPurchases(res.data);
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
    const options = uniqueTitles.map((title) => ({ label: title })); // ✅ convert to { label }
    setSearchOptions(options);
  }, [purchases]);
  

  useEffect(() => {
    if (isMainDashboard) {
      const timer = setTimeout(() => setShowCards(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isMainDashboard]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(to right, #121212, #1e1e1e)"
            : "linear-gradient(to right, #f0f2f5, #ffffff)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: isMobile ? 1 : 2,
          py: isMobile ? 1 : 3,
        }}
      >
        <Card
          sx={{
            width: "98vw",
            height: "95vh",
            borderRadius: isMobile ? 2 : 4,
            boxShadow: 6,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flex: 1, overflowY: "auto", p: isMobile ? 1.5 : 3 }}>
            <Box display="flex" justifyContent="flex-end" mb={1}>
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            {isMainDashboard && (
              <Box
  sx={{
    display: "flex",
    flexDirection: isMobile ? "row" : "row", // row on all, just to be explicit
    gap: 1,
    width: isMobile ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
  }}
>
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
  sx={{
    width: isMobile ? "calc(100% - 100px)" : 340,
    minWidth: 0,
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Search batches..."
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          fontSize: "0.9rem",
          height: 45,
          "& fieldset": {
            borderWidth: "1.5px",
          },
        },
        "& label": {
          fontSize: "0.9rem",
        },
      }}
    />
  )}
/>


  <Button
    variant="contained"
    onClick={() => handleSearch(searchInput)}
    sx={{
      borderRadius: 2,
      textTransform: "none",
      fontWeight: 600,
      width: 100, // fixed width button
      height: 40,
      fontSize: "0.9rem",
      whiteSpace: "nowrap",
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
                sx={{
                  mb: 2,
                  backgroundColor: "#fff",
                  color: "#333",
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2,
                  py: 1,
                  boxShadow: 1,
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                Back
              </Button>
            )}

            {isMainDashboard && showCards && (
              <Fade in={showCards} timeout={1000}>
                <Box>
                  <Typography variant="h5" fontWeight={700} mt={5} gutterBottom>
                    Explore Notes Resources
                  </Typography>

                  <Grid container spacing={5} mt={1}>
                    {noteCards.map(({ title, color, textColor, key }) => (
                      <Grid item xs={12} sm={6} key={key}>
                        <Paper
                          elevation={3}
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            backgroundColor: color,
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="h6" fontWeight={700} sx={{ color: textColor }}>
                            {title}
                          </Typography>
                          <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem", color: "#444" }}>
                            {noteDescriptions[key].map((point, idx) => (
                              <li key={idx}>
                                <Typography variant="body2">{point}</Typography>
                              </li>
                            ))}
                          </ul>
                          <Box textAlign="center" mt={2}>
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => handleOpenModal(key)}
                              sx={{ fontSize: "0.75rem", textTransform: "none", fontWeight: "bold" }}
                            >
                              Screenshot
                            </Button>
                          </Box>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Fade>
            )}

            <Routes>
              <Route path="/auth" element={<Authentication />} />
              <Route path="/dsac" element={<Dsaclass />} />
              <Route path="/webc" element={<Webclass />} />
              <Route path="/cou" element={<Courses />} />
            </Routes>

            <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
              <DialogContent sx={{ position: "relative", p: 3, textAlign: "center" }}>
                <IconButton onClick={handleCloseModal} sx={{ position: "absolute", top: 8, right: 8 }}>
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {activeNoteKey && noteCards.find((c) => c.key === activeNoteKey)?.title} Preview
                </Typography>
                <img
                  src={activeNoteKey ? screenshots[activeNoteKey] : ""}
                  alt="Preview"
                  style={{ width: "100%", borderRadius: 10 }}
                />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
