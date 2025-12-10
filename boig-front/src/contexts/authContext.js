import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const storageString = "boig-user";

  const getAuth = () => {
    let userFromStorage = localStorage.getItem(storageString);
    setUser(JSON.parse(userFromStorage));
  };

  const setAuth = (user) => {
    localStorage.setItem(storageString, JSON.stringify(user));
    setUser(user);
  };

  const clearAuth = () => {
    setUser(null);
    localStorage.clear(storageString);
  };

  useEffect(() => {
    // TODO : get any stored auth info
    console.log("get stored auth info on start up");
    getAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, getAuth, setAuth, clearAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
