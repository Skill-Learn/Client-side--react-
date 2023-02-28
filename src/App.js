import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/styles/palette";
import { Navbar, LearnerDashboard } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        className="App"
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LearnerDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
