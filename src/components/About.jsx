import React from "react";
import { Box, Typography, Button } from "@mui/material";
import founderImg from "../assets/founderphoto.png";

export default function MeetFounder() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff", // WHITE BG
        py: { xs: 5, md: 10 },
        px: { xs: 2, md: 8 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr auto 1fr",
          },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        {/* IMAGE – MOBILE FIRST */}
        <Box
          sx={{
            order: { xs: 1, md: 3 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={founderImg}
            alt="Founder"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: 360, md: 420 },
              borderRadius: 1,
              objectFit: "cover",
            }}
          />
        </Box>

        {/* DIVIDER – DESKTOP ONLY */}
        <Box
          sx={{
            order: 2,
            display: { xs: "none", md: "block" },
            width: "2px",
            height: "100%",
            backgroundColor: "#000", // BLACK DIVIDER
          }}
        />

        {/* TEXT CONTENT */}
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 34 },
              letterSpacing: "0.18em",
              mb: { xs: 2, md: 4 },
              color: "#000",
              textTransform: "uppercase",
              fontFamily: "serif",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Meet the Founder
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14.5, md: 16 },
              lineHeight: 1.9,
              color: "#111",
              mb: 4,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <strong>Peace Clothing</strong> is the brainchild of{" "}
            <strong>Arjun Kumar</strong>, a fashion entrepreneur with a passion
            for modern, quality-driven apparel. Located at{" "}
            <strong>Talab Chowk, Delhi</strong> , our shop brings you a
            carefully curated collection of stylish and comfortable clothing for
            everyday wear. With a focus on design, comfort, and craftsmanship,
            every piece at <strong>Peace Clothing</strong> is crafted to help
            you stand out. Come visit our store and experience contemporary
            fashion that blends trend, quality, and everyday style{" "}
            <strong>— we can’t wait to welcome you!</strong>
          </Typography>

          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#000",
                color: "#000",
                px: 4,
                py: 1.5,
                borderRadius: 0,
                letterSpacing: "0.18em",
                fontSize: 13,
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
                },
              }}
            >
              ABOUT US
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
