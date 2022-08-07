import React, { useContext } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});
export const AuthContextProvider = AuthContext.Provider;
export const useAuthContext = () => {
  const { isLoggedIn, onLogin, onLogout } = useContext(AuthContext);

  return { isLoggedIn, onLogin, onLogout };
};
