import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Tabs,
  Tab,
  IconButton,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TestAttemptPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // { testTitle, questions }

  const questions = (state?.questions || []).filter(
    (q) => q.testTitle !== "Class 11 Full Test 1"
  );

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [responses, setResponses] = useState(
    JSON.parse(localStorage.getItem("testResponses")) ||
      Array(questions.length).fill(null)
  );
  const [marked, setMarked] = useState(
    JSON.parse(localStorage.getItem("markedQuestions")) ||
      Array(questions.length).fill(false)
  );
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 hours
  const [paused, setPaused] = useState(false);

  const subjects = [...new Set(questions.map((q) => q.subject))];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (paused || submitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [paused, submitted]);

  useEffect(() => {
    localStorage.setItem("testResponses", JSON.stringify(responses));
    localStorage.setItem("markedQuestions", JSON.stringify(marked));
  }, [responses, marked]);

  const handleOptionChange = (selected) => {
    const newResponses = [...responses];
    newResponses[currentQIndex] = selected;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    let sc = 0;
    responses.forEach((ans, i) => {
      if (ans === questions[i].answer) sc += 4;
      else if (ans !== null) sc -= 1;
    });
    setScore(sc);
    setSubmitted(true);
    localStorage.removeItem("testResponses");
    localStorage.removeItem("markedQuestions");
  };

  const handleSubjectTab = (subject) => {
    const targetIndex = questions.findIndex((q) => q.subject === subject);
    if (targetIndex !== -1) setCurrentQIndex(targetIndex);
  };

  const formatTime = (t) => {
    const h = String(Math.floor(t / 3600)).padStart(2, "0");
    const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const q = questions[currentQIndex];

  return (
    <Box
      p={isMobile ? 1 : 3}
      display="flex"
      flexDirection="column"
      justifyContent={isMobile ? "flex-start" : "center"}
      alignItems={isMobile ? "stretch" : "center"}
      sx={{
        background: "linear-gradient(120deg, #f6f9fc, #e9f0f9)",
        minHeight: "100vh",
        height: "100vh",
        width: "100vw",
        overflowY: "auto",
      }}
    >
      <Card
        sx={{
          p: isMobile ? 2 : 4,
          width: isMobile ? "100%" : "100%",
          maxWidth: isMobile ? "100%" : "9000px",
          height: isMobile ? "100%" : "700px",
          boxShadow: 10,
          backgroundColor: "#ffffff",
          maxHeight: isMobile ? "100%" : "95vh",
          overflowY: "auto",
          borderRadius: isMobile ? 0 : 2,
        }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Test Attempt
          </Typography>
          <Box textAlign="right">
            <Typography variant="body1" fontWeight={500}>
              Time Left: {formatTime(timeLeft)}
            </Typography>
            <Button size="small" variant="outlined" onClick={() => setPaused(!paused)}>
              {paused ? "Resume" : "Pause"}
            </Button>
            <IconButton onClick={() => navigate(-1)} color="error">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Test Title */}
        <Typography variant="h6" textAlign="center" fontWeight={600} mb={2}>
          {state.testTitle}
        </Typography>

        {/* Subject Tabs */}
        <Tabs
          value={false}
          onChange={(e, val) => handleSubjectTab(val)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {subjects.map((subj, idx) => (
            <Tab key={idx} label={subj} value={subj} />
          ))}
        </Tabs>

        {/* Question Navigation Circles */}
        <Box mt={2} mb={3} display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
          {questions.map((_, idx) => {
            let bg = "#e0e0e0";
            if (responses[idx]) bg = "#4caf50";
            if (marked[idx]) bg = "#f44336";
            if (currentQIndex === idx) bg = "#1976d2";

            return (
              <Button
                key={idx}
                onClick={() => setCurrentQIndex(idx)}
                sx={{
                  minWidth: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: bg,
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  px: 0,
                }}
                size="small"
              >
                {idx + 1}
              </Button>
            );
          })}
        </Box>

        {/* Question Section */}
        {!submitted && q && (
          <Box>
            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
              Q{currentQIndex + 1}. {q.question}
            </Typography>

            <RadioGroup
              value={responses[currentQIndex]}
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              {q.options.map((opt, j) => (
                <FormControlLabel
                  key={j}
                  value={opt}
                  control={<Radio size="small" />}
                  label={<Typography fontSize="0.9rem">{opt}</Typography>}
                />
              ))}
            </RadioGroup>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={4}>
                <Button
                  onClick={() => setCurrentQIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={currentQIndex === 0}
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  Previous
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  variant={marked[currentQIndex] ? "contained" : "outlined"}
                  color={marked[currentQIndex] ? "error" : "secondary"}
                  onClick={() =>
                    setMarked((prev) => {
                      const updated = [...prev];
                      updated[currentQIndex] = !updated[currentQIndex];
                      return updated;
                    })
                  }
                  size="small"
                  fullWidth
                >
                  {marked[currentQIndex] ? "Unmark" : "Mark"}
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  onClick={() =>
                    setCurrentQIndex((prev) => Math.min(prev + 1, questions.length - 1))
                  }
                  disabled={currentQIndex === questions.length - 1}
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  Save & Next
                </Button>
              </Grid>
            </Grid>

            <Box mt={3} display="flex" gap={2} flexWrap="wrap">
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                size="small"
              >
                Submit Test
              </Button>
              <Button
                onClick={() => navigate(-1)}
                color="primary"
                variant="text"
                size="small"
              >
                Leave Test
              </Button>
            </Box>
          </Box>
        )}

        {/* Result */}
        {submitted && (
          <Box textAlign="center" mt={4}>
            <Typography variant="h4" gutterBottom>
              You scored {score} out of {questions.length * 4}
            </Typography>
            <Typography variant="h6" color={score >= 0 ? "success.main" : "error.main"}>
              ({questions.length} questions: +4 correct, -1 wrong)
            </Typography>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default TestAttemptPage;
