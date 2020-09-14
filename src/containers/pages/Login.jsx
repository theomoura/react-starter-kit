import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../redux/actions/authAction';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LoginOrganism } from '../../components/organisms';

const useStyles = makeStyles({
  container: {
    marginTop: '8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);
  const classes = useStyles(theme);

  const [formErrors, setFormErros] = useState({
    username: false,
    password: false,
  });

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = true;
    }
    if (!values.password) {
      errors.password = true;
    }
    setFormErros(errors);
    return errors;
  };

  const handleSubmitLogin = (event, values) => {
    !!event && event.preventDefault();
    const errors = validate(values);

    if (Object.keys(errors).length === 0) {
      dispatch(fetchUserData()).then(() => {
        history.push('/home');
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.container}>
        <LoginOrganism
          formErrors={formErrors}
          onclickLogin={handleSubmitLogin}
        />
      </div>
    </Container>
  );
};

export default Login;
