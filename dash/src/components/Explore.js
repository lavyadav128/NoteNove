import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const resourceDescriptions = {
  mindmap: [
    'Visual representation of key topics and subtopics.',
    'Helps in quick understanding and memory retention.',
    'Connects concepts in a logical structure.',
  ],
  shortNotes: [
    'Concise summary of chapters.',
    'Highlights key formulas and definitions.',
    'Ideal for last-minute revision.',
  ],
  completeNotes: [
    'Detailed explanation of every topic.',
    'Includes theory, examples, and diagrams.',
    'Good for deep understanding and exam prep.',
  ],
  video: [
    'Visual explanations for better understanding.',
    'Concepts taught with animations and real-life examples.',
    'Great for quick learning and long-term memory.',
  ],  
  mentorshipSession: [
    'One-on-one guidance from experts.',
    'Helps clear doubts and strengthen concepts.',
    'Schedule sessions as per your convenience.',
  ],
};

// 🔽 Define the public image URLs for each section
const screenshots = {
  mindmap: '/images/mindmap.png',
  shortNotes: '/images/shortNotes.png',
  completeNotes: '/images/completeNotes.png',
  video: '/images/oneShotNotes.png',
  mentorshipSession: '/images/mentorshipSession.png',
};

// ... imports remain the same

const ExplorePage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleOpen = (section) => {
    setActiveSection(section);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setActiveSection(null);
  };

  const cardData = [
    { title: 'Mindmap', color: '#e3f2fd', textColor: '#1565c0', key: 'mindmap' },
    { title: 'Short Notes', color: '#fff3e0', textColor: '#ef6c00', key: 'shortNotes' },
    { title: 'Complete Notes', color: '#e8f5e9', textColor: '#2e7d32', key: 'completeNotes' },
    { title: 'video', color: '#f3e5f5', textColor: '#8e24aa', key: 'video' },
    { title: 'Mentorship Session', color: '#fffde7', textColor: '#f9a825', key: 'mentorshipSession' },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Card
        sx={{
          maxWidth: '100vw',
          width: '100%',
          minHeight: '85vh',
          margin: '0 auto',
          mt: 0,
          borderRadius: 5,
          boxShadow: 10,
          p: { xs: 2, sm: 4 },
          backgroundColor: '#ffffff',
        }}
      >
        <Box mb={{ xs: 2, sm: 4 }}>
          <Button
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 3,
              backgroundColor: '#fff',
              color: '#333',
              border: '1px solid #ddd',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              px: 2,
              py: 1,
              fontSize: { xs: '0.8rem', sm: '1rem' },
              boxShadow: 1,
              '&:hover': {
                backgroundColor: '#f5f5f5',
                boxShadow: 2,
              },
            }}
          >
            Back
          </Button>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: { xs: 4, sm: 6 },
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2.25rem' },
          }}
        >
          Explore Notes Resources
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {cardData.map(({ title, color, textColor, key }) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <Card
                sx={{
                  borderRadius: 4,
                  backgroundColor: color,
                  height: '100%',
                  boxShadow: 4,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: textColor,
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                    }}
                  >
                    {title}
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  <ul style={{ paddingLeft: '1.2rem', marginTop: 0, color: '#555' }}>
                    {resourceDescriptions[key].map((point, i) => (
                      <li key={i}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Box textAlign="center" mt={2}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleOpen(key)}
                      sx={{
                        fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Screenshot
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* Modal to show screenshot */}
      <Dialog open={openModal} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent
          sx={{
            position: 'relative',
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            {activeSection && cardData.find((c) => c.key === activeSection)?.title} Preview
          </Typography>
          <img
            src={activeSection ? screenshots[activeSection] : ''}
            alt="Preview"
            style={{
              width: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: 10,
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ExplorePage;

