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

  useEffect(() => {
    console.log("Route Params:", { classId, subject, slug });
  }, [classId, subject, slug]);


  const pdfLinks =
  classId === "10"
    ? {
        shortNotes: {
          pdf: `/images/shortnotes/${slug}.pdf`,
          audio: `/images/shortnotes/${slug}.mp3`,
        },
        completeNotes: {
          pdf: `/images/completenotes/${slug}.pdf`,
        },
      }
    : classId === "11"
    ? {
        mindmap: {
          pdf: `/images/mindmap/${slug}.pdf`,
        },
        shortNotes: {
          pdf: `/images/shortnotes/${slug}.pdf`,
        },
        completeNotes: {
          pdf: `/images/completenotes/${slug}.pdf`,
        },
      }
    : classId === "12"
    ? {
        mindmap: {
          pdf: `/images/mindmap/${slug}.pdf`,
        },
        shortNotes: {
          pdf: `/images/shortnotes/${slug}.pdf`,
        },
        completeNotes: {
          pdf: `/images/completenotes/${slug}.pdf`,
        },
      }
    : classId === "111"
    ? {
        mindmap: {
          pdf: `/images/mindmap/${slug}.pdf`,
        },
        shortNotes: {
          pdf: `/images/shortnotes/${slug}.pdf`,
        },
        completeNotes: {
          pdf: `/images/completenotes/${slug}.pdf`,
        },
      }
    : classId === "121"
    ? {
        mindmap: {
          pdf: `/images/mindmap/${slug}.pdf`,
        },
        shortNotes: {
          pdf: `/images/shortnotes/${slug}.pdf`,
        },
        completeNotes: {
          pdf: `/images/completenotes/${slug}.pdf`,
        },
      }
    : {
        mindmap: {
          pdf: `/images/mindmap/${slug}.pdf`,
        },
        shortNotes: {
          pdf: `/images/shortnotes/${slug}.pdf`,
        },
        completeNotes: {
          pdf: `/images/completenotes/${slug}.pdf`,
        },
      };





  const handleBack = () => {
    navigate(-1);
  };

  const openPdfIfExists = async (e, linkObj, label) => {
    e.preventDefault();

    const pdf = linkObj.pdf;
    const audio = linkObj.audio;

    const newTab = window.open("", "_blank");

    try {
      const response = await fetch(pdf, { method: "HEAD" });

      if (response.ok && response.headers.get("content-type")?.includes("pdf")) {
        let audioRes = { ok: false };
        if (label === "shortNotes" && audio) {
          audioRes = await fetch(audio, { method: "HEAD" });
        }

        const viewerHtml = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>PDF Viewer</title>
            <style>
              html, body {
                margin: 0;
                padding: 0;
                height: 100%;
              }
              body {
                display: flex;
                flex-direction: column;
                height: 100%;
                background: #f9f9f9;
              }
              embed {
                flex-grow: 1;
                width: 100%;
                border: none;
              }
              audio {
                width: 100%;
                height: 60px;
                border-top: 1px solid #ccc;
                box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
              }
            </style>
          </head>
          <body>
            <embed src="${pdf}" type="application/pdf" />
            ${
              label === "shortNotes" && audioRes.ok
                ? `<audio id="audio" src="${audio}" autoplay controls></audio>`
                : ""
            }
          </body>
          </html>
        `;

        newTab.document.write(viewerHtml);
        newTab.document.close();
      } else {
        newTab.close();
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        setSnackbarMessage("This PDF file does not exist yet.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("PDF open error:", error);
      newTab.close();
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      setSnackbarMessage("Error checking the files.");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

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
            {Object.entries(pdfLinks).map(([label, link]) => (
              <Grid item xs={12} sm={6} key={label}>
                <Card sx={getCardStyle(label)}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {formatLabel(label)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {getLabelDescription(label)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={(e) => openPdfIfExists(e, link, label)}
                    >
                      Open PDF
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

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

const formatLabel = (key) => {
  switch (key) {
    case "mindmap": return "Mindmap";
    case "shortNotes": return "Short Notes";
    case "completeNotes": return "Complete Notes";
    case "oneShotNotes": return "One Shot Notes";
    default: return key;
  }
};

const getLabelDescription = (key) => {
  switch (key) {
    case "mindmap": return "Visual summary and mindmap for this chapter.";
    case "shortNotes": return "Concise notes and key points of this chapter.";
    case "completeNotes": return "Full chapter notes with detailed explanation and examples.";
    case "oneShotNotes": return "Quick revision notes for a one-shot recap before exams.";
    default: return "";
  }
};

const getCardStyle = (key) => {
  const colors = {
    mindmap: ["#e3f2fd", "#1976d2"],
    shortNotes: ["#fff3e0", "#fb8c00"],
    completeNotes: ["#e8f5e9", "#4caf50"],
    oneShotNotes: ["#f3e5f5", "#9c27b0"],
  };
  const [bg, shadow] = colors[key] || ["#fff", "#ccc"];
  return {
    bgcolor: bg,
    borderRadius: 3,
    boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1), 0 6px 20px ${shadow}40`,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: `0 10px 25px ${shadow}66, 0 12px 30px ${shadow}99`,
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
};

export default ChapterDetail;
