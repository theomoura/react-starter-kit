import React, { Fragment, useContext } from 'react';
import { LoginForm } from '../molecules';
import { ThemeContext } from 'styled-components';
import { makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Icon } from '../atoms';

const useStyles = makeStyles({
  avatar: (props) => ({
    backgroundColor: props.colors.primary,
  }),
  containerIcon: {
    margin: '0.5rem',
  },
});

function LoginOrganism({ onclickLogin, formErrors }) {
  const theme = useContext(ThemeContext);
  const classes = useStyles(theme);

  return (
    <Fragment>
      <Icon
        icon={LockOutlinedIcon}
        containerStyle={classes.containerIcon}
        avatar
        avatarStyle={classes.avatar}
      />
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginForm onclickLogin={onclickLogin} formErrors={formErrors} />
    </Fragment>
  );
}

export default LoginOrganism;
