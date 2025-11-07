import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(0);

  const getAuth = () => {
    // todo :
    // call to get Auth
    // set Auth
  };

  useEffect(() => {
    // TODO : get any stored auth info
  }, []);

  return (
    <AuthContext.Provider value={{ auth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
