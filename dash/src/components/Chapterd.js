import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState, useEffect } from "react";

const ChapterDetail = () => {
  const { classId, subject, slug } = useParams();
  const navigate = useNavigate();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Log route parameters to debug blank page issue
  useEffect(() => {
    console.log("Route Params:", { classId, subject, slug });
  }, [classId, subject, slug]);

  const pdfLinks = {
    mindmap: `/images/mindmap/${slug}.pdf`,
    shortNotes: `/images/shortnotes/${slug}.pdf`,
    completeNotes: `/images/completenotes/${slug}.pdf`,
    oneShotNotes: `/images/oneshot/${slug}.pdf`,
  };

  const handleBack = () => {
    navigate(-1);
  };

  const openPdfIfExists = async (e, url) => {
    e.preventDefault();

    // Open a blank tab immediately (user gesture)
    const newTab = window.open("", "_blank");

    try {
      const response = await fetch(url, { method: "HEAD" });

      // Check response status and content-type header
      const contentType = response.headers.get("content-type") || "";
      console.log(`Checking PDF: ${url}, status: ${response.status}, content-type: ${contentType}`);

      if (response.ok && contentType.includes("pdf")) {
        // Redirect the tab to the PDF URL
        newTab.location.href = url;
      } else {
        // Close the blank tab and show snackbar + vibrate
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Defensive check for slug
  if (!slug) {
    return (
      <Box p={3}>
        <Typography variant="h6" color="error" textAlign="center">
          Please select a chapter first.
        </Typography>
      </Box>
    );
  }

  const formattedSubject = subject
    ? subject.charAt(0).toUpperCase() + subject.slice(1)
    : "";

  const formattedChapter = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Card
        sx={{
          width: "95vw",
          maxWidth: 8000,
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
            {formattedSubject}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            textAlign="center"
            sx={{ fontWeight: 600, mb: 4 }}
          >
            Chapter: {formattedChapter}
          </Typography>

          <Grid container spacing={4}>
            {/* Mindmap */}
            <Grid item xs={12} sm={6}>
              <Card sx={cardStyles("#e3f2fd", "#1976d2")}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Mindmap
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visual summary and mindmap for this chapter.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={(e) => openPdfIfExists(e, pdfLinks.mindmap)}
                  >
                    Open PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Short Notes */}
            <Grid item xs={12} sm={6}>
              <Card sx={cardStyles("#fff3e0", "#fb8c00")}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Short Notes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Concise notes and key points of this chapter.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={(e) => openPdfIfExists(e, pdfLinks.shortNotes)}
                  >
                    Open PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Complete Notes */}
            <Grid item xs={12} sm={6}>
              <Card sx={cardStyles("#e8f5e9", "#4caf50")}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Complete Notes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Full chapter notes with detailed explanation and examples.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={(e) => openPdfIfExists(e, pdfLinks.completeNotes)}
                  >
                    Open PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* One Shot Notes */}
            <Grid item xs={12} sm={6}>
              <Card sx={cardStyles("#f3e5f5", "#9c27b0")}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    One Shot Notes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quick revision notes for a one-shot recap before exams.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={(e) => openPdfIfExists(e, pdfLinks.oneShotNotes)}
                  >
                    Open PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

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
    </Box>
  );
};

// Style helper
const cardStyles = (bgColor, shadowColor) => ({
  bgcolor: bgColor,
  borderRadius: 3,
  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1), 0 6px 20px ${shadowColor}40`,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: `0 10px 25px ${shadowColor}66, 0 12px 30px ${shadowColor}99`,
  },
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export default ChapterDetail;
