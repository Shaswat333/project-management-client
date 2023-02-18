import { createContext, useEffect, useState } from "react";
import { verify } from "../api";

const UserContext = createContext();

function UserProviderWrapper({ children }) {
  const [loggedUser, setLoggedUser] = useState(null);

  async function authenticateUser() {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      try {
        const response = await verify(storedToken);
        setLoggedUser(response.data);
      } catch (e) {
        setLoggedUser(null);
      }
    } else {
      setLoggedUser(null);
    }
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        authenticateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProviderWrapper, UserContext };