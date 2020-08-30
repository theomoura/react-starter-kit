import React, { useContext, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { callGetMethod } from '../../middleware/_axios';
import useDevice from '../../hooks/useDevice';

// import { Container } from './styles';

const Login = (props) => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const device = useDevice();

  console.log('theme', themeContext);

  useEffect(() => {
    callGetMethod('https://jsonplaceholder.typicode.com/users').then(
      (response) => {
        console.log('response', response);
      },
    );
  }, []);

  console.log('device desktop?', device.desktop);

  const handleButtonLogin = () => {
    history.push('/home');
  };

  return (
    <div>
      Pagina Login
      <button onClick={handleButtonLogin}>Login</button>
    </div>
  );
};

export default Login;
