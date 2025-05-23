import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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



const defaultTheme = createTheme();

export default function Authentication() {

    

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);


    let handleAuth = async () => {
      try {
        if (formState === 0) {
          await handleLogin(username, password);
        } else {
          const result = await handleRegister(name, username, password);
          setMessage(result);
          setOpen(true);
          setFormState(0);
          setError("");
          setName("");
          setUsername("");
          setPassword("");
        }
      } catch (err) {
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
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url("/images/logo.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <CssBaseline />

    <Card
      elevation={10}
      sx={{
        p: 8,
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: 'white', // Solid card background
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>

      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Button
          variant={formState === 0 ? 'contained' : 'outlined'}
          onClick={() => setFormState(0)}
          sx={{ mr: 1 }}
        >
          Sign In
        </Button>
        <Button
          variant={formState === 1 ? 'contained' : 'outlined'}
          onClick={() => setFormState(1)}
        >
          Sign Up
        </Button>
      </Box>

      <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
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
          />
        )}

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        />

        <p style={{ color: 'red' }}>{error}</p>

        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleAuth}
        >
          {formState === 0 ? 'Login' : 'Register'}
        </Button>
      </Box>
    </Card>

    <Snackbar open={open} autoHideDuration={4000} message={message} />
  </Grid>
</ThemeProvider>

      
      
    );
}
