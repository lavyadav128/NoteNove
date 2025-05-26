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


const chaptersData = {
  10: {
    mathematics: [
      "Real Numbers",
      "Polynomials",
      "Pair of Linear Equations in 2 Variables",
      "Quadratic Equations (10)",
      "Arithmetic Progressions",
      "Triangles",
      "Coordinate Geometry",
      "Circles (10)",
      "Area Related to Circle",
      "Trigonometry (10)",
      "Some Applications of Trigonometry",
      "Surface Areas and Volumes",
      "statistics",
      "Probability (10)",
    ],
    physics: [
      "light",
      "human-eye",
      "electricity",
      "magnetic",
    ],
    chemistry: [
      "chemical-reaction-and-equation",
      "acid-base",
      "metal-non-metal",
      "carbon-compound",
    ],
    biology: [
      "life-processes",
      "control-coordination",
      "reproduction",
      "heredity",
    ],
    SST: [
      // History
      "The Rise of Nationalism in Europe",
      "Nationalism in India",
      "The Making of the Global World",
      "The age of Industrialization",
      "Print Culture and the modern World",
    
      // Geography
      "Resources and Development",
      "Forest and Wildlife Resources",     // project work
      "Water Resources",                   // map work only
      "Agriculture",
      "Minerals and Energy Resources",
      "Manufacturing Industries",
    
      // Political Science (Civics)
      "Power Sharing",
      "Federalism",
      "Gender, Religion and Caste",
      "Political Parties",
      "Outcomes of Democracy",
    
      // Economics
      "Development",
      "Sectors of the Indian Economy",
      "Money and Credit",
      "Globalisation and the Indian Economy",
      "Consumer Rights"                   // project work
    ],    
  },
  11: {
    mathematics: [
      "sets",
      "functions",
      "inequalities",
      "quadratic-equations",
      "Trigonometry",
      "trigonometric-equations",
      "sequence-series",
      "permutation-combination",
      "binomial-theorem",
      "complex-number",
      "straight-line",
      "circle",
      "parabola",
      "ellipse",
      "hyperbola",
      "mathematical-reasoning ",
      "statistics",
      "comp (11 maths)",
    ],
    physics: [
      "unit-measurements",
      "motion-in-straightline",
      "motion-in-plane",
      "laws-of-motion",
      "work-energy-and-power",
      "circular-motion",
      "center-of-mass",
      "rotational-motion",
      "gravitation",
      "properties-of-matter",
      "properties-of-solids",
      "fluids",
      "ktg-and-thermodynamics",
      "oscillation",
      "wave-motion",
      "complete class 11(1)",
      "complete class 11(2)",
    ],
    chemistry: [
      "mole-concept",
      "redox-reactions",
      "atomic-structure",
      "gaseous-state-of-matter",
      "thermodynamics",
      "thermo-chemistry",
      "chemical-equilibrium",
      "ionic-equilibrium",
      "periodic-table",
      "chemical-bonding",
      "hydrogen",
      "s-block",
      "nomenclature",
      "isomerism",
      "general-organic-chemistry",
      "hydrocarbon",
      "practical-organic-chemistry",
      "qualitative-analyses",
      "environmental-chemistry",
      "comp-organic chemistry",
      "comp-iorganic chemistry",
      "comp-physical chemistry",    
    ],
  },
  111: {
    physics: [
      "unit-measurements",
      "motion-in-straightline",
      "motion-in-plane",
      "laws-of-motion",
      "work-energy-and-power",
      "circular-motion",
      "center-of-mass",
      "rotational-motion",
      "gravitation",
      "properties-of-matter",
      "properties-of-solids",
      "fluids",
      "ktg-and-thermodynamics",
      "oscillation",
      "wave-motion",
      "complete class 11(1)",
      "complete class 11(2)",
    ],
    chemistry: [
      "mole-concept",
      "redox-reactions",
      "atomic-structure",
      "gaseous-state-of-matter",
      "thermodynamics",
      "thermo-chemistry",
      "chemical-equilibrium",
      "ionic-equilibrium",
      "periodic-table",
      "chemical-bonding",
      "hydrogen",
      "s-block",
      "nomenclature",
      "isomerism",
      "general-organic-chemistry",
      "hydrocarbon",
      "practical-organic-chemistry",
      "qualitative-analyses",
      "environmental-chemistry",
      "comp organic chemistry",
      "comp iorganic chemistry",
      "comp physical chemistry",
    ],
    botany: [
      "the-living-world",
      "biological-classification",
      "plant-kingdom",
      "morphology-of-flowering-plants",
      "anatomy-of-flowering-plants",
      "cell-the unit of life",
      "cell-cycle-and-cell-division",
      "photosynthesis-in-higher-plants",
      "respiration-in-plants",
      "plant-growth-and-development",
      "comp botany",
    ],
    zoology : [
      "animal-kingdom",
      "structural-organization-in-animals",
      "biomolecules",
      "body-fluids-and-circulation",
      "excretory products and their elimation",
      "locomotion-and-movement",
      "neural-control-and-coordination",
      "chemical-control-and-integration",
      "comp zoology",
    ],
  },
  12: {
    mathematics: [
      "relations-and-functions",
      "inverse-trigonometric-functions",
      "matrices",
      "determinants",
      "differentiation",
      "limits",
      "continuity-and-differentiability",
      "applications-of-derivatives",
      "definite-integration",
      "indefinite-integration",
      "differential-equations",
      "area-under-curve",
      "Vector Algebra",
      "3D-geometry",
      "probability",
      "comp (12 maths)",
    ],
    physics: [
      "electric-charges-and-field",
      "electrostatic-potential-and-dipole",
      "capacitor",
      "current-electricity",
      "moving-charges-and-magnetism",
      "magnetism",
      "electromagnetic-induction",
      "alternating-current",
      "inductors",
      "emw-and-communication",
      "ray-optics",
      "wave-optics",
      "modern-physics",
      "semiconductor",
      "complete class 12(1)",
      "complete class 12(2)",
    ],
    chemistry: [
      "solid-state",
      "solutions",
      "electro-chemistry",
      "chemical-kinetics",
      "surface-chemistry",
      "metallurgy",
      "p-block",
      "d-and-f-block",
      "coordination-compounds",
      "haloalkane-and-haloarene",
      "alcohol-phenol-ether",
      "aldehyde-ketone-carboxylic-acids",
      "amines",
      "biomolecules",
      "polymers",
      "chemistry-in-everyday-life",
      "salt-analyses",
      "environmental-chemistry",
      "comp organic chemistry",
      "comp iorganic chemistry",
      "comp physical chemistry",
    ],
  },
  121: {
    physics: [
      "electric-charges-and-field",
      "electrostatic-potential-and-dipole",
      "capacitor",
      "current-electricity",
      "moving-charges-and-magnetism",
      "magnetism",
      "electromagnetic-induction",
      "alternating-current",
      "inductors",
      "emw-and-communication",
      "ray-optics",
      "wave-optics",
      "modern-physics",
      "semiconductor",
      "complete class 12(1)",
      "complete class 12(2)",
    ],
    chemistry: [
      "solid-state",
      "solutions",
      "electro-chemistry",
      "chemical-kinetics",
      "surface-chemistry",
      "metallurgy",
      "p-block",
      "d-and-f-block",
      "coordination-compounds",
      "haloalkane-and-haloarene",
      "alcohol-phenol-ether",
      "aldehyde-ketone-carboxylic-acids",
      "amines",
      "biomolecules",
      "polymers",
      "chemistry-in-everyday-life",
      "comp organic chemistry",
      "comp iorganic chemistry",
      "comp physical chemistry",
    ],
    botany : [
      "sexual-reproduction-in-flowering-plants", 
      "principle-of-inheritance-and-variation",
      "molecular-basis-of-inheritance",
      "molecular-basis-of-inheritance(2)",
      "microbes-in-human-welfare",
      "organisms-and-population",
      "ecosystem",
      "biodiversity-and-conservation",
      "comp botany",

    ],
    zoology : [
      "human-reproduction",
      "reproductive-health",
      "human-health-and-diseases",
      "evolution",
      "biotechnology-principles-and-processes",
      "biotechnology-and-its-applications",
      "comp zoology",
    ],
  },
};

