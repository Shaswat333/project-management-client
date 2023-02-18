import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { useContext } from "react";

function Navbar() {

  const { loggedUser, logout } = useContext(UserContext);
  return (
   
    <nav>
      <div>
        {loggedUser ? (
          <div>
            <p>Welcome {loggedUser.email}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <>
            <div>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div>
              <NavLink to="/signup">Signup</NavLink>
            </div>
          </>
        )}
      </div>
      <div>
        <NavLink to="/">Projects</NavLink>
      </div>
      {loggedUser && (
        <div>
          <NavLink to="/projects/add">Add Project</NavLink>
        </div>
      )}
    </nav>


  

  );
}

export default Navbar;
