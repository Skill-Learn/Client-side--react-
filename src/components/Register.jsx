import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  Typography,
  TextField,
} from "@mui/material";
import { RenderLogo, SubmitButton } from "./common";

const InputField = styled(TextField)({
  marginBottom: "20px",
});

const Register = ({ theme }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };
  return (
    <React.Fragment>
      <Container>
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
                      <InputField
                        fullWidth={true}
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={handleFirstNameChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {" "}
                      <InputField
                        fullWidth={true}
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={handleLastNameChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        fullWidth={true}
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        fullWidth={true}
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        fullWidth={true}
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <SubmitButton size="medium" type="submit">
                    Sign Up
                  </SubmitButton>
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
