import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  Divider,
  IconButton,
} from "@mui/material";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/arlogo.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Contact", path: "/contact" },
    { label: "Store Address", path: "/contact" },
  ];

  const handleMenuClick = (item) => {
    setOpen(false);
    navigate(item.path);
  };

  return (
    <>
      {/* HEADER */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: "#000", borderBottom: "1px solid #222" }}
      >
        <Toolbar
          sx={{
            height: { xs: 80, md: 117 },
            maxWidth: "1280px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 8 },
            display: "grid",
            gridTemplateColumns: {
              xs: "auto 1fr auto",
              md: "1fr auto 1fr",
            },
            alignItems: "center",
            color: "#fff",
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
            }}
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                fontSize: 16,
                letterSpacing: "0.25em",
              }}
            >
              Menu
            </Typography>
          </Box>

          {/* CENTER LOGO */}
          {/* CENTER LOGO */}
          {/* CENTER LOGO WITH TEXT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1.5, md: 3 },
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            {/* LEFT TEXT */}
            <Typography
              sx={{
                fontSize: { xs: 14, md: 18 },
                letterSpacing: "0.3em",
                fontWeight: 300,

                color: "#fff",
              }}
            >
              Peace
            </Typography>

            {/* LOGO */}
            <Box
              sx={{
                width: { xs: 56, md: 90 },
                height: { xs: 56, md: 90 },
                backgroundColor: "#f1ebebff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={logo}
                alt="Brand Logo"
                style={{
                  width: "99%",
                  height: "99%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* RIGHT TEXT */}
            <Typography
              sx={{
                fontSize: { xs: 14, md: 18 },
                letterSpacing: "0.3em",
                fontWeight: 300,

                color: "#fff",
              }}
            >
              Clothing
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: { xs: 2, md: 20 },
            }}
          >
            <Typography
              onClick={() => navigate("/contact")}
              sx={{
                fontSize: 16,
                letterSpacing: "0.25em",
                cursor: "pointer",
                "&:hover": { color: "#FFD700" },
              }}
            >
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* HEADER SPACER */}
      <Box sx={{ height: { xs: 80, md: 110 } }} />

      {/* DRAWER */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 300 },
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* DRAWER HEADER */}
        <Box
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              backgroundColor: "#f1ebebff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="Logo" style={{ width: "80%" }} />
          </Box>

          <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
            <X />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#222" }} />

        {/* MENU LINKS */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={() => handleMenuClick(item)}
              sx={{
                px: 3,
                py: 1.5,
                cursor: "pointer",
                "&:hover": { backgroundColor: "#111" },
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Typography>
            </ListItem>
          ))}
        </List>

        {/* SOCIAL */}
        <Box sx={{ mt: "auto", px: 3, pb: 3, display: "flex", gap: 2 }}>
          <IconButton
            component="a"
            href="https://www.instagram.com/arjunkumarpeace"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", "&:hover": { color: "#E1306C" } }}
          >
            <Instagram />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.facebook.com/share/1ars5iSsH4/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", "&:hover": { color: "#1877F2" } }}
          >
            <Facebook />
          </IconButton>

          <IconButton
            component="a"
            href="https://x.com/Arjunkumarpeace"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", "&:hover": { color: "#1DA1F2" } }}
          >
            <Twitter />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}
