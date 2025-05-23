import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUserName(storedName);
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div
      className="menu-container"
      style={{
        display: "flex",
        alignItems: "center", // vertical center all children
        padding: "0 20px",
        height: "56px", // fixed height for consistent vertical centering
        boxSizing: "border-box",
      }}
    >
      {/* Logo and Hello Username */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img
          src="logo.png"
          alt="Logo"
          style={{ width: "70px", borderRadius: "50%", marginLeft: "30px",marginTop:"20px" }}
        />
{userName && (
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      color: "#3f51b5",
      marginTop: "20px",
      marginLeft: "10px",
      whiteSpace: "nowrap",
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      height: "56px",      // match topbar height for perfect vertical centering
    }}
  >
    Hello, {userName}
  </Typography>
)}

      </Box>

      {/* Menus aligned right */}
      <div className="menus" style={{ marginLeft: "auto" }}>
        <ul
          style={{
            display: "flex",
            fontWeight: "bold",
            fontSize: "20px",
            gap: "2px !important",
            listStyle: "none",
            marginTop: "8px",
            padding: 0,
            alignItems: "center",
            height: "65px",
          }}
        >
          {/* Normal links */}
          {[
            { to: "/dsac", label: "DSA Sheet", idx: 1 },
            { to: "/webc", label: "Web-Dev", idx: 2 },
            { to: "/cou", label: "Courses", idx: 3 },
          ].map(({ to, label, idx }) => (
            <li
              key={idx}
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Link
                to={to}
                onClick={() => handleMenuClick(idx)}
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: selectedMenu === idx ? "#3f51b5" : "inherit",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  padding: "0 8px",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Logout button */}
          <li
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Link
              to="/"
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <Button
                type="button"
                variant="contained"
                sx={{
                  mt: 0,
                  mb: 0,
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
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
