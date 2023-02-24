import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#006017", // a deep green color
      light: "#6FBF73",
      dark: "#00490C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F8D5A3", // a soft orange color
      light: "#FBE4C4",
      dark: "#CC9C4C",
      contrastText: "#333333",
    },
    error: {
      main: "#FF1744", // a bright red color
      light: "#FF8A80",
      dark: "#D50000",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFB900", // an orange color
      light: "#FFE082",
      dark: "#FF8F00",
      contrastText: "#333333",
    },
    info: {
      main: "#00BFFF", // a bright blue color
      light: "#87CEFA",
      dark: "#00688B",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#4CAF50", // a green color
      light: "#81C784",
      dark: "#388E3C",
      contrastText: "#FFFFFF",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#818181",
    },
  },
});
