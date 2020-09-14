import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  makeStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    width: '100%',
    marginTop: '0.5rem',
  },
  submit: (props) => ({
    marginTop: '1rem',
    backgroundColor: props.colors.success,
  }),
});

function LoginForm({ onclickLogin, formErrors }) {
  const theme = useContext(ThemeContext);
  const classes = useStyles(theme);

  const [formValues, setFormValue] = useState({ username: '', password: '' });

  const handleFormValues = (event) => {
    setFormValue({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={(event) => onclickLogin(event, formValues)}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={formErrors.username}
        value={formValues.username}
        onChange={handleFormValues}
        id="username"
        label="Username"
        name="username"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={formErrors.password}
        value={formValues.password}
        onChange={handleFormValues}
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}>
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
