import React from "react";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/"); // Redirect to homepage
  };

  return (
    <IconButton
      onClick={handleRedirect}
      sx={{
        color: "white", // Default icon color
        backgroundColor: "#4CAF50", // Green background
        "&:hover": {
          backgroundColor: "#45a049", // Darker green on hover
          transform: "scale(1.1)", // Slightly enlarge on hover
        },
        transition: "background-color 0.3s ease, transform 0.2s ease",
        padding: "10px",
      }}
    >
      <HomeIcon fontSize="large" />
    </IconButton>
  );
};

export default HomeButton;
