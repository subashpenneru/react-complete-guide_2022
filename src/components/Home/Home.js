import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { useAuthContext } from '../../context/auth-context';

const Home = () => {
  const { onLogout } = useAuthContext();

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
