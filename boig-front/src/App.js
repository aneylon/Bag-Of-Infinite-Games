import "./App.css";
import VersionContextProvider from "./contexts/versionContext";
import AuthContextProvider from "./contexts/authContext";
import { TestComponent } from "./components/testComponent";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <VersionContextProvider>
        <AuthContextProvider>
          <h1>Bag of Infinite Games</h1>
          <TestComponent />
          <Counter />
        </AuthContextProvider>
      </VersionContextProvider>
    </div>
  );
}

export default App;
