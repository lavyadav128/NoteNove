import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  Collapse,
  Snackbar,
  Alert,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  Tabs,
  Tab,
  Paper,
  Divider,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const topics = [
  { name: "GitHub", slug: "github", subtopics: [] },
  { name: "SQL", slug: "sql", subtopics: [] },
  {
    name: "Frontend",
    slug: "frontend",
    subtopics: ["html", "css", "Javascript", "react"],
  },
  {
    name: "Backend",
    slug: "backend",
    subtopics: ["Node.js", "Express", "Authentication"],
  },
  {
    name: "theory",
    slug: "theory",
    subtopics: [
      "computer-networking",
      "object-oriented-programming",
      "dbms",
      "operating-system",
    ],
  },
];

const WebDevTopics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBack = () => navigate(-1);
  const handleTabChange = (_, newValue) => setTabIndex(newValue);
  const handleToggleExpand = (slug) =>
    setExpandedTopic((prev) => (prev === slug ? null : slug));
  const handleSnackbarClose = () => setSnackbarOpen(false);
  const handleCloseModal = () => {
    setModalOpen(false);
    setPdfUrl(null);
  };

  const openPdfIfExists = async (e, topicSlug, slug) => {
    e.preventDefault();
    const url = `/images/fullstack/${topicSlug}/${slug}.pdf`;

    try {
      const response = await fetch(url, { method: "HEAD" });
      const contentType = response.headers.get("content-type") || "";

      if (response.ok && contentType.includes("pdf")) {
        const viewerUrl = isMobile
          ? `https://docs.google.com/gview?embedded=true&url=${window.location.origin}${url}`
          : url;
        setPdfUrl(viewerUrl);
        setModalOpen(true);
      } else {
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        setSnackbarMessage("This PDF file does not exist yet.");
        setSnackbarOpen(true);
      }
    } catch {
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      setSnackbarMessage("Error checking the file.");
      setSnackbarOpen(true);
    }
  };

  const handleDownload = (topicSlug, slug) => {
    const url = `/images/fullstack/${topicSlug}/${slug}.pdf`;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}.pdf`;
    a.click();
  };

  const renderTopics = () => (
    <Grid container spacing={3} alignItems="flex-start">
      {topics.map((topic) => {
        const hasSubtopics = topic.subtopics.length > 0;
        return (
          <Grid item xs={12} sm={6} key={topic.slug}>
            <Card
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(25, 118, 210, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow:
                    "0 8px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(25, 118, 210, 0.3)",
                },
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={1}>
                {topic.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {hasSubtopics
                  ? "This topic includes subtopics. Click to view them."
                  : "Click below to access the notes."}
              </Typography>

              {hasSubtopics ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleToggleExpand(topic.slug)}
                    sx={{ mb: 1 }}
                  >
                    {expandedTopic === topic.slug
                      ? "Hide Subtopics"
                      : "View Subtopics"}
                  </Button>

                  <Collapse
                    in={expandedTopic === topic.slug}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box mt={1}>
                      {topic.subtopics.map((sub, index) => {
                        const subSlug = `${topic.slug}-${sub
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`;
                        return (
                          <Box
                            key={index}
                            display="flex"
                            alignItems="center"
                            gap={1}
                            mb={1}
                          >
                            <Button
                              variant="outlined"
                              color="primary"
                              fullWidth
                              sx={{ textTransform: "none" }}
                              onClick={(e) =>
                                openPdfIfExists(e, topic.slug, subSlug)
                              }
                            >
                              {sub}
                            </Button>
                            <IconButton
                              onClick={() =>
                                handleDownload(topic.slug, subSlug)
                              }
                              size="small"
                              sx={{
                                bgcolor: "#f0f0f0",
                                "&:hover": { bgcolor: "#e0e0e0" },
                              }}
                            >
                              <DownloadIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        );
                      })}
                    </Box>
                  </Collapse>
                </>
              ) : (
                <Box display="flex" alignItems="center" gap={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={(e) =>
                      openPdfIfExists(e, topic.slug, topic.slug)
                    }
                  >
                    Open Notes
                  </Button>
                  <IconButton
                    onClick={() => handleDownload(topic.slug, topic.slug)}
                    size="small"
                    sx={{
                      bgcolor: "#f0f0f0",
                      "&:hover": { bgcolor: "#e0e0e0" },
                    }}
                  >
                    <DownloadIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        py: 4,
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "99%",
          maxWidth: "11000px",
          borderRadius: 4,
          p: { xs: 2, sm: 4, md: 6 },
          backgroundColor: "#ffffff",
        }}
      >
        <Box display="flex" justifyContent="flex-start">
          <Button
            onClick={handleBack}
            startIcon={<ArrowBackIosNewIcon />}
            sx={{
              mb: 3,
              backgroundColor: "#fff",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              px: 2.5,
              py: 1,
              boxShadow: 1,
              "&:hover": {
                backgroundColor: "#f5f5f5",
                boxShadow: 2,
              },
            }}
          >
            Back
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mb={4}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                px: 3,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.primary.main,
                height: 3,
              },
            }}
          >
            <Tab label="Web Development" />
            <Tab label="Practice Sheet" />
          </Tabs>
        </Box>

        {tabIndex === 0 && renderTopics()}

        {tabIndex === 1 &&
          (isMobile ? (
            <Box>
              <Typography
                variant="h6"
                fontWeight={700}
                gutterBottom
                textAlign="left"
                px={1}
              >
                Start Practice
              </Typography>
              <Typography variant="body2" color="text.secondary" px={1}>
                Dive into curated Web Dev problems
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, ml: 1 }}
                onClick={() => navigate("/wtopic")}
              >
                Go to Practice
              </Button>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="40vh"
              px={2}
            >
              <Card
                onClick={() => navigate("/wtopic")}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 3,
                  textAlign: "center",
                  width: 400,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Start Practice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dive into curated Web Dev problems
                </Typography>
              </Card>
            </Box>
          ))}

        <Divider sx={{ mt: 6, mb: 2 }} />
        <Typography variant="body2" textAlign="center" color="text.secondary">
          🌐 Keep building, keep learning. Web Dev mastery is a journey!
        </Typography>
      </Paper>

      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        fullScreen
        PaperProps={{ sx: { backgroundColor: "#000", position: "relative" } }}
      >
        <IconButton
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "#000",
            bgcolor: "#fff",
            "&:hover": { bgcolor: "#eee" },
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 0, height: "100vh" }}>
          {pdfUrl && (
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="PDF Viewer"
            />
          )}
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default WebDevTopics;
