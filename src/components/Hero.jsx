import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundVideo from "../assets/bannervideo.mp4";
import "../index.css";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "89vh", md: "117vh" },
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Optional Gradient Overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
          zIndex: -1,
        }}
      />

      {/* Overlay Text */}
      <Box sx={{ px: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "4rem" },
            letterSpacing: "0.1em",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Peace Clothing
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", md: "1.5rem" },
            textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
          }}
        >
          Wear Peace, Spread Love
        </Typography>
      </Box>
    </Box>
  );
}
