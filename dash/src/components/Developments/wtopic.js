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
  { id: "html-basics", name: "HTML Basics" },
  { id: "css-basics", name: "CSS Basics" },
  { id: "js-basics", name: "JavaScript Basics" },
  { id: "react-basics", name: "React Basics" },
  { id: "sql-basics", name: "SQL Basics" },
  { id: "networking-basics", name: "Networking Basics" },
  { id: "oops-principles", name: "OOP Principles" },
  { id: "dbms-basics", name: "DBMS Basics" },
  { id: "os-basics", name: "OS Basics" },
  { id: "nodejs-intro", name: "Node.js Introduction" },
  { id: "express-intro", name: "Express Basics" },
  { id: "auth-intro", name: "Authentication Overview" },
];

const TopicPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Content = (
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
        Explore Development Topics
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
              <CardActionArea
                onClick={() => navigate(`/wpractice/${topic.id}`)}
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
        display: isMobile ? "block" : "flex",
        justifyContent: isMobile ? "initial" : "center",
        alignItems: isMobile ? "initial" : "center",
      }}
    >
      {isMobile ? (
        <Box sx={{ width: "100%", backgroundColor: "#fff", p: 2 }}>
          {Content}
        </Box>
      ) : (
        <Card
          sx={{
            width: "99%",
            maxWidth: "12000px",
            p: { xs: 2, md: 50 },
            borderRadius: 4,
            boxShadow: 4,
            backgroundColor: "#ffffff",
          }}
        >
          {Content}
        </Card>
      )}
    </Box>
  );
};

export default TopicPage;
