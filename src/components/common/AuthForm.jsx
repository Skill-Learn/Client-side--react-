import React from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// This can be used to implement the login/reg forms and profile editing.
class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    const { fields } = props;

    // Create initial state with dynamic fields
    const initialState = {};
    fields.forEach((field) => {
      initialState[field.name] = "";
    });

    this.state = {
      ...initialState,
      errors: {},
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length === 0) {
      const { onSubmit } = this.props;
      if (onSubmit) {
        onSubmit(this.state);
      }
    } else {
      this.setState({ errors });
    }
  };

  validateForm = () => {
    const { fields } = this.props;
    const errors = {};
    fields.forEach((field) => {
      if (field.required && !this.state[field.name]) {
        errors[field.name] = `${field.label} is required`;
      }
    });
    return errors;
  };

  renderInput = (field) => {
    const { name, label, type, showPassword, handleClickShowPassword } = field;
    const { errors } = this.state;
    return (
      <TextField
        fullWidth
        name={name}
        label={label}
        type={type || "text"}
        value={this.state[name]}
        onChange={this.handleChange}
        error={!!errors[name]}
        helperText={errors[name]}
        key={name}
        sx={{ marginBottom: "20px" }}
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

  createSubmitButton = () => {
    const { submitLabel } = this.props;
    return (
      <Button variant="contained" color="primary" type="submit">
        {submitLabel}
      </Button>
    );
  };

  render() {
    const { fields } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {fields.map((field) => this.renderInput(field))}
        {this.createSubmitButton()}
      </form>
    );
  }
}

export default AuthForm;
