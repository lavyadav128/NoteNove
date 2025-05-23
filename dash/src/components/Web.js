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
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  // Snackbar state for PDF not found errors
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  // New openPdfIfExists function (async)
  const openPdfIfExists = async (e, topicSlug, slug) => {
    e.preventDefault();

    const url = `/images/fullstack/${topicSlug}/${slug}.pdf`;
    // Open blank tab immediately (user gesture)
    const newTab = window.open("", "_blank");

    try {
      const response = await fetch(url, { method: "HEAD" });
      const contentType = response.headers.get("content-type") || "";

      if (response.ok && contentType.includes("pdf")) {
        newTab.location.href = url;
      } else {
        newTab.close();
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        setSnackbarMessage("This PDF file does not exist yet.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      newTab.close();
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      setSnackbarMessage("Error checking the file.");
      setSnackbarOpen(true);
    }
  };

  const handleOpenNotes = (topicSlug, slug, e) => {
    openPdfIfExists(e, topicSlug, slug);
  };

  const handleToggleExpand = (slug) => {
    setExpandedTopic((prev) => (prev === slug ? null : slug));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Card
        sx={{
          width: "95vw",
          maxWidth: 12000,
          borderRadius: 4,
          boxShadow: "0 4px 8px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.15)",
          p: 4,
        }}
      >
        <CardContent>
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
                  <Card
                    sx={{
                      bgcolor: "#e3f2fd",
                      borderRadius: 3,
                      boxShadow:
                        "0 4px 12px rgba(0, 0, 0, 0.1), 0 6px 20px #1976d240",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow:
                          "0 10px 25px #1976d266, 0 12px 30px #1976d299",
                      },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: 2,
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
                        <Collapse in={expandedTopic === topic.slug}>
                          <Box sx={{ mt: 1 }}>
                            {topic.subtopics.map((sub, index) => {
                              const subSlug = `${topic.slug}-${sub
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`;
                              return (
                                <Button
                                  key={index}
                                  variant="outlined"
                                  color="primary"
                                  fullWidth
                                  sx={{ mb: 1, textTransform: "none" }}
                                  onClick={(e) =>
                                    handleOpenNotes(topic.slug, subSlug, e)
                                  }
                                >
                                  {sub}
                                </Button>
                              );
                            })}
                          </Box>
                        </Collapse>
                      </>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={(e) => handleOpenNotes(topic.slug, topic.slug, e)}
                      >
                        Open Notes
                      </Button>
                    )}
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>

        {/* Snackbar */}
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
      </Card>
    </Box>
  );
};

export default WebDevTopics;
