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

const topics = [
  { id: "java-basics", name: "Java Basics" },
  { id: "control-flow", name: "Control Flow Statements" },
  { id: "patterns", name: "Patterns" },
  { id: "functions-methods", name: "Functions and Methods" },
  { id: "bit-manipulation", name: "Bit Manipulation" },
  { id: "binary-search-sorting", name: "Binary Search and Sorting" },
  { id: "oop", name: "Object-Oriented Programming" },
  { id: "java-arrays-strings", name: "Java (Arrays and Strings)" },
  { id: "divide-conquer-and-two-pointer", name: "Two Pointer and Divide Conquer" },
  { id: "collections", name: "Collections Framework" },



  { id: "complexity", name: "Time and Space Complexity" },
  { id: "recursion-and-backtracking", name: "Recursion and Backtracking" },
  { id: "arrays-and-strings", name: "Arrays and Strings" },
  { id: "linked-list", name: "Linked List" },
  { id: "stack-and-queue", name: "Stack ans Queue" },
  { id: "greedy", name: "Greedy Algorithms" },
  { id: "binary-and-BST", name: "Binary Tree and BST" },
  { id: "trie", name: "Trie" },
  { id: "hashing-and-heaps", name: "Hashing and Heaps" },
  { id: "graphs", name: "Graphs" },
  { id: "disjoint-set", name: "Disjoint Set (Union-Find)" },
  { id: "dp", name: "Dynamic Programming" },
];

const TopicPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: { xs: 2, md: 5 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
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
        variant="h5"
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
        Choose a topic to start practicing.
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
              <CardActionArea
                onClick={() => navigate(`/dpractice/${topic.id}`)}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    py: 2,
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
                      backgroundColor: "white",
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
    </Box>
  );
};

export default TopicPage;
