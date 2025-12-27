import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "9c5224be-84cb-4826-a2d5-e43c58a72219");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#ffffff",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        pt: { xs: 5, md: 7 },
        pb: { xs: 0, md: 0 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 700, mb: 6, color: "#000" }}
      >
        Get in touch
      </Typography>

      <Grid container spacing={6}>
        {/* LEFT INFO */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Let’s talk
          </Typography>

          <Typography sx={{ color: "#555", mb: 4 }}>
            Want to shop the latest trends?
            <br />
            Have a question about our collection? We’re just a message away.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Mail size={20} />
            <Typography sx={{ ml: 2 }}>Arjunkumarpeace@gmail.com</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Phone size={20} />
            <Typography sx={{ ml: 2 }}>8377923640</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MapPin size={20} />
            <Typography sx={{ ml: 2 }}>Talab Chowk, Delhi</Typography>
          </Box>
        </Grid>

        {/* RIGHT FORM (UI SAME) */}
        <Grid item xs={12} md={7}>
          <Box component="form" onSubmit={onSubmit}>
            <Typography sx={{ mb: 1, fontWeight: 600 }}>Your Name</Typography>
            <TextField
              fullWidth
              name="name"
              placeholder="Enter your name"
              variant="outlined"
              sx={{ mb: 3 }}
              required
            />

            <Typography sx={{ mb: 1, fontWeight: 600 }}>Your Email</Typography>
            <TextField
              fullWidth
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="outlined"
              sx={{ mb: 3 }}
              required
            />

            <Typography sx={{ mb: 1, fontWeight: 600 }}>
              Write your message here
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              name="message"
              placeholder="Enter your message"
              variant="outlined"
              sx={{ mb: 4 }}
              required
            />

            <Button
              type="submit"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: 999,
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(90deg, #000000, #ff8a00)",
                "&:hover": { opacity: 0.9 },
              }}
            >
              Submit now
            </Button>

            {/* simple text – UI safe */}
            {result && (
              <Typography
                sx={{
                  mt: 2,
                  color: result.includes("success") ? "green" : "red",
                }}
              >
                {result}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
