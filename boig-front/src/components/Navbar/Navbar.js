import { NavLink } from "react-router";

export const Navbar = () => {
  const signOut = () => {
    console.log("Sign out");
  };
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
          <li>
            <NavLink to="/signin">Sign in</NavLink>
          </li>
          <li>
            {/* <button onClick={signOut}>Sign out</button> */}
            <a onClick={signOut}>Sign out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
