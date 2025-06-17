import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useTheme } from "@mui/material/styles";

const mentorshipOptions = [
  {
    title: "Doubt Support",
    description: "Get instant help from subject experts anytime.",
    linkPath: "doubt-support",
  },
  {
    title: "1-on-1 Mentorship",
    description: "Connect with mentors for guidance, motivation, and strategy.",
    linkPath: "book-session",
  },
];

const MentorshipPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(`/premium/class/${classId}`);
    }
  };

  const handleJoinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/BfPYESB5kKgGwSoSP3HZ6f", "_blank");
  };

  const renderCard = (title, description) => (
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
          sx={{ fontWeight: 600, color: "#333" }}
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
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleJoinWhatsApp}
            sx={{
              textTransform: "none",
              px: 3,
              py: 1,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            {title.includes("Doubt") ? "Ask Now" : "Book Now"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box p={4} sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      {isMobile ? (
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

          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Mentorship & Guidance
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {mentorshipOptions.map((opt) => (
              <Grid item xs={12} sm={6} md={6} key={opt.title}>
                {renderCard(opt.title, opt.description)}
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
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
                "&:hover": {
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
              Mentorship & Guidance
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {mentorshipOptions.map((opt) => (
                <Grid item xs={12} sm={6} md={6} key={opt.title}>
                  {renderCard(opt.title, opt.description)}
                </Grid>
              ))}
            </Grid>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default MentorshipPage;
