import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Bag of Infinite Games
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
