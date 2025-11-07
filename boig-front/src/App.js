import "./App.css";
import VersionContextProvider from "./contexts/versionContext";
import AuthContextProvider from "./contexts/authContext";

function App() {
  return (
    <div className="App">
      <VersionContextProvider>
        <AuthContextProvider>
          <h1>Bag of Infinite Games</h1>
        </AuthContextProvider>
      </VersionContextProvider>
    </div>
  );
}

export default App;
