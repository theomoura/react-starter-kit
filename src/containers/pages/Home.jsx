import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.authReducer.userData);

  return (
    <div>
      <div>Pagina Home</div>
      <div>{user[0].name}</div>
    </div>
  );
};

export default Home;
