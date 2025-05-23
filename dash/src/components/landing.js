import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
  Grid,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function LandingPage() {
  const router = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fef6e4 0%, #f3eac2 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top AppBar */}
      <AppBar
        position="static"
        elevation={1} // Add a small elevation shadow to separate AppBar
        sx={{
          background: 'transparent',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)', // subtle shadow for separation
          borderBottom: '1px solid #ffddb5', // optional subtle border
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <SchoolIcon sx={{ color: '#FF9839' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              Apne Notes
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => router('/auth')}
              sx={{
                backgroundColor: '#FF9839',
                '&:hover': { backgroundColor: '#e07e25' },
              }}
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          py: 6,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', color: '#333' }}
            >
              All You Need to{' '}
              <span style={{ color: '#FF9839' }}>Study, Revise, & Conquer</span>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Smart notes, mind maps, and quick revision tools — all in one
              place.
            </Typography>
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#FF9839',
                '&:hover': { backgroundColor: '#e07e25' },
                borderRadius: '30px',
                px: 5,
                py: 1.5,
              }}
            >
              Get Started
            </Button>
          </Grid>

          {/* Right Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              component="img"
              src={'ai.png'}
              alt="AI Student"
              sx={{
                width: '380px', // increased size
                height: '380px', // increased size
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
