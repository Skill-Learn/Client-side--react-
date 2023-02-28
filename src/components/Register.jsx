import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { RenderLogo, SubmitButton, AuthInputField } from "./common";
import CloseIcon from "@mui/icons-material/Close";

const RegisterForm = ({
  onSubmit,
  fullName,
  email,
  username,
  password,
  confirmPassword,
  onFullNameChange,
  onEmailChange,
  onUsernameChange,
  onPasswordChange,
  onConfirmPasswordChange,
  showPassword,
  onShowPasswordClick,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AuthInputField
              label="Full Name"
              type="text"
              value={fullName}
              onChange={onFullNameChange}
              autocomplete="name"
            />
          </Grid>

          <Grid item xs={12}>
            <AuthInputField
              label="Email"
              type="email"
              value={email}
              onChange={onEmailChange}
              autocomplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <AuthInputField
              label="Username"
              type="text"
              value={username}
              onChange={onUsernameChange}
              autocomplete="username"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AuthInputField
              label="Password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              showPassword={showPassword}
              handleClickShowPassword={onShowPasswordClick}
              autocomplete="new-password"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AuthInputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              showPassword={showPassword}
              handleClickShowPassword={onShowPasswordClick}
              autocomplete="new-password"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </CardActions>
    </form>
  );
};

const Register = ({ onClose, theme }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTab, setSelectedTab] = useState("creator");

  const handlefullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
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
                <RegisterForm
                  onSubmit={handleSubmit}
                  fullName={fullName}
                  email={email}
                  username={username}
                  password={password}
                  confirmPassword={confirmPassword}
                  onFullNameChange={handlefullNameChange}
                  onEmailChange={handleEmailChange}
                  onUsernameChange={handleUsernameChange}
                  onPasswordChange={handlePasswordChange}
                  onConfirmPasswordChange={handleConfirmPasswordChange}
                  showPassword={showPassword}
                  onShowPasswordClick={handleClickShowPassword}
                />
              )}
              {selectedTab === "learner" && (
                <RegisterForm
                  onSubmit={handleSubmit}
                  fullName={fullName}
                  email={email}
                  username={username}
                  password={password}
                  confirmPassword={confirmPassword}
                  onFullNameChange={handlefullNameChange}
                  onEmailChange={handleEmailChange}
                  onUsernameChange={handleUsernameChange}
                  onPasswordChange={handlePasswordChange}
                  onConfirmPasswordChange={handleConfirmPasswordChange}
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

export default Register;
