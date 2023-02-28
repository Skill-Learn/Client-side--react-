import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  Tab,
  Tabs,
  IconButton,
} from "@mui/material";

import { RenderLogo, SubmitButton, AuthInputField } from "./common";
import CloseIcon from "@mui/icons-material/Close";

const LoginForm = ({
  onSubmit,
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  showPassword,
  onShowPasswordClick,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <AuthInputField
          label="Username"
          type="text"
          value={username}
          onChange={onUsernameChange}
          autocomplete="username"
        />
        <AuthInputField
          label="Password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          showPassword={showPassword}
          handleClickShowPassword={onShowPasswordClick}
          autocomplete="current-password"
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <SubmitButton size="medium" type="submit">
          Log In
        </SubmitButton>
      </CardActions>
    </form>
  );
};

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedTab, setSelectedTab] = useState("creator");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <React.Fragment>
      <Container
        sx={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <Grid
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <Card
              variant="outlined"
              sx={{
                width: { xs: 340, sm: 480 },
                borderColor: "primary.main",
                borderWidth: 1.8,
                borderRadius: 8,
                p: 5,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <CardHeader
                title={RenderLogo(2)}
                action={
                  <IconButton onClick={onClose}>
                    <CloseIcon />
                  </IconButton>
                }
              />
              <Tabs
                value={selectedTab}
                variant="fullWidth"
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Creator" value="creator" />
                <Tab label="Learner" value="learner" />
              </Tabs>
              {selectedTab === "creator" && (
                <LoginForm
                  onSubmit={handleSubmit}
                  username={username}
                  password={password}
                  onUsernameChange={handleUsernameChange}
                  onPasswordChange={handlePasswordChange}
                  showPassword={showPassword}
                  onShowPasswordClick={handleClickShowPassword}
                />
              )}
              {selectedTab === "learner" && (
                <LoginForm
                  onSubmit={handleSubmit}
                  username={username}
                  password={password}
                  onUsernameChange={handleUsernameChange}
                  onPasswordChange={handlePasswordChange}
                  showPassword={showPassword}
                  onShowPasswordClick={handleClickShowPassword}
                />
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Login;
