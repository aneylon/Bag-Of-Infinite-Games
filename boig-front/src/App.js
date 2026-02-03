import "./App.css";
import VersionContextProvider from "./contexts/versionContext";
import AuthContextProvider from "./contexts/authContext";
import { Routes, Route } from "react-router";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Matching from "./components/Matching/Matching";
import Todo from "./components/Todo/Todo";
import { ToastContainer } from "react-toastify";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { Version } from "./components/Version/Version";
import Notes from "./components/Notes/Notes";
import MessageBoard from "./components/MessageBoard/MessageBoard";
import GameList from "./components/GameList/GameList";
import Modal from "./components/Modal/Modal";
import HonorAndGlory from "./components/HonorAndGlory/HonorAndGlory";
import RandomIdeaGenerator from "./components/RandomIdeaGenerator/RandomIdeaGenerator";

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
            <Route path="/matching" element={<Matching />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/messageBoard" element={<MessageBoard />} />
            <Route path="/gamelist" element={<GameList />} />
            <Route path="/honorAndGlory" element={<HonorAndGlory />} />
            <Route path="/randomIdea" element={<RandomIdeaGenerator />} />
          </Routes>
          <Version />
        </AuthContextProvider>
      </VersionContextProvider>
      <ToastContainer position="top-center" theme="dark" />
      <Modal
        content={
          <h1>
            The version of the app running in your browser is out of date.
            Please refresh your browser to continue.
          </h1>
        }
      />
    </div>
  );
}

export default App;
