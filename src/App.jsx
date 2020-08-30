import React from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from './config/themes/';
import Routes from './router/routes';

const App = () => {
  return (
    <ThemeProvider theme={main}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
