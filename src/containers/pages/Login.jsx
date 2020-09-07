import React, { useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../redux/actions/loginAction';

// import { Container } from './styles';

const Login = () => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();

  console.log('theme', themeContext);

  const fetchUsers = useCallback(() => dispatch(fetchUserData()), [dispatch]);

  const handleButtonLogin = () => {
    dispatch(fetchUserData()).then(() => {
      history.push('/home');
    });
  };

  return (
    <div>
      Pagina Login
      <button onClick={handleButtonLogin}>Login</button>
    </div>
  );
};

export default Login;
