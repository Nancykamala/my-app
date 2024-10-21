import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userCredentials = {
    username: "Nancy",
    password: "Nancy1234",
  };

  const login = (username, password) => {
    if (
      username === userCredentials.username &&
      password === userCredentials.password
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
