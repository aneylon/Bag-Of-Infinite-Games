import { createContext, useEffect, useState } from "react";

export const VersionContext = createContext();

const VersionContextProvider = (props) => {
  const [version, setVersion] = useState(0);

  const getVersion = () => {
    // todo :
    // call to get version
    // set version
  };

  useEffect(() => {
    // TODO : get the current version
  }, []);

  return (
    <VersionContext.Provider value={{ version }}>
      {props.children}
    </VersionContext.Provider>
  );
};

export default VersionContextProvider;
