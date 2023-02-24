import React from "react";
import { Box } from "@mui/material";

const RenderLogo = (fontSize) => {
  return (
    <Box>
      <b
        style={{
          fontFamily: "'Calibri', sans-serif",
          fontWeight: 700,
          fontSize: `${fontSize}em`,
          color: "#006017",
        }}
      >
        Skill Learn
      </b>
    </Box>
  );
};

export default RenderLogo;
