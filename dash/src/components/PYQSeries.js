import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const PYQSeries = ({ type }) => {
  const { classId } = useParams();
  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight={600}>
        {type === "chapter-wise" ? "Chapter-wise PYQs" : "Full PYQ Papers"} for Class {classId}
      </Typography>
    </Box>
  );
};

export default PYQSeries;
