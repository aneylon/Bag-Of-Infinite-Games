import { useContext } from "react";
import { NavLink } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

export const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const signOut = () => {
    console.log("Sign out");
    logout();
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
            <NavLink to="/todo">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/notes">Notes</NavLink>
          </li>
          <li>
            <NavLink to="/messageBoard">Message Board</NavLink>
          </li>
          <li>
            <NavLink to="/GameList">Game List</NavLink>
          </li>
          {!user && (
            <li>
              <NavLink to="/signin">Sign in</NavLink>
            </li>
          )}
          {user && (
            <li>
              <button onClick={signOut}>Sign out</button>
              {/* <a onClick={signOut}>Sign out</a> */}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
