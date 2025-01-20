import React from "react";
import { Box, LinearProgress } from "@mui/material";

export const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 9999,
      }}
    >
      <LinearProgress color="primary" />
    </Box>
  );
};
