import { useContext, useState } from "react";
import { NavLink } from "react-router";
import Pulse from "../Loading/Pulse";
import { AuthContext } from "../../contexts/authContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useContext(AuthContext);

  const signIn = (e) => {
    e.preventDefault();
    console.log("sign in", email, password);
    // TODO :
    setEmail("");
    setPassword("");
    let userName = "whatever man";
    setAuth({ userName, email, authToken: "justTesting" });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <Pulse />
      <form onSubmit={signIn}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="sign in" />
      </form>
      no account? : <NavLink to="/signup">sign up</NavLink>
    </div>
  );
};
export default Signin;
