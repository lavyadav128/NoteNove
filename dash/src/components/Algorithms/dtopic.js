import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useMediaQuery, useTheme } from "@mui/material";

const topics = [
  { id: "java-basics", name: "Java Basics" },
  { id: "control-flow", name: "Control Flow Statements" },
  { id: "functions-methods", name: "Functions and Methods" },
  { id: "oop", name: "Object-Oriented Programming (OOP)" },
  { id: "advanced-oop", name: "Advanced OOP Concepts" },
  { id: "arrays-strings", name: "Arrays and Strings" },
  { id: "exception-handling", name: "Exception Handling" },
  { id: "collections", name: "Collections Framework" },
  { id: "java-io", name: "Java Input/Output (IO)" },
  { id: "complexity", name: "Time and Space Complexity" },
  { id: "recursion", name: "Recursion" },
  { id: "backtracking", name: "Backtracking" },
  { id: "arrays", name: "Arrays" },
  { id: "strings", name: "Strings" },
  { id: "linked-list", name: "Linked List" },
  { id: "stack", name: "Stack" },
  { id: "queue", name: "Queue" },
  { id: "hashing", name: "Hashing" },
  { id: "trees", name: "Trees" },
  { id: "heaps", name: "Heaps" },
  { id: "graphs", name: "Graphs" },
  { id: "greedy", name: "Greedy Algorithms" },
  { id: "dp", name: "Dynamic Programming" },
  { id: "bit-manipulation", name: "Bit Manipulation" },
  { id: "sliding-window", name: "Sliding Window" },
  { id: "two-pointer", name: "Two Pointer Technique" },
  { id: "divide-conquer", name: "Divide and Conquer" },
  { id: "binary-search", name: "Binary Search" },
  { id: "disjoint-set", name: "Disjoint Set (Union-Find)" },
  { id: "trie", name: "Trie" },
];

const TopicPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const content = (
    <>
      {/* Back Button */}
      <Button
        onClick={() => navigate(-1)}
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
            backgroundColor: "#f0f0f0",
            boxShadow: 2,
          },
        }}
      >
        Back
      </Button>

      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        gutterBottom
        sx={{ color: "#333" }}
      >
        Explore DSA Topics
      </Typography>

      <Typography
        variant="subtitle1"
        textAlign="center"
        mb={6}
        color="text.secondary"
      >
        Tap into the core concepts of Data Structures & Algorithms
      </Typography>

      <Grid container spacing={3}>
        {topics.map((topic) => (
          <Grid item xs={12} sm={6} md={4} key={topic.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 2,
                "&:hover": {
                  boxShadow: 5,
                  transform: "translateY(-4px)",
                },
                transition: "all 0.3s",
              }}
            >
              <CardActionArea onClick={() => navigate(`/dpractice/${topic.id}`)}>
                <CardContent
                  sx={{
                    textAlign: "center",
                    py: 4,
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="text.primary"
                  >
                    {topic.name}
                  </Typography>
                  <Chip
                    label="Start Practice"
                    size="small"
                    sx={{
                      mt: 1.5,
                      backgroundColor: "#e0e0e0",
                      color: "#333",
                      fontWeight: 600,
                    }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: { xs: "block", md: "flex" },
        justifyContent: { xs: "initial", md: "center" },
        alignItems: { xs: "initial", md: "center" },
      }}
    >
      {isMobile ? (
        <Box>{content}</Box>
      ) : (
        <Card
          sx={{
            width: { xs: "100%", md: "99%" },
            maxWidth: "12000px",
            p: { xs: 2, md: 5 },
            borderRadius: 4,
            boxShadow: 4,
            backgroundColor: "#ffffff",
          }}
        >
          {content}
        </Card>
      )}
    </Box>
  );
};

export default TopicPage;
