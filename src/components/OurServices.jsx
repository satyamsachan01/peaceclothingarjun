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
    <Box
      id="services"
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#f6efe4ff",
        maxWidth: "1200px", // 🔹 limit container width
        margin: "0 auto", // 🔹 center container
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
            color: "#000000ff",
            fontWeight: 500,
          }}
        >
          SERVICES WE OFFER
        </Typography>
      )}

      <Grid container spacing={4}>
        {services.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            {" "}
            {/* 🔹 md=3 => 4 cards per row */}
            <Card
              sx={{
                position: "relative",
                height: 320,
                borderRadius: 0,
                boxShadow: "none",
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
  );
}
