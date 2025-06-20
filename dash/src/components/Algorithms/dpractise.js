import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import questionsData from "./ddata";

const PracticePage = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const questions = questionsData[topicId] || [];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const q = questions[currentQIndex];

  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 8 },
        background: "linear-gradient(to right, #fdfbfb, #ebedee)",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      {/* Back Button */}
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBackIosNewIcon />}
        sx={{
          alignSelf: "flex-start",
          mb: 3,
          fontWeight: 600,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: 2,
          textTransform: "none",
          px: 2.5,
          py: 1,
          boxShadow: 1,
          "&:hover": {
            backgroundColor: "#f0f0f0",
            boxShadow: 2,
          },
        }}
      >
        Back
      </Button>

      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        align="center"
        sx={{ color: "#333" }}
      >
        Practice: {topicId.replace(/-/g, " ").toUpperCase()}
      </Typography>

      {q ? (
        <>
          <Typography variant="h6" fontWeight={600} gutterBottom mt={3}>
            Q{currentQIndex + 1}. {q.title}
          </Typography>

          <Box mt={2} p={2} borderRadius={2} bgcolor="#f9f9f9">
            <Typography fontWeight={600} color="text.secondary" gutterBottom>
              Answer:
            </Typography>
            <Typography>{q.answer}</Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center" mt={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                onClick={() =>
                  setCurrentQIndex((prev) => Math.max(prev - 1, 0))
                }
                disabled={currentQIndex === 0}
                fullWidth
                variant="outlined"
              >
                Previous
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Button
                onClick={() =>
                  setCurrentQIndex((prev) =>
                    Math.min(prev + 1, questions.length - 1)
                  )
                }
                disabled={currentQIndex === questions.length - 1}
                fullWidth
                variant="contained"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="h6" color="text.secondary" mt={5}>
          No questions available for this topic.
        </Typography>
      )}
    </Box>
  );
};

export default PracticePage;
