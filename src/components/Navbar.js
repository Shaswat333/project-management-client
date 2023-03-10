import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import React, { useContext } from "react";


function Navbar() {
  
  const { loggedUser, logout } = useContext(UserContext);
  
      
  console.log(loggedUser);
  return (
    <nav>
      <div>
        {loggedUser ? (
          <div>     
            <p>`Welcome {loggedUser.username}`</p>       
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <>
            <div>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div>
              <NavLink to="/landingpage">LandingPage</NavLink>
            </div>
            <div>
              <NavLink to="/signup">Signup</NavLink>
            </div>
            
            
          </>
        )}
      </div>
      
      
      {loggedUser && (
        
        <div>
          <NavLink to="/projects/add">Add Stores</NavLink>
          <div>
          <NavLink to="/projects">Stores</NavLink>
          </div>
        </div>
        
         
        
      )}
    </nav>
  );
}

export default Navbar;










