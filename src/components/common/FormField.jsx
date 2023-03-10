import React from "react";
import { styled } from "@mui/material/styles";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputField = styled(TextField)({
  marginBottom: "20px",
});

const AuthInputField = ({
  label,
  type,
  value,
  onChange,
  showPassword,
  handleClickShowPassword,
  autocomplete,
  disabled = false,
}) => {
  return (
    <InputField
      disabled={disabled}
      fullWidth
      label={label}
      variant="filled"
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      value={value}
      onChange={onChange}
      autoComplete={autocomplete}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : {}
      }
    />
  );
};

export default AuthInputField;
