import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { Navigate } from "react-router-dom";
import React from "react";

function IsPrivate({ children }) {
  const { loggedUser } = useContext(UserContext);

  if (!loggedUser) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default IsPrivate;
