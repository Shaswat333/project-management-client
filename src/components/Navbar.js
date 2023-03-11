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
            <img
                  style={{ width: "30%" }}
                  src="https://res.cloudinary.com/dteq5gevo/image/upload/v1678538597/astorez_uhud9o.png"
                  alt="project"
                /> 
            <h1>ConnectStorz</h1>
            <p>`Welcome {loggedUser.username}`</p>       
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <>
            <div>
             <img
                  style={{ width: "50%" }}
                  src="https://res.cloudinary.com/dteq5gevo/image/upload/v1678538597/astorez_uhud9o.png"
                  alt="project"
                />
                <h1>ConnectStorz</h1>
            </div>
            <div>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div>
              <NavLink to="/landingpage">LandingPage</NavLink>
            </div>     
          </>
        )}
      </div>
      
      
      {loggedUser && (
        <div>
          <NavLink to="/projects/add">Add Stores</NavLink>
          <div>
          <NavLink to ="projects" >Stores</NavLink>
          </div>
        </div>
        
         
        
      )}
    </nav>
  );
}

export default Navbar;