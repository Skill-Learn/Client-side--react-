import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Modal,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import { isLoggedIn } from "../utils";

import { Login, Register } from "./";
import { RenderLogo } from "./common";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            component="span"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              textDecoration: "none",
            }}
          >
            {RenderLogo(2.2)}
          </Typography>
        </Link>
        {isLoggedIn() ? (
          <div>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", gap: "16px" }}>
              <Button sx={{ px: 2 }} onClick={handleOpenLogin}>
                Login
              </Button>
              <Button variant="contained" onClick={handleOpenRegister}>
                Register
              </Button>
            </div>
          </div>
        )}
      </Toolbar>
      {/* Login overlay */}
      <Modal
        open={showLogin}
        onClose={handleCloseLogin}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <div>
          <Login onClose={handleCloseLogin} />
        </div>
      </Modal>
      {/* Register overlay   */}
      <Modal
        open={showRegister}
        onClose={handleCloseRegister}
        aria-labelledby="register-modal-title"
        aria-describedby="register-modal-description"
      >
        <div>
          <Register onClose={handleCloseRegister} />
        </div>
      </Modal>
    </AppBar>
  );
};

export default Navbar;