const SubjectPage = () => {
  const { classId, subject } = useParams();
  const chapters = chaptersData[classId]?.[subject] || [];
  const subjectFormatted = subject.charAt(0).toUpperCase() + subject.slice(1);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Card
        sx={{
          width: "100%",
          maxWidth: 11000,
          borderRadius: 4,
          boxShadow:
            "0 4px 8px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.15)",
          p: 4,
        }}
      >
        {/* Back Button - styled like ClassPage */}
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
           {subjectFormatted}
        </Typography>

        {chapters.length === 0 ? (
          <Typography color="error" textAlign="center">
            No chapters found for this subject.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {chapters.map((chapter) => (
              <Grid item xs={12} sm={3} key={chapter}>
                <Link
                  to={`/class/${classId}/${subject}/${chapter}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      minHeight: 120,
                      borderRadius: 3,
                      boxShadow:
                        "0 4px 12px rgba(25, 118, 210, 0.15), 0 6px 20px rgba(25, 118, 210, 0.25)",
                      transition: "transform 0.2s ease, boxShadow 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow:
                          "0 10px 25px rgba(25, 118, 210, 0.3), 0 12px 30px rgba(25, 118, 210, 0.4)",
                        backgroundColor: "#f9f9f9",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardContent sx={{ py: 2 }}>
                      <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{
                          textTransform: "capitalize",
                          fontWeight: 600,
                          color: "#333",
                        }}
                      >
                        {chapter.replace(/-/g, " ")}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Card>
    </Box>
  );
};

export default SubjectPage;

//          Class {classId} - {subjectFormatted}







// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Typography,
//   Grid,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import { useState, useEffect } from "react";

// const ChapterDetail = () => {
//   const { classId, subject, slug } = useParams();
//   const navigate = useNavigate();

//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");

//   // Log route parameters to debug blank page issue
//   useEffect(() => {
//     console.log("Route Params:", { classId, subject, slug });
//   }, [classId, subject, slug]);

//   const pdfLinks = {
//     mindmap: `/images/mindmap/${slug}.pdf`,
//     shortNotes: `/images/shortnotes/${slug}.pdf`,
//     completeNotes: `/images/completenotes/${slug}.pdf`,
//     oneShotNotes: `/images/oneshot/${slug}.pdf`,
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const openPdfIfExists = async (e, url) => {
//     e.preventDefault();

//     // Open a blank tab immediately (user gesture)
//     const newTab = window.open("", "_blank");

//     try {
//       const response = await fetch(url, { method: "HEAD" });

//       // Check response status and content-type header
//       const contentType = response.headers.get("content-type") || "";
//       console.log(`Checking PDF: ${url}, status: ${response.status}, content-type: ${contentType}`);

//       if (response.ok && contentType.includes("pdf")) {
//         // Redirect the tab to the PDF URL
//         newTab.location.href = url;
//       } else {
//         // Close the blank tab and show snackbar + vibrate
//         newTab.close();
//         if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
//         setSnackbarMessage("This PDF file does not exist yet.");
//         setSnackbarOpen(true);
//       }
//     } catch (error) {
//       newTab.close();
//       if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
//       setSnackbarMessage("Error checking the file.");
//       setSnackbarOpen(true);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   // Defensive check for slug
//   if (!slug) {
//     return (
//       <Box p={3}>
//         <Typography variant="h6" color="error" textAlign="center">
//           Please select a chapter first.
//         </Typography>
//       </Box>
//     );
//   }

//   const formattedSubject = subject
//     ? subject.charAt(0).toUpperCase() + subject.slice(1)
//     : "";

//   const formattedChapter = slug
//     .replace(/-/g, " ")
//     .replace(/\b\w/g, (c) => c.toUpperCase());

//   return (
//     <Box p={4} display="flex" justifyContent="center">
//       <Card
//         sx={{
//           width: "95vw",
//           maxWidth: 8000,
//           borderRadius: 4,
//           boxShadow: "0 4px 8px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.15)",
//           p: 4,
//         }}
//       >
//         <CardContent>
//           <Button
//             onClick={handleBack}
//             startIcon={<ArrowBackIosNewIcon />}
//             sx={{
//               mb: 3,
//               backgroundColor: "#fff",
//               color: "#333",
//               border: "1px solid #ddd",
//               borderRadius: 2,
//               textTransform: "none",
//               fontWeight: 600,
//               px: 2.5,
//               py: 1,
//               boxShadow: 1,
//               "&:hover": {
//                 backgroundColor: "#f5f5f5",
//                 boxShadow: 2,
//               },
//             }}
//           >
//             Back
//           </Button>

//           <Typography
//             variant="h4"
//             gutterBottom
//             textAlign="center"
//             sx={{ fontWeight: 700, mb: 1 }}
//           >
//             {formattedSubject}
//           </Typography>
//           <Typography
//             variant="h5"
//             gutterBottom
//             textAlign="center"
//             sx={{ fontWeight: 600, mb: 4 }}
//           >
//             Chapter: {formattedChapter}
//           </Typography>

//           <Grid container spacing={4}>
//             {/* Mindmap */}
//             <Grid item xs={12} sm={6}>
//               <Card sx={cardStyles("#e3f2fd", "#1976d2")}>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                     Mindmap
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Visual summary and mindmap for this chapter.
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={(e) => openPdfIfExists(e, pdfLinks.mindmap)}
//                   >
//                     Open PDF
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>

//             {/* Short Notes */}
//             <Grid item xs={12} sm={6}>
//               <Card sx={cardStyles("#fff3e0", "#fb8c00")}>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                     Short Notes
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Concise notes and key points of this chapter.
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={(e) => openPdfIfExists(e, pdfLinks.shortNotes)}
//                   >
//                     Open PDF
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>

//             {/* Complete Notes */}
//             <Grid item xs={12} sm={6}>
//               <Card sx={cardStyles("#e8f5e9", "#4caf50")}>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                     Complete Notes
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Full chapter notes with detailed explanation and examples.
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={(e) => openPdfIfExists(e, pdfLinks.completeNotes)}
//                   >
//                     Open PDF
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>

//             {/* One Shot Notes */}
//             <Grid item xs={12} sm={6}>
//               <Card sx={cardStyles("#f3e5f5", "#9c27b0")}>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                     One Shot Notes
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Quick revision notes for a one-shot recap before exams.
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={(e) => openPdfIfExists(e, pdfLinks.oneShotNotes)}
//                   >
//                     Open PDF
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={4000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity="warning"
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// // Style helper
// const cardStyles = (bgColor, shadowColor) => ({
//   bgcolor: bgColor,
//   borderRadius: 3,
//   boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1), 0 6px 20px ${shadowColor}40`,
//   transition: "transform 0.2s ease, box-shadow 0.2s ease",
//   "&:hover": {
//     transform: "scale(1.03)",
//     boxShadow: `0 10px 25px ${shadowColor}66, 0 12px 30px ${shadowColor}99`,
//   },
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// });

// export default ChapterDetail;