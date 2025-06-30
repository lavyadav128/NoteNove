import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  Card,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import questionsData from "./rdata";
import flashData from "./fdata";

const FlashRevisionPDFStyle = ({ chapterName, contentLines }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fdfdfd",
        minHeight: "100vh",
        p: 4,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          color: "#283593",
          mb: 6,
        }}
      >
        {chapterName}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {contentLines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith("⚡️")) {
            return (
              <Grid item xs={12} key={idx}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#1e88e5", mb: 2 }}
                >
                  {trimmed.replace("⚡️", "").trim()}
                </Typography>
              </Grid>
            );
          }

          if (trimmed.startsWith("Q)")) {
            return (
              <Grid item xs={12} md={6} key={idx}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, borderLeft: "6px solid #c62828" }}
                >
                  <Typography variant="subtitle1" sx={{ whiteSpace: "pre-line" }}>
                    {trimmed}
                  </Typography>
                </Paper>
              </Grid>
            );
          }

          if (
            trimmed.startsWith("✅") ||
            trimmed.startsWith("🔑") ||
            trimmed.startsWith("🧪")
          ) {
            return (
              <Grid item xs={12} key={idx}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ color: "#00796b" }}
                >
                  {trimmed}
                </Typography>
              </Grid>
            );
          }

          if (trimmed.includes(":")) {
            const [heading, rest] = trimmed.split(/:(.+)/);
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper elevation={1} sx={{ p: 2, textAlign: "center" }}>
                  <Typography fontWeight="bold" gutterBottom>
                    {heading.trim()}
                  </Typography>
                  <Typography>{rest?.trim()}</Typography>
                </Paper>
              </Grid>
            );
          }

          return (
            <Grid item xs={12} key={idx}>
              <Typography>{trimmed}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const PracticePage = () => {
  const { classId, subject, chapterSlug } = useParams();
  const navigate = useNavigate();

  const questions = questionsData?.[classId]?.[subject]?.[chapterSlug] || [];

  const flashText =
    flashData?.[classId]?.[subject]?.[chapterSlug] ||
    "No flash revision content available.";

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [tab, setTab] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const q = questions[currentQIndex];

  const practiceContent = (
    <>
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        align="center"
        sx={{ color: "#333" }}
      >
        Practice: {(chapterSlug || "").replace(/-/g, " ").toUpperCase()}
      </Typography>

      {questions.length > 0 ? (
        <>
          <Typography variant="h6" fontWeight={600} gutterBottom mt={3}>
            Q{currentQIndex + 1}. {q.title}
          </Typography>

          <Box mt={2} p={2} borderRadius={2} bgcolor="#f9f9f9">
            <Typography fontWeight={600} color="text.secondary" gutterBottom>
              Answer:
            </Typography>

            {q.type === "code" ? (
              <SyntaxHighlighter language="java" style={oneDark}>
                {q.answer}
              </SyntaxHighlighter>
            ) : (
              <Typography whiteSpace="pre-line">{q.answer}</Typography>
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
    </>
  );

  return (
    <Box
      p={isMobile ? 1 : 4}
      sx={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {isMobile ? (
        <Box
          sx={{
            p: 2,
            backgroundColor: "#fff",
            minHeight: "100vh",
            borderRadius: 0,
          }}
        >
          <Button
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIosNewIcon />}
            sx={{
              mb: 2,
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

          <Tabs
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Practice" />
            <Tab label="Flash Revision" />
          </Tabs>

          <Box mt={2}>
            {tab === 0 ? (
              practiceContent
            ) : (
              <FlashRevisionPDFStyle
                chapterName={(chapterSlug || "").replace(/-/g, " ").toUpperCase()}
                contentLines={
                  typeof flashText === "string" ? flashText.split("\n") : []
                }
              />
            )}
          </Box>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center">
          <Card
            sx={{
              width: "100%",
              maxWidth: "100vw",
              height: "90vh",
              borderRadius: 3,
              boxShadow: 5,
              p: isMobile ? 2 : 4,
              backgroundColor: "#ffffff",
              overflowY: "auto",
            }}
          >
            <Button
              onClick={() => navigate(-1)}
              startIcon={<ArrowBackIosNewIcon />}
              sx={{
                alignSelf: "flex-start",
                mb: 2,
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

            <Tabs
              value={tab}
              onChange={(e, newValue) => setTab(newValue)}
              TabIndicatorProps={{
                sx: {
                  width: "40px",
                  left: "calc(50% - 20px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Tab label="Practice" />
              <Tab label="Flash Revision" />
            </Tabs>

            <Box mt={2}>
              {tab === 0 ? (
                practiceContent
              ) : (
                <FlashRevisionPDFStyle
                  chapterName={(chapterSlug || "").replace(/-/g, " ").toUpperCase()}
                  contentLines={
                    typeof flashText === "string" ? flashText.split("\n") : []
                  }
                />
              )}
            </Box>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default PracticePage;
