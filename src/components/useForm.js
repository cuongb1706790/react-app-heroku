import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function useForm(initValues, validateOnChange, validate) {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
}

export function Form({ children, ...rest }) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off" {...rest}>
      {children}
    </form>
  );
}
