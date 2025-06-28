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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import questionsData from "./ddata";

const PracticePage = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const questions = questionsData[topicId] || [];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const q = questions[currentQIndex];

  const formatAnswerText = (text) => {
    const headings = [
      "APPROACH",
      "ALGORITHM",
      "TIME & SPACE COMPLEXITY",
      "TIME COMPLEXITY",
      "SPACE COMPLEXITY",
      "DRY RUN",
      "EXAMPLE",
      "STEP",
      "KEY LOOP",
      "EXPLANATION",
      "OPTIMIZED APPROACH",
      "MOORE’S VOTING ALGORITHM",
      "FINAL OUTPUT",
      "PASS",
    ];

    return text.split("\n").map((line, index) => {
      const trimmedLine = line.trim();
      const matchedHeading = headings.find((heading) =>
        trimmedLine.toUpperCase().startsWith(heading)
      );

      if (matchedHeading) {
        const parts = line.split(/:(.+)/); // Split on first colon
        return (
          <React.Fragment key={index}>
            <strong>{parts[0]}:</strong>
            {parts[1] && <span>{parts[1]}</span>}
            <br />
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        );
      }
    });
  };

  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#ffffff", // ✅ plain white background
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
        variant={isMobile ? "h6" : "h5"}
        fontWeight={700}
        gutterBottom
        align="center"
        sx={{ color: "#333", textAlign: "center" }}
      >
        Practice: {topicId.replace(/-/g, " ").toUpperCase()}
      </Typography>

      {/* Circular Question Buttons Row */}
      {questions.length > 0 && (
        <Box
          sx={{
            overflowX: "auto",
            py: 2,
            mb: 3,
            px: 1,
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Opera
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              width: "max-content",
              flexWrap: "nowrap",
            }}
          >
            {questions.map((_, index) => (
              <Button
                key={index}
                onClick={() => {
                  setCurrentQIndex(index);
                  setShowCode(false);
                }}
                sx={{
                  minWidth: 45,
                  height: 45,
                  flexShrink: 0,
                  borderRadius: "50%",
                  border: "2px solid #1976d2",
                  backgroundColor:
                    index === currentQIndex ? "#1976d2" : "#ffffff",
                  color: index === currentQIndex ? "#fff" : "#1976d2",
                  fontWeight: 600,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor:
                      index === currentQIndex ? "#1565c0" : "#e3f2fd",
                  },
                }}
              >
                {index + 1}
              </Button>
            ))}
          </Box>
        </Box>
      )}

      {q ? (
        <>
          <Typography
            variant="h6"
            fontWeight={600}
            gutterBottom
            mt={3}
            sx={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
          >
            Q{currentQIndex + 1}. {q.title}
          </Typography>

          <Box mt={2} p={2} borderRadius={2} bgcolor="#f9f9f9">
            <Typography
              fontWeight={600}
              color="text.secondary"
              gutterBottom
              sx={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
            >
              Answer:
            </Typography>

            {q.type === "code" ? (
              <SyntaxHighlighter language="java" style={oneDark}>
                {q.answer}
              </SyntaxHighlighter>
            ) : (
              <Typography whiteSpace="pre-line">
                {formatAnswerText(q.answer)}
              </Typography>
            )}

            {q.code && !showCode && (
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => setShowCode(true)}
              >
                Show Code
              </Button>
            )}

            {q.code && showCode && (
              <Box mt={2}>
                <SyntaxHighlighter language="java" style={oneDark}>
                  {q.code}
                </SyntaxHighlighter>
                <Button
                  variant="text"
                  color="error"
                  onClick={() => setShowCode(false)}
                  sx={{ mt: 1 }}
                >
                  Close Code
                </Button>
              </Box>
            )}
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
