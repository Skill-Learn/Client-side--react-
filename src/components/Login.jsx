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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
                  <InputField
                    fullWidth={true}
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  <InputField
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <SubmitButton type="submit">Log In</SubmitButton>
                </CardActions>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Login;
