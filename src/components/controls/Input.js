import { TextField } from "@material-ui/core";
import React from "react";

const Input = ({ label, value, name, onChange, error = null, ...rest }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      {...rest}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
