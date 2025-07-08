// Import necessary React and MUI components
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { Card } from '@mui/material';

// Create a default MUI theme
const defaultTheme = createTheme();

export default function Authentication() {
  // State variables for input fields and UI feedback
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();
  const [formState, setFormState] = React.useState(0); // 0 = Login, 1 = Register
  const [open, setOpen] = React.useState(false); // Snackbar visibility

  // Get authentication functions from AuthContext
  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  // Handle login or registration depending on form state
  let handleAuth = async () => {
    try {
      if (formState === 0) {
        // Attempt login
        await handleLogin(username, password);
      } else {
        // Attempt registration
        const result = await handleRegister(name, username, password);
        setMessage(result);       // Show success message
        setOpen(true);            // Open snackbar
        setFormState(0);          // Switch to login tab
        setError("");             // Clear errors
        setName("");              // Reset form fields
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      // Handle and display error from API
      const message = err?.response?.data?.message || "Something went wrong";
      setError(message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh', // Full screen height
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/images/logo.png")', // Background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          px: 2, // Small horizontal padding on mobile
        }}
      >
        <CssBaseline /> {/* Normalizes CSS across browsers */}

        <Card
          elevation={10}
          sx={{
            p: { xs: 4, sm: 6, md: 8 }, // Responsive padding
            width: { xs: '100%', sm: 400, md: 600 }, // Responsive width
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            backgroundColor: 'white', // Card background
          }}
        >
          {/* Lock icon at top */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          {/* Toggle buttons for login/register */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Button
              variant={formState === 0 ? 'contained' : 'outlined'}
              onClick={() => setFormState(0)}
              sx={{ mr: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}
            >
              Sign In
            </Button>
            <Button
              variant={formState === 1 ? 'contained' : 'outlined'}
              onClick={() => setFormState(1)}
              sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
            >
              Sign Up
            </Button>
          </Box>

          {/* Form fields */}
          <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
            {/* Only show name field during sign up */}
            {formState === 1 && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                inputProps={{ style: { fontSize: '0.9rem' } }}
              />
            )}

            {/* Username field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              inputProps={{ style: { fontSize: '0.9rem' } }}
            />

            {/* Password field */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{ style: { fontSize: '0.9rem' } }}
            />

            {/* Error message display */}
            <Typography sx={{ color: 'red', fontSize: '0.85rem', mt: 1 }}>
              {error}
            </Typography>

            {/* Submit button */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                py: { xs: 1, sm: 1.5 },
              }}
              onClick={handleAuth}
            >
              {formState === 0 ? 'Login' : 'Register'}
            </Button>
          </Box>
        </Card>

        {/* Snackbar for success message after registration */}
        <Snackbar open={open} autoHideDuration={4000} message={message} />
      </Grid>
    </ThemeProvider>
  );
}
