


import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

const subjects = {
  10: ["mathematics", "physics", "biology", "chemistry", "SST"],
  11: ["mathematics", "physics", "chemistry"],
  111: ["physics", "chemistry", "botany", "zoology"],
  12: ["mathematics", "physics", "chemistry"],
  121: ["physics", "chemistry", "botany", "zoology"],
  1: ["mathematics", "physics", "biology", "chemistry", "SST"],
  2: ["mathematics", "physics", "chemistry"],
  3: ["mathematics", "physics", "chemistry"],
  4: ["mathematics", "physics", "biology", "chemistry", "SST"],
  5: ["mathematics", "physics", "chemistry"],
  6: ["mathematics", "physics", "chemistry"],
  7: ["Semester (1)", "Semester (2)", "Semester (3)", "Semester (4)", "Semester (5)", "Semester (6)", "Semester (7)", "Semester (8)"],   
  8: ["Semester (1)", "Semester (2)", "Semester (3)", "Semester (4)", "Semester (5)", "Semester (6)", "Semester (7)", "Semester (8)"],
  9: ["Semester (1)", "Semester (2)", "Semester (3)", "Semester (4)", "Semester (5)", "Semester (6)", "Semester (7)", "Semester (8)"],
  13: ["Semester (1)", "Semester (2)", "Semester (3)", "Semester (4)", "Semester (5)", "Semester (6)", "Semester (7)", "Semester (8)"],
};

const subjectInfo = {
  mathematics: "Sharpen logical thinking and problem-solving skills.",
  physics: "Understand the laws that govern matter and energy.",
  chemistry: "Explore the substances that make up our world.",
  SST: "Understand human society through history, geography, politics, and economics.",
  biology: "Dive into the science of life and living organisms.",
  botany: "Study the structure, growth, and functions of plants.",
  zoology: "Explore the biology, behavior, and classification of animals.",
  "Semester (1)": "Build a strong foundation in basic engineering and science subjects.",
  "Semester (2)": "Continue core concepts while exploring introductory technical courses.",
  "Semester (3)": "Dive into branch-specific subjects and practical applications.",
  "Semester (4)": "Strengthen domain knowledge with advanced core subjects.",
  "Semester (5)": "Focus on technical depth and start minor project work.",
  "Semester (6)": "Enhance problem-solving with electives and real-world case studies.",
  "Semester (7)": "Gain industry exposure through internships and major projects.",
  "Semester (8)": "Prepare for professional life with final projects and career readiness.",
};

const renderCard = (title, description, link) => (
  <Card
    sx={{
      borderRadius: 3,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        backgroundColor: "#f9f9f9",
      },
    }}
  >
    <Link to={link} style={{ textDecoration: "none" }}>
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          sx={{ textTransform: "capitalize", fontWeight: 600, color: "#333" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 0.5, color: "#555" }}
        >
          {description}
        </Typography>
      </CardContent>
    </Link>
  </Card>
);

const ClassPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isPremium = location.pathname.includes("/premium");
  const isRevision = location.pathname.includes("/revision");
  const isCollege = location.pathname.includes("/college");
  const classSubjects = subjects[classId] || [];
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const content = (
    <>
      <Button
        onClick={handleBack}
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
            backgroundColor: "#f5f5f5",
            boxShadow: 2,
          },
        }}
      >
        Back
      </Button>

      {isPremium && (
        <Box mb={4}>
          {/* Tabs for Desktop */}
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="standard"
            centered
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Tab label="Subjects" />
            <Tab label="Test Series" />
            <Tab label="PYQ Series" />
            <Tab label="Mentorship" />
          </Tabs>

          {/* Tabs for Mobile */}
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Tab label="Subjects" />
            <Tab label="Test Series" />
            <Tab label="PYQ Series" />
            <Tab label="Mentorship" />
          </Tabs>
        </Box>
      )}

      {!isPremium && (
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: 700, mb: 4 }}
        >
          Subjects
        </Typography>
      )}

      {(tabIndex === 0 || !isPremium) && (
        <Grid container spacing={4} justifyContent="center">
          {classSubjects.map((subject) => (
            <Grid item xs={12} sm={6} md={6} key={subject}>
              <Link
                to={`${
                  isPremium ? "/premium/class" : isRevision ? "/revision/class"  : isCollege ? "/college/class" : "/class"
                }/${classId}/${subject}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: 600,
                        color: "#333",
                      }}
                    >
                      {subject}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ mt: 0.5, color: "#555" }}
                    >
                      {subjectInfo[subject]}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}

      {isPremium && tabIndex === 1 && (
        <Grid container spacing={4} justifyContent="center">

          <Grid item xs={12} sm={6} md={6}>
            {renderCard(
              "Full Syllabus Mock Tests",
              "Simulate real exam conditions with full-length mocks.",
              `/premium/class/${classId}/test`
            )}
          </Grid>
        </Grid>
      )}

      {isPremium && tabIndex === 2 && (
        <Grid container spacing={4} justifyContent="center">

          <Grid item xs={12} sm={6} md={6}>
            {renderCard(
              "Full PYQ Papers",
              "Solve full question papers from previous years.",
              `/premium/class/${classId}/pyq`
            )}
          </Grid>
        </Grid>
      )}

      {isPremium && tabIndex === 3 && (
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            {renderCard(
              "Book a Session",
              "Connect 1-on-1 with an expert mentor for personalized guidance.",
              `/premium/class/${classId}/mentorship`
            )}
          </Grid>
        </Grid>
      )}
    </>
  );

  return (
    <Box p={isMobile ? 2 : 4} sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <Box display="flex" justifyContent="center">
        {isMobile ? (
          <Box width="100%">{content}</Box>
        ) : (
          <Card
            sx={{
              width: "95vw",
              minHeight: "85vh",
              borderRadius: 5,
              boxShadow: 10,
              p: 4,
              backgroundColor: "#ffffff",
            }}
          >
            {content}
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ClassPage;
