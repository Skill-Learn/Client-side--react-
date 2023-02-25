import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  Typography,
} from "@mui/material";
import { RenderLogo, SubmitButton, AuthInputField } from "./common";

const Register = ({ theme }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <React.Fragment>
      <style>
        {`
          body {
            background-image: url('https://source.unsplash.com/random/1920x1080');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
          }
        `}
      </style>
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
                title={
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
                }
              />
              <form onSubmit={handleSubmit}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <AuthInputField
                        label="Full Name"
                        type="text"
                        value={fullName}
                        onChange={handlefullNameChange}
                        autocomplete="name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <AuthInputField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        autocomplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <AuthInputField
                        label="Username"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        autocomplete="username"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <AuthInputField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        autocomplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <AuthInputField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        autocomplete="new-password"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <SubmitButton type="submit">Sign Up</SubmitButton>
                </CardActions>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Register;
