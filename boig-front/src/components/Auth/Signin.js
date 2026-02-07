import { useContext, useState } from "react";
import { NavLink } from "react-router";
import Pulse from "../Loading/Pulse";
import { useLogin } from "../../hooks/useLogin";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const signIn = async (e) => {
    e.preventDefault();
    console.log("sign in", email, password);
    await login(email, password);
    // TODO : navigate away from login after success.
  };
  return (
    <div>
      <h1>Sign In</h1>
      {isLoading && <Pulse />}
      <form onSubmit={signIn}>
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
        <input type="submit" value="sign in" disabled={isLoading} />
      </form>
      no account? : <NavLink to="/signup">sign up</NavLink>
    </div>
  );
};
export default Signin;
