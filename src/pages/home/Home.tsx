import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { Button } from "../../components/Buttons";

import { styles } from "./styles.ts";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCatalog = () => {
    navigate("/catalog");
  };

  return (
    <Box sx={styles.heroContainer}>
      <Box sx={styles.textBox}>
        <Typography variant="h1" component="h1" sx={styles.title}>
          Campers of your dreams
        </Typography>
        <Typography variant="h2" sx={styles.subtitle}>
          You can find everything you want in our catalog
        </Typography>
        <Button variant="primary" onClick={navigateToCatalog}>
          View Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
