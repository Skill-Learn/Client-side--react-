import { Avatar, Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { AuthInputField, stringAvatar } from "./common";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleProfilePicture = (event) => {
    event.preventDefault();
  };
  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditMode();
    // handle form submission
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Stack gap={1} direction="column">
              <Avatar
                {...stringAvatar("User Name goes here")}
                sx={{ width: 150, height: 150, mb: 2 }}
              />
              <Button onClick={handleProfilePicture}>
                Change Profile Picture
              </Button>

              <Button disabled={editMode} onClick={handleEditMode}>
                Edit Information
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Changes
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <AuthInputField
            disabled={!editMode}
            label="Full Name"
            type="text"
            value={fullName}
            onChange={handlefullNameChange}
            autocomplete="name"
          />
          <AuthInputField
            disabled={!editMode}
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            autocomplete="email"
          />
          <AuthInputField
            disabled={true}
            label="Username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            autocomplete="username"
          />
          <AuthInputField
            disabled={!editMode}
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            autocomplete="new-password"
          />
        </Grid>
      </Grid>
    </form>
  );
};
export default EditProfile;
