import React from "react";
import { Box, Grid, Typography, Card, CardMedia } from "@mui/material";

const services = [
  { title: "T-shirts", image: "/images/tshirts.jpg" },
  { title: "Hoodies", image: "/images/hoddies.jpg" },
  { title: "Lowers", image: "/images/lowersss.png" },
  { title: "Other Clothes", image: "/images/tshirt.jpg" },
];

export default function OurServices({ showHeading = true }) {
  return (
    <Box sx={{ backgroundColor: "#f6efe4ff" }}>
      <Box
        id="services"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: { xs: 6, md: 10 },
        }}
      >
        {showHeading && (
          <Typography
            align="center"
            sx={{
              mb: 7,
              fontSize: { xs: 28, md: 42 },
              letterSpacing: "3px",
              fontFamily: "Georgia, serif",
              color: "#000",
              fontWeight: 500,
            }}
          >
            SERVICES WE OFFER
          </Typography>
        )}

        {/* 🔥 IMPORTANT FIX HERE */}
        <Grid
          container
          spacing={3}
          sx={{
            mx: { xs: 0, md: "100px" }, // ✅ mobile = 0, desktop = 100px
          }}
        >
          {services.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  position: "relative",
                  height: 320,
                  boxShadow: "none",
                  borderRadius: 0,
                  overflow: "hidden",
                  backgroundColor: "#f6efe4ff",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    py: 2,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))",
                  }}
                >
                  <Typography
                    align="center"
                    sx={{
                      color: "#fff",
                      fontSize: 18,
                      letterSpacing: "1px",
                      fontFamily: "Arial",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
