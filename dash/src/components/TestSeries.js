import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useParams, useNavigate } from "react-router-dom";
import testData from "./testdata";

const FullTestSeriesPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tests = testData[classId] || [];

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartTest = (test) => {
    navigate("/attempt-test", {
      state: {
        testTitle: test.title,
        questions: test.questions,
      },
    });
  };

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
                    onClick={() => handleStartTest(test)}
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
    </Box>
  );
};

export default FullTestSeriesPage;
