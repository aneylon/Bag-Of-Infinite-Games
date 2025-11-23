import "./App.css";
import VersionContextProvider from "./contexts/versionContext";
import AuthContextProvider from "./contexts/authContext";
import { Routes, Route } from "react-router";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import News from "./components/News/News";

function App() {
  return (
    <div className="App">
      <VersionContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </AuthContextProvider>
      </VersionContextProvider>
    </div>
  );
}

export default App;
