import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const subjects = {
  10: ["mathematics", "physics", "biology", "chemistry","SST"],
  11: ["mathematics", "physics", "chemistry"],
  111: [ "physics", "chemistry","botany","zoology"],
  12: ["mathematics", "physics", "chemistry"],
  121: [ "physics", "chemistry","botany","zoology"],
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


const ClassPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const classSubjects = subjects[classId] || [];

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
          <CardContent>
            {/* Back Button */}
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

            <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              sx={{ fontWeight: 700, mb: 4 }}
            >
              Subjects 
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {classSubjects.map((subject) => (
                <Grid item xs={12} sm={6} md={6} key={subject}>
                  <Link
                    to={`/class/${classId}/${subject}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        transition:
                          "transform 0.2s ease, box-shadow 0.2s ease",
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
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ClassPage;



//              Subjects in Class {classId}
