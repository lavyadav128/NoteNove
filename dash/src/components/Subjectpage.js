import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";




export const chaptersData = {
  10: {
    mathematics: [
      { title: "Real Numbers", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Polynomials", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Pair of Linear Equations in 2 Variables", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Quadratic Equations (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Arithmetic Progressions", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Triangles", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Coordinate Geometry", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Circles (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Area Related to Circle", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Trigonometry (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Some Applications of Trigonometry", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Surface Areas and Volumes", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "statistics", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Probability (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    physics: [
      { title: "light", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "human-eye", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "electricity", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "magnetic", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    chemistry: [
      { title: "chemical-reaction-and-equation", videoUrl:"https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "acid-base", videoUrl: "https://youtu.be/_KWLxT9nLrI" },
      { title: "metal-non-metal", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "carbon-compound", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    biology: [
      { title: "life-processes", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "control-coordination", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "reproduction", videoUrl: "https://youtu.be/7kw03dP2mQw" },
      { title: "heredity", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    SST: [
      // History
      { title: "The Rise of Nationalism in Europe", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Nationalism in India", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "The Making of the Global World", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "The age of Industrialization", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Print Culture and the modern World", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
  
      // Geography
      { title: "Resources and Development", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Forest and Wildlife Resources", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },     // project work
      { title: "Water Resources", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },                   // map work only
      { title: "Agriculture", videoUrl: "https://youtu.be/0jiHdaVejU4" },
      { title: "Minerals and Energy Resources", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Manufacturing Industries", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
  
      // Political Science (Civics)
      { title: "Power Sharing", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Federalism", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Gender, Religion and Caste", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Political Parties", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Outcomes of Democracy", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
  
      // Economics
      { title: "Development", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Sectors of the Indian Economy", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Money and Credit", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Globalisation and the Indian Economy", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Consumer Rights", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },                   // project work
    ],
  },
  



  11: {
    mathematics: [
      { title: "sets", videoUrl: null },
      { title: "functions", videoUrl: null },
      { title: "inequalities", videoUrl: null },
      { title: "quadratic-equations", videoUrl: null },
      { title: "Trigonometry", videoUrl: null },
      { title: "trigonometric-equations", videoUrl: null },
      { title: "sequence-series", videoUrl: null },
      { title: "permutation-combination", videoUrl: null },
      { title: "binomial-theorem", videoUrl: null },
      { title: "complex-number", videoUrl: null },
      { title: "straight-line", videoUrl: null },
      { title: "circle", videoUrl: null },
      { title: "parabola", videoUrl: null },
      { title: "ellipse", videoUrl: null },
      { title: "hyperbola", videoUrl: null },
      { title: "mathematical-reasoning ", videoUrl: null },
      { title: "statistics", videoUrl: null },
    ],
    physics: [
      { title: "unit-measurements", videoUrl: null },
      { title: "motion-in-straightline", videoUrl: null },
      { title: "motion-in-plane", videoUrl: null },
      { title: "laws-of-motion", videoUrl: null },
      { title: "work-energy-and-power", videoUrl: null },
      { title: "circular-motion", videoUrl: null },
      { title: "center-of-mass", videoUrl: null },
      { title: "rotational-motion", videoUrl: null },
      { title: "gravitation", videoUrl: null },
      { title: "properties-of-matter", videoUrl: null },
      { title: "properties-of-solids", videoUrl: null },
      { title: "fluids", videoUrl: null },
      { title: "ktg-and-thermodynamics", videoUrl: null },
      { title: "oscillation", videoUrl: null },
      { title: "wave-motion", videoUrl: null },
    ],
    chemistry: [
      { title: "mole-concept", videoUrl: null },
      { title: "redox-reactions", videoUrl: null },
      { title: "atomic-structure", videoUrl: null },
      { title: "gaseous-state-of-matter", videoUrl: null },
      { title: "thermodynamics", videoUrl: null },
      { title: "thermo-chemistry", videoUrl: null },
      { title: "chemical-equilibrium", videoUrl: null },
      { title: "ionic-equilibrium", videoUrl: null },
      { title: "periodic-table", videoUrl: null },
      { title: "chemical-bonding", videoUrl: null },
      { title: "hydrogen", videoUrl: null },
      { title: "s-block", videoUrl: null },
      { title: "nomenclature", videoUrl: null },
      { title: "isomerism", videoUrl: null },
      { title: "general-organic-chemistry", videoUrl: null },
      { title: "hydrocarbon", videoUrl: null },
      { title: "practical-organic-chemistry", videoUrl: null },
      { title: "qualitative-analyses", videoUrl: null },
      { title: "environmental-chemistry", videoUrl: null },
    ],
  },
  




  111: {
    physics: [
      { title: "unit-measurements", videoUrl: null },
      { title: "motion-in-straightline", videoUrl: null },
      { title: "motion-in-plane", videoUrl: null },
      { title: "laws-of-motion", videoUrl: null },
      { title: "work-energy-and-power", videoUrl: null },
      { title: "circular-motion", videoUrl: null },
      { title: "center-of-mass", videoUrl: null },
      { title: "rotational-motion", videoUrl: null },
      { title: "gravitation", videoUrl: null },
      { title: "properties-of-matter", videoUrl: null },
      { title: "properties-of-solids", videoUrl: null },
      { title: "fluids", videoUrl: null },
      { title: "ktg-and-thermodynamics", videoUrl: null },
      { title: "oscillation", videoUrl: null },
      { title: "wave-motion", videoUrl: null },
    ],
    chemistry: [
      { title: "mole-concept", videoUrl: null },
      { title: "redox-reactions", videoUrl: null },
      { title: "atomic-structure", videoUrl: null },
      { title: "gaseous-state-of-matter", videoUrl: null },
      { title: "thermodynamics", videoUrl: null },
      { title: "thermo-chemistry", videoUrl: null },
      { title: "chemical-equilibrium", videoUrl: null },
      { title: "ionic-equilibrium", videoUrl: null },
      { title: "periodic-table", videoUrl: null },
      { title: "chemical-bonding", videoUrl: null },
      { title: "hydrogen", videoUrl: null },
      { title: "s-block", videoUrl: null },
      { title: "nomenclature", videoUrl: null },
      { title: "isomerism", videoUrl: null },
      { title: "general-organic-chemistry", videoUrl: null },
      { title: "hydrocarbon", videoUrl: null },
      { title: "practical-organic-chemistry", videoUrl: null },
      { title: "qualitative-analyses", videoUrl: null },
      { title: "environmental-chemistry", videoUrl: null },
    ],
    botany: [
      { title: "the-living-world", videoUrl: null },
      { title: "biological-classification", videoUrl: null },
      { title: "plant-kingdom", videoUrl: null },
      { title: "morphology-of-flowering-plants", videoUrl: null },
      { title: "anatomy-of-flowering-plants", videoUrl: null },
      { title: "cell-the unit of life", videoUrl: null },
      { title: "cell-cycle-and-cell-division", videoUrl: null },
      { title: "photosynthesis-in-higher-plants", videoUrl: null },
      { title: "respiration-in-plants", videoUrl: null },
      { title: "plant-growth-and-development", videoUrl: null },
    ],
    zoology: [
      { title: "animal-kingdom", videoUrl: null },
      { title: "structural-organization-in-animals", videoUrl: null },
      { title: "biomolecules", videoUrl: null },
      { title: "body-fluids-and-circulation", videoUrl: null },
      { title: "excretory products and their elimation", videoUrl: null },
      { title: "locomotion-and-movement", videoUrl: null },
      { title: "neural-control-and-coordination", videoUrl: null },
      { title: "chemical-control-and-integration", videoUrl: null },
    ],
  },
  



  12: {
    mathematics: [
      { title: "relations-and-functions", videoUrl: null },
      { title: "inverse-trigonometric-functions", videoUrl: null },
      { title: "matrices", videoUrl: null },
      { title: "determinants", videoUrl: null },
      { title: "differentiation", videoUrl: null },
      { title: "limits", videoUrl: null },
      { title: "continuity-and-differentiability", videoUrl: null },
      { title: "applications-of-derivatives", videoUrl: null },
      { title: "definite-integration", videoUrl: null },
      { title: "indefinite-integration", videoUrl: null },
      { title: "differential-equations", videoUrl: null },
      { title: "area-under-curve", videoUrl: null },
      { title: "Vector Algebra", videoUrl: null },
      { title: "3D-geometry", videoUrl: null },
      { title: "probability", videoUrl: null },
    ],
    physics: [
      { title: "electric-charges-and-field", videoUrl: null },
      { title: "electrostatic-potential-and-dipole", videoUrl: null },
      { title: "capacitor", videoUrl: null },
      { title: "current-electricity", videoUrl: null },
      { title: "moving-charges-and-magnetism", videoUrl: null },
      { title: "magnetism", videoUrl: null },
      { title: "electromagnetic-induction", videoUrl: null },
      { title: "alternating-current", videoUrl: null },
      { title: "inductors", videoUrl: null },
      { title: "emw-and-communication", videoUrl: null },
      { title: "ray-optics", videoUrl: null },
      { title: "wave-optics", videoUrl: null },
      { title: "modern-physics", videoUrl: null },
      { title: "semiconductor", videoUrl: null },
    ],
    chemistry: [
      { title: "solid-state", videoUrl: null },
      { title: "solutions", videoUrl: null },
      { title: "electro-chemistry", videoUrl: null },
      { title: "chemical-kinetics", videoUrl: null },
      { title: "surface-chemistry", videoUrl: null },
      { title: "metallurgy", videoUrl: null },
      { title: "p-block", videoUrl: null },
      { title: "d-and-f-block", videoUrl: null },
      { title: "coordination-compounds", videoUrl: null },
      { title: "haloalkane-and-haloarene", videoUrl: null },
      { title: "alcohol-phenol-ether", videoUrl: null },
      { title: "aldehyde-ketone-carboxylic-acids", videoUrl: null },
      { title: "amines", videoUrl: null },
      { title: "biomolecules", videoUrl: null },
      { title: "polymers", videoUrl: null },
      { title: "chemistry-in-everyday-life", videoUrl: null },
      { title: "salt-analyses", videoUrl: null },
      { title: "environmental-chemistry", videoUrl: null },
    ],
  },




  121: {
    physics: [
      { title: "electric-charges-and-field", videoUrl: null },
      { title: "electrostatic-potential-and-dipole", videoUrl: null },
      { title: "capacitor", videoUrl: null },
      { title: "current-electricity", videoUrl: null },
      { title: "moving-charges-and-magnetism", videoUrl: null },
      { title: "magnetism", videoUrl: null },
      { title: "electromagnetic-induction", videoUrl: null },
      { title: "alternating-current", videoUrl: null },
      { title: "inductors", videoUrl: null },
      { title: "emw-and-communication", videoUrl: null },
      { title: "ray-optics", videoUrl: null },
      { title: "wave-optics", videoUrl: null },
      { title: "modern-physics", videoUrl: null },
      { title: "semiconductor", videoUrl: null },
    ],
    chemistry: [
      { title: "solid-state", videoUrl: null },
      { title: "solutions", videoUrl: null },
      { title: "electro-chemistry", videoUrl: null },
      { title: "chemical-kinetics", videoUrl: null },
      { title: "surface-chemistry", videoUrl: null },
      { title: "metallurgy", videoUrl: null },
      { title: "p-block", videoUrl: null },
      { title: "d-and-f-block", videoUrl: null },
      { title: "coordination-compounds", videoUrl: null },
      { title: "haloalkane-and-haloarene", videoUrl: null },
      { title: "alcohol-phenol-ether", videoUrl: null },
      { title: "aldehyde-ketone-carboxylic-acids", videoUrl: null },
      { title: "amines", videoUrl: null },
      { title: "biomolecules", videoUrl: null },
      { title: "polymers", videoUrl: null },
      { title: "chemistry-in-everyday-life", videoUrl: null },
    ],
    botany: [
      { title: "sexual-reproduction-in-flowering-plants", videoUrl: null },
      { title: "principle-of-inheritance-and-variation", videoUrl: null },
      { title: "molecular-basis-of-inheritance", videoUrl: null },
      { title: "molecular-basis-of-inheritance(2)", videoUrl: null },
      { title: "microbes-in-human-welfare", videoUrl: null },
      { title: "organisms-and-population", videoUrl: null },
      { title: "ecosystem", videoUrl: null },
      { title: "biodiversity-and-conservation", videoUrl: null },
    ],
    zoology: [
      { title: "human-reproduction", videoUrl: null },
      { title: "reproductive-health", videoUrl: null },
      { title: "human-health-and-diseases", videoUrl: null },
      { title: "evolution", videoUrl: null },
      { title: "biotechnology-principles-and-processes", videoUrl: null },
      { title: "biotechnology-and-its-applications", videoUrl: null },
    ],
  },


  //  Premium  Batches


  1: {
    mathematics: [
      { title: "Real Numbers", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Polynomials", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Pair of Linear Equations in 2 Variables", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Quadratic Equations (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Arithmetic Progressions", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Triangles", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Coordinate Geometry", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Circles (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Area Related to Circle", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Trigonometry (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Some Applications of Trigonometry", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Surface Areas and Volumes", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "statistics", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Probability (10)", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    physics: [
      { title: "light", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "human-eye", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "electricity", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "magnetic", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    chemistry: [
      { title: "chemical-reaction-and-equation", videoUrl:"https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "acid-base", videoUrl: "https://youtu.be/_KWLxT9nLrI" },
      { title: "metal-non-metal", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "carbon-compound", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    biology: [
      { title: "life-processes", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "control-coordination", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "reproduction", videoUrl: "https://youtu.be/7kw03dP2mQw" },
      { title: "heredity", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
    ],
    SST: [
      // History
      { title: "The Rise of Nationalism in Europe", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Nationalism in India", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "The Making of the Global World", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "The age of Industrialization", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Print Culture and the modern World", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
  
      // Geography
      { title: "Resources and Development", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Forest and Wildlife Resources", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },     // project work
      { title: "Water Resources", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },                   // map work only
      { title: "Agriculture", videoUrl: "https://youtu.be/0jiHdaVejU4" },
      { title: "Minerals and Energy Resources", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Manufacturing Industries", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
  
      // Political Science (Civics)
      { title: "Power Sharing", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Federalism", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Gender, Religion and Caste", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Political Parties", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Outcomes of Democracy", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
  
      // Economics
      { title: "Development", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Sectors of the Indian Economy", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Money and Credit", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Globalisation and the Indian Economy", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },
      { title: "Consumer Rights", videoUrl: "https://youtu.be/RBE-C-b86-Y?si=hhEIbGZfjBxQpVcJ" },                   // project work
    ],
  },



  2: {
    mathematics: [
      { title: "sets", videoUrl: null },
      { title: "functions", videoUrl: null },
      { title: "inequalities", videoUrl: null },
      { title: "quadratic-equations", videoUrl: null },
      { title: "Trigonometry", videoUrl: null },
      { title: "trigonometric-equations", videoUrl: null },
      { title: "sequence-series", videoUrl: null },
      { title: "permutation-combination", videoUrl: null },
      { title: "binomial-theorem", videoUrl: null },
      { title: "complex-number", videoUrl: null },
      { title: "straight-line", videoUrl: null },
      { title: "circle", videoUrl: null },
      { title: "parabola", videoUrl: null },
      { title: "ellipse", videoUrl: null },
      { title: "hyperbola", videoUrl: null },
      { title: "mathematical-reasoning ", videoUrl: null },
      { title: "statistics", videoUrl: null },
    ],
    physics: [
      { title: "unit-measurements", videoUrl: null },
      { title: "motion-in-straightline", videoUrl: null },
      { title: "motion-in-plane", videoUrl: null },
      { title: "laws-of-motion", videoUrl: null },
      { title: "work-energy-and-power", videoUrl: null },
      { title: "circular-motion", videoUrl: null },
      { title: "center-of-mass", videoUrl: null },
      { title: "rotational-motion", videoUrl: null },
      { title: "gravitation", videoUrl: null },
      { title: "properties-of-matter", videoUrl: null },
      { title: "properties-of-solids", videoUrl: null },
      { title: "fluids", videoUrl: null },
      { title: "ktg-and-thermodynamics", videoUrl: null },
      { title: "oscillation", videoUrl: null },
      { title: "wave-motion", videoUrl: null },
    ],
    chemistry: [
      { title: "mole-concept", videoUrl: null },
      { title: "redox-reactions", videoUrl: null },
      { title: "atomic-structure", videoUrl: null },
      { title: "gaseous-state-of-matter", videoUrl: null },
      { title: "thermodynamics", videoUrl: null },
      { title: "thermo-chemistry", videoUrl: null },
      { title: "chemical-equilibrium", videoUrl: null },
      { title: "ionic-equilibrium", videoUrl: null },
      { title: "periodic-table", videoUrl: null },
      { title: "chemical-bonding", videoUrl: null },
      { title: "hydrogen", videoUrl: null },
      { title: "s-block", videoUrl: null },
      { title: "nomenclature", videoUrl: null },
      { title: "isomerism", videoUrl: null },
      { title: "general-organic-chemistry", videoUrl: null },
      { title: "hydrocarbon", videoUrl: null },
      { title: "practical-organic-chemistry", videoUrl: null },
      { title: "qualitative-analyses", videoUrl: null },
      { title: "environmental-chemistry", videoUrl: null },
    ],
  },


  3: {
    mathematics: [
      { title: "relations-and-functions", videoUrl: null },
      { title: "inverse-trigonometric-functions", videoUrl: null },
      { title: "matrices", videoUrl: null },
      { title: "determinants", videoUrl: null },
      { title: "differentiation", videoUrl: null },
      { title: "limits", videoUrl: null },
      { title: "continuity-and-differentiability", videoUrl: null },
      { title: "applications-of-derivatives", videoUrl: null },
      { title: "definite-integration", videoUrl: null },
      { title: "indefinite-integration", videoUrl: null },
      { title: "differential-equations", videoUrl: null },
      { title: "area-under-curve", videoUrl: null },
      { title: "Vector Algebra", videoUrl: null },
      { title: "3D-geometry", videoUrl: null },
      { title: "probability", videoUrl: null },
    ],
    physics: [
      { title: "electric-charges-and-field", videoUrl: null },
      { title: "electrostatic-potential-and-dipole", videoUrl: null },
      { title: "capacitor", videoUrl: null },
      { title: "current-electricity", videoUrl: null },
      { title: "moving-charges-and-magnetism", videoUrl: null },
      { title: "magnetism", videoUrl: null },
      { title: "electromagnetic-induction", videoUrl: null },
      { title: "alternating-current", videoUrl: null },
      { title: "inductors", videoUrl: null },
      { title: "emw-and-communication", videoUrl: null },
      { title: "ray-optics", videoUrl: null },
      { title: "wave-optics", videoUrl: null },
      { title: "modern-physics", videoUrl: null },
      { title: "semiconductor", videoUrl: null },
    ],
    chemistry: [
      { title: "solid-state", videoUrl: null },
      { title: "solutions", videoUrl: null },
      { title: "electro-chemistry", videoUrl: null },
      { title: "chemical-kinetics", videoUrl: null },
      { title: "surface-chemistry", videoUrl: null },
      { title: "metallurgy", videoUrl: null },
      { title: "p-block", videoUrl: null },
      { title: "d-and-f-block", videoUrl: null },
      { title: "coordination-compounds", videoUrl: null },
      { title: "haloalkane-and-haloarene", videoUrl: null },
      { title: "alcohol-phenol-ether", videoUrl: null },
      { title: "aldehyde-ketone-carboxylic-acids", videoUrl: null },
      { title: "amines", videoUrl: null },
      { title: "biomolecules", videoUrl: null },
      { title: "polymers", videoUrl: null },
      { title: "chemistry-in-everyday-life", videoUrl: null },
      { title: "salt-analyses", videoUrl: null },
      { title: "environmental-chemistry", videoUrl: null },
    ],
  },
  
};

const SubjectPage = () => {
  const { classId, subject } = useParams();
  const chapters = chaptersData[classId]?.[subject] || [];
  const subjectFormatted = subject.charAt(0).toUpperCase() + subject.slice(1);
  const navigate = useNavigate();
  const location = useLocation();
  const isPremium = location.pathname.includes("/premium");

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
              <Grid item xs={12} sm={3} key={chapter.title}>
                <Link
                  to={`/${isPremium ? "premium/class" : "class"}/${classId}/${subject}/${chapter.title}`}
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
                        {chapter.title.replace(/-/g, " ")}
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






