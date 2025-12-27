import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        mt: 10,
      }}
    >
      {/* Top Line */}
      <Box
        sx={{
          borderTop: "1px solid #555",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 2, md: 6 },
        }}
      />

      {/* Footer Content */}
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Left */}
        <Typography
          sx={{
            fontSize: "16px",
            color: "#ffff",
          }}
        >
          © 2025 Arjun. All rights reserve
        </Typography>

        {/* Right */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            flexWrap: "wrap",
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{
              color: "#ffff",
              fontSize: "16px",
              "&:hover": { color: "#aaa" },
            }}
          >
            Term of Services
          </Link>

          <Link
            href="#"
            underline="none"
            sx={{
              color: "#ffff",
              fontSize: "16px",
              "&:hover": { color: "#aaa" },
            }}
          >
            Privacy Policy
          </Link>

          <Link
            href="#Contact"
            underline="none"
            sx={{
              color: "#ffff",
              fontSize: "16px",
              "&:hover": { color: "#aaa" },
            }}
          >
            Connect with me
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
