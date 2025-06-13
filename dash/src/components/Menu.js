import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [userName, setUserName] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUserName(storedName);
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setDrawerOpen(false);
  };

  const menuItems = [
    { to: "/dsac", label: "DSA Sheet", idx: 1 },
    { to: "/webc", label: "Web-Dev", idx: 2 },
    { to: "/cou", label: "Batches", idx: 3 },
    { to: "/pre", label: "Premium Batches", idx: 4 },
    { to: "/", label: "Logout", idx: 5, isLogout: true }, // ✅ now unique
  ];
  

  return (
    <div
      className="menu-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        height: "56px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Logo and Hello Username */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img
          src="logo.png"
          alt="Logo"
          style={{
            width: "50px",
            borderRadius: "50%",
            marginLeft: "10px",
            marginTop: "6px",
          }}
        />
        {userName && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#3f51b5",
              marginTop: "10px",
              marginLeft: "5px",
              whiteSpace: "nowrap",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              height: "56px",
              fontSize: "16px",
            }}
          >
            Hello, {userName}
          </Typography>
        )}
      </Box>

      {/* Desktop Menus */}
      {!isMobile && (
        <div className="menus" style={{ marginLeft: "auto" }}>
          <ul
            style={{
              display: "flex",
              fontWeight: "bold",
              fontSize: "20px",
              listStyle: "none",
              marginTop: "8px",
              padding: 0,
              alignItems: "center",
              height: "65px",
            }}
          >
            {menuItems.map(({ to, label, idx, isLogout }) => (
              <li
                key={idx}
                style={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <Link
                  to={to}
                  onClick={() => handleMenuClick(idx)}
                  style={{
                    textDecoration: "none",
                    color: selectedMenu === idx ? "#3f51b5" : "inherit",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 8px",
                    cursor: "pointer",
                    lineHeight: 1,
                  }}
                >
                  {isLogout ? (
                    <Button
                      type="button"
                      variant="contained"
                      sx={{
                        px: 2,
                        py: 0.5,
                        fontSize: "1rem",
                        height: "40px",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    label
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Hamburger Icon */}
      {isMobile && (
        <>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: "auto" }}
          >
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: { width: 240, backgroundColor: "#f1f1f1", pt: 3 },
            }}
          >
            <List>
              {menuItems.map(({ to, label, idx, isLogout }) => (
                <ListItem
                  key={idx}
                  button
                  component={Link}
                  to={to}
                  onClick={() => handleMenuClick(idx)}
                >
                  {isLogout ? (
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        py: 1,
                        fontWeight: "bold",
                        fontSize: "1rem",
                        textTransform: "none",
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontSize: "1rem",
                        fontWeight: selectedMenu === idx ? "bold" : "normal",
                        color: selectedMenu === idx ? "#3f51b5" : "inherit",
                      }}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Menu;
