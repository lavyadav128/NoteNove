import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  Modal,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import { useParams, useNavigate } from "react-router-dom";

// 🔁 Replace the Google Form IDs with real ones
const testData = {
  1: [
    { title: "Class 10 Test 1", slug: "1FAIpQLScVxauE3ICOdz4mjlIAK3_Rxv73kG_E6O-cqY3DTptP_Ks1nw" },
    { title: "Class 10 Test 2", slug: "1FAIpQLSeABC002" },
    { title: "Class 10 Test 3", slug: "1FAIpQLSeABC003" },
    { title: "Class 10 Test 4", slug: "1FAIpQLSeABC004" },
    { title: "Class 10 Test 5", slug: "1FAIpQLSeABC005" },
    { title: "Class 10 Test 6", slug: "1FAIpQLSeABC006" },
    { title: "Class 10 Test 7", slug: "1FAIpQLSeABC007" },
    { title: "Class 10 Test 8", slug: "1FAIpQLSeABC008" },
    { title: "Class 10 Test 9", slug: "1FAIpQLSeABC009" },
    { title: "Class 10 Test 10", slug: "1FAIpQLSeABC010" },
  ],
  2: [
    { title: "Class 11 Test 1", slug: "1FAIpQLSeDEF001" },
    { title: "Class 11 Test 2", slug: "1FAIpQLSeDEF002" },
    { title: "Class 11 Test 3", slug: "1FAIpQLSeDEF003" },
    { title: "Class 11 Test 4", slug: "1FAIpQLSeDEF004" },
    { title: "Class 11 Test 5", slug: "1FAIpQLSeDEF005" },
    { title: "Class 11 Test 6", slug: "1FAIpQLSeDEF006" },
    { title: "Class 11 Test 7", slug: "1FAIpQLSeDEF007" },
    { title: "Class 11 Test 8", slug: "1FAIpQLSeDEF008" },
    { title: "Class 11 Test 9", slug: "1FAIpQLSeDEF009" },
    { title: "Class 11 Test 10", slug: "1FAIpQLSeDEF010" },
  ],
  3: [
    { title: "Class 12 Test 1", slug: "1FAIpQLSeXYZ001" },
    { title: "Class 12 Test 2", slug: "1FAIpQLSeXYZ002" },
    { title: "Class 12 Test 3", slug: "1FAIpQLSeXYZ003" },
    { title: "Class 12 Test 4", slug: "1FAIpQLSeXYZ004" },
    { title: "Class 12 Test 5", slug: "1FAIpQLSeXYZ005" },
    { title: "Class 12 Test 6", slug: "1FAIpQLSeXYZ006" },
    { title: "Class 12 Test 7", slug: "1FAIpQLSeXYZ007" },
    { title: "Class 12 Test 8", slug: "1FAIpQLSeXYZ008" },
    { title: "Class 12 Test 9", slug: "1FAIpQLSeXYZ009" },
    { title: "Class 12 Test 10", slug: "1FAIpQLSeXYZ010" },
  ],
};

const FullTestSeriesPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [selectedFormId, setSelectedFormId] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartTest = (slug) => {
    setSelectedFormId(slug);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFormId("");
  };

  const tests = testData[classId] || [];

  const renderTests = () => {
    if (tests.length === 0) {
      return (
        <Typography
          variant="h6"
          fontWeight={500}
          align="center"
          color="text.secondary"
          sx={{ mt: 4 }}
        >
          No tests available for this class.
        </Typography>
      );
    }

    return (
      <Grid container spacing={isMobile ? 2 : 3}>
        {tests.map((test, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  gutterBottom
                  align="center"
                >
                  {test.title}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleStartTest(test.slug)}
                  >
                    Start Test
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box
      p={isMobile ? 2 : 4}
      sx={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}
    >
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
              Full Test Series - Class {classId}
            </Typography>

            {renderTests()}
          </Box>
        ) : (
          <Card
            sx={{
              width: "100%",
              maxWidth: "1400px",
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
              Full Test Series
            </Typography>

            {renderTests()}
          </Card>
        )}
      </Box>

      {/* Fullscreen Modal with top/bottom spacing */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "0vh",
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? "95%" : "100%",
            height: "99vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 1,
            outline: "none",
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <iframe
  title="Google Form"
  src={`https://docs.google.com/forms/d/e/${selectedFormId}/viewform?embedded=true`}
  style={{
    width: "100%",
    height: "100%",
    minWidth:"100",
    border: "none",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    transform: "scale(1)", // Optional: change scale to zoom
    transformOrigin: "top left"
  }}
  allowFullScreen
/>

        </Box>
      </Modal>
    </Box>
  );
};

export default FullTestSeriesPage;
