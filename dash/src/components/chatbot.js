import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  Button,
  Slide
} from '@mui/material';
import server from "../environment";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleDialog = () => setOpen(!open);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const response = await fetch(`${server}/api/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMsg = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: "Oops! Something went wrong." }]);
    }
  };

  return (
    <>
      {/* Floating AI Face Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
        }}
      >
        <IconButton
          onClick={toggleDialog}
          sx={{
            backgroundColor: '#fff',
            boxShadow: 3,
            width: 56,
            height: 56,
            padding: 0,
            '&:hover': { backgroundColor: '#f0f0f0' },
          }}
        >
          <Box
            component="img"
            src="/images/chatbot.jpg"
            alt="AI Assistant"
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #1976d2',
            }}
          />
        </IconButton>
      </Box>

      {/* Chat Dialog */}
      <Dialog
        open={open}
        onClose={toggleDialog}
        fullWidth
        maxWidth="xs"
        TransitionComponent={Slide}
        PaperProps={{ sx: { borderRadius: 4, height: 500 } }}
      >
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            AI Assistant
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              overflowY: 'auto',
              p: 1,
              border: '1px solid #eee',
              borderRadius: 2,
              mb: 2,
              bgcolor: '#fafafa',
            }}
          >
            {messages.map((msg, i) => (
              <Box key={i} sx={{ mb: 1 }}>
                <Typography
                  variant="body2"
                  align={msg.sender === 'user' ? 'right' : 'left'}
                  sx={{
                    p: 1,
                    display: 'inline-block',
                    borderRadius: 2,
                    backgroundColor: msg.sender === 'user' ? '#1976d2' : '#e0e0e0',
                    color: msg.sender === 'user' ? '#fff' : '#000',
                    maxWidth: '80%',
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend} variant="contained" size="small">
              Send
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatbotWidget;
