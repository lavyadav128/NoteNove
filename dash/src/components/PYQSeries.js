import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Modal,
  Snackbar,
  Alert,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DownloadIcon from "@mui/icons-material/Download";
import { useParams, useNavigate } from "react-router-dom";

const pyqData = {
  1: [
    { title: "maths (2025)", slug: "11.pdf" },
    { title: "maths soln (2025)", slug: "12.pdf" },
    { title: "science (2025)", slug: "13.pdf" },
    { title: "science soln (2025)", slug: "14.pdf" },
    { title: "social science (2025)", slug: "15.pdf" },
    { title: "social science soln (2025)", slug: "16.pdf" },
    { title: "maths (2024)", slug: "17.pdf" },
    { title: "maths soln (2024)", slug: "18.pdf" },
    { title: "science (2024)", slug: "19.pdf" },
    { title: "science soln (2024)", slug: "110.pdf" },
    { title: "social science (2024)", slug: "111.pdf" },
    { title: "social science soln (2024)", slug: "112.pdf" },
  ],
  2: [
    { title: "Full PYQ (Paper 1)", slug: "21.pdf" },
    { title: "Full PYQ (Paper 2)", slug: "22.pdf" },
    { title: "Full PYQ (Paper 3)", slug: "23.pdf" },
    { title: "Full PYQ (Paper 4)", slug: "24.pdf" },
    { title: "Full PYQ (Paper 5)", slug: "25.pdf" },
    { title: "Full PYQ (Paper 6)", slug: "26.pdf" },
    { title: "Full PYQ (Paper 7)", slug: "27.pdf" },
    { title: "Full PYQ (Paper 8)", slug: "28.pdf" },
    { title: "Full PYQ (Paper 9)", slug: "29.pdf" },
  ],
  3: [
    { title: "Full PYQ (Paper 1)", slug: "21.pdf" },
    { title: "Full PYQ (Paper 2)", slug: "22.pdf" },
    { title: "Full PYQ (Paper 3)", slug: "23.pdf" },
    { title: "Full PYQ (Paper 4)", slug: "24.pdf" },
    { title: "Full PYQ (Paper 5)", slug: "25.pdf" },
    { title: "Full PYQ (Paper 6)", slug: "26.pdf" },
    { title: "Full PYQ (Paper 7)", slug: "27.pdf" },
    { title: "Full PYQ (Paper 8)", slug: "28.pdf" },
    { title: "Full PYQ (Paper 9)", slug: "29.pdf" },
  ],
};

const FullPyqPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [modalOpen, setModalOpen] = useState(false);
  const [viewerContent, setViewerContent] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const handleBack = () => {
    navigate(-1);
  };

  const openPdfIfExists = async (e, slug) => {
    e.preventDefault();
    const pdfPath = `/images/pyq/${slug}`;

    try {
      const res = await fetch(pdfPath, { method: "HEAD" });

      if (!res.ok || !res.headers.get("content-type")?.includes("pdf")) {
        setSnackbarMessage("This PDF file does not exist yet.");
        setSnackbarOpen(true);
        return;
      }

      const fullUrl = isMobile
        ? `https://docs.google.com/gview?embedded=true&url=${window.location.origin}${pdfPath}`
        : pdfPath;

      setViewerContent(
        <Box sx={{ height: "100%", bgcolor: "#f0f0f0" }}>
          <iframe
            src={fullUrl}
            title="PDF Viewer"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </Box>
      );
      setModalOpen(true);
    } catch (error) {
      console.error("PDF open error:", error);
      setSnackbarMessage("Error loading PDF.");
      setSnackbarOpen(true);
    }
  };

  const handleDownloadPdf = (slug) => {
    const link = document.createElement("a");
    link.href = `/images/pyq/${slug}`;
    link.download = slug;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const papers = pyqData[classId] || [];

  return (
    <Box p={isMobile ? 2 : 4} sx={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      <Box display="flex" justifyContent="center">
        {isMobile ? (
          <Box width="100%">
            <Button
              onClick={handleBack}
              startIcon={<ArrowBackIosNewIcon />}
              sx={{
                mb: 2,
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
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Full PYQ Papers
            </Typography>

            <Grid container spacing={2}>
              {papers.map((paper, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      borderRadius: 2,
                      transition: "0.2s",
                      position: "relative",
                      "&:hover": {
                        transform: "scale(1.01)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={600} gutterBottom align="center">
                        {paper.title}
                      </Typography>
                      <Box display="flex" width="100%" alignItems="center">
                        <Button
                          variant="contained"
                          onClick={(e) => openPdfIfExists(e, paper.slug)}
                          sx={{ flex: 1 }}
                        >
                          View PDF
                        </Button>
                        <IconButton onClick={() => handleDownloadPdf(paper.slug)}>
                          <DownloadIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Card
            sx={{
              width: "100%",
              maxWidth: "12000px",
              mx: "auto",
              minHeight: "85vh",
              p: 4,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: 10,
            }}
          >
            <Button
              onClick={handleBack}
              startIcon={<ArrowBackIosNewIcon />}
              sx={{
                mb: 2,
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
              fontWeight="bold"
              textAlign="center"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Full PYQ Papers 
            </Typography>

            <Grid container spacing={3}>
              {papers.map((paper, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    elevation={3}
                    sx={{
                      borderRadius: 3,
                      transition: "0.2s",
                      position: "relative",
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={600} gutterBottom align="center">
                        {paper.title}
                      </Typography>
                      <Box display="flex" width="100%" alignItems="center">
                        <Button
                          variant="contained"
                          onClick={(e) => openPdfIfExists(e, paper.slug)}
                          sx={{ flex: 1 }}
                        >
                          View PDF
                        </Button>
                        <IconButton onClick={() => handleDownloadPdf(paper.slug)}>
                          <DownloadIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        )}
      </Box>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "white",
          }}
        >
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <CloseIcon />
          </IconButton>
          {viewerContent}
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={handleCloseSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FullPyqPage;
