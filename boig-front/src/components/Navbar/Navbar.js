import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <h2>Bag of Infinite Games</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
