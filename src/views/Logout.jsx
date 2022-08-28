import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  user && logout();
  navigate("/login");

  return <div></div>;
}

export default Logout;
