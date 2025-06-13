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
};

const subjectInfo = {
  mathematics: "Sharpen logical thinking and problem-solving skills.",
  physics: "Understand the laws that govern matter and energy.",
  chemistry: "Explore the substances that make up our world.",
  SST: "Understand human society through history, geography, politics, and economics.",
  biology: "Dive into the science of life and living organisms.",
  botany: "Study the structure, growth, and functions of plants.",
  zoology: "Explore the biology, behavior, and classification of animals.",
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
  const classSubjects = subjects[classId] || [];
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box p={4} sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <Box display="flex" justifyContent="center">
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
              '&:hover': {
                backgroundColor: "#f5f5f5",
                boxShadow: 2,
              },
            }}
          >
            Back
          </Button>
          {isPremium && (
  <Box
    sx={{
      mb: 4,
    }}
  >
    <Tabs
      value={tabIndex}
      onChange={handleTabChange}
      textColor="primary"
      indicatorColor="primary"
      variant="standard" // default non-scrollable for desktop
      centered
      sx={{
        display: { xs: 'none', sm: 'flex' },
      }}
    >
      <Tab label="Subjects" />
      <Tab label="Test Series" />
      <Tab label="PYQ Series" />
      <Tab label="Mentorship" />
    </Tabs>

    {/* Mobile-only scrollable tabs */}
    <Tabs
      value={tabIndex}
      onChange={handleTabChange}
      textColor="primary"
      indicatorColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      sx={{
        display: { xs: 'flex', sm: 'none' },
      }}
    >
      <Tab label="Subjects" />
      <Tab label="Test Series" />
      <Tab label="PYQ Series" />
      <Tab label="Mentorship" />
    </Tabs>
  </Box>
)}


          {!isPremium && (
            <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 700, mb: 4 }}>
              Subjects
            </Typography>
          )}

          {(tabIndex === 0 || !isPremium) && (
            <Grid container spacing={4} justifyContent="center">
              {classSubjects.map((subject) => (
                <Grid item xs={12} sm={6} md={6} key={subject}>
                  <Link
                    to={`${isPremium ? "/premium/class" : "/class"}/${classId}/${subject}`}
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
                          sx={{ textTransform: "capitalize", fontWeight: 600, color: "#333" }}
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
                  "Chapter-wise Tests",
                  "Evaluate topic-level mastery with individual chapter tests.",
                  `/premium/class/${classId}/test-series/chapter-wise`
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                {renderCard(
                  "Full Syllabus Mock Tests",
                  "Simulate real exam conditions with full-length mocks.",
                  `/premium/class/${classId}/test-series/full-mocks`
                )}
              </Grid>
            </Grid>
          )}

          {isPremium && tabIndex === 2 && (
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={6}>
                {renderCard(
                  "Chapter-wise PYQs",
                  "Practice previous year questions by topic.",
                  `/premium/class/${classId}/pyq/chapter-wise`
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                {renderCard(
                  "Full PYQ Papers",
                  "Solve full question papers from previous years.",
                  `/premium/class/${classId}/pyq/full-papers`
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
        </Card>
      </Box>
    </Box>
  );
};

export default ClassPage;
