import { useContext } from "react";
import { VersionContext } from "../../contexts/versionContext";

export const Version = () => {
  const version = useContext(VersionContext);

  return <div>{version && <p>Version : {version}</p>}</div>;
};
