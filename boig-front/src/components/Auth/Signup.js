import { useState } from "react";
import { NavLink } from "react-router";
import Pulse from "../Loading/Pulse";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();
  const signUp = async (e) => {
    e.preventDefault();
    console.log("sign up", email, password);
    await signup(email, password);
    // TODO : navigate away from signup after success
  };
  return (
    <div>
      <h1>Sign Up</h1>
      {isLoading && <Pulse />}
      <form onSubmit={signUp}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <input type="submit" value="sign up" disabled={isLoading} />
      </form>
      {error && <div>Error : {error}</div>}
      have an account? : <NavLink to="/signin">sign in</NavLink>
    </div>
  );
};
export default Signup;
