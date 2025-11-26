import { useState } from "react";
import { NavLink } from "react-router";
import Pulse from "../Loading/Pulse";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    console.log("sign up", email, password);
    // TODO :
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <Pulse />
      <form onSubmit={signUp}>
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
        <input type="submit" value="sign up" />
      </form>
      have an account? : <NavLink to="/signin">sign in</NavLink>
    </div>
  );
};
export default Signup;
