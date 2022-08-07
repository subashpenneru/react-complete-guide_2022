import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { useAuthContext } from '../../context/auth-context';

const MainHeader = () => {
  const { isLoggedIn, onLogout } = useAuthContext();

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
