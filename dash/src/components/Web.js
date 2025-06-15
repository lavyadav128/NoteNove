import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Collapse,
  Snackbar,
  Alert,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const navigate = useNavigate();
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBack = () => {
    navigate(-1);
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
    } catch (error) {
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

  const handleToggleExpand = (slug) => {
    setExpandedTopic((prev) => (prev === slug ? null : slug));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPdfUrl(null);
  };

  const cardStyle = {
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
    padding: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const content = (
    <CardContent sx={{ p: isMobile ? 2 : 4 }}>
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

      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 700, mb: 1 }}
      >
        Full Stack Web Development
      </Typography>

      <Typography
        variant="h5"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 600, mb: 4 }}
      >
        Topics & Notes
      </Typography>

      <Grid container spacing={3}>
        {topics.map((topic) => {
          const hasSubtopics = topic.subtopics.length > 0;
          return (
            <Grid item xs={12} sm={6} key={topic.slug}>
              <Card sx={cardStyle}>
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
                    <Collapse in={expandedTopic === topic.slug}>
                      <Box sx={{ mt: 1 }}>
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
    </CardContent>
  );

  return (
    <Box p={isMobile ? 2 : 4}>
      {isMobile ? (
        content
      ) : (
        <Card
          sx={{
            width: "100vw",
            maxWidth: 1355,
            borderRadius: 4,
            boxShadow:
              "0 4px 8px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.15)",
            p: 4,
          }}
        >
          {content}
        </Card>
      )}

      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        fullScreen
        PaperProps={{
          sx: {
            backgroundColor: "#000",
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "#000",
            bgcolor: "#fff",
            "&:hover": {
              bgcolor: "#eee",
            },
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            p: 0,
            height: "100vh",
          }}
        >
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
