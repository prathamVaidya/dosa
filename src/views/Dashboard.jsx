import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation/";
import Constants from "../data/Constants";
import { auth, logout } from "../firebase";
import Login from "./Login";

import Header from "../components/Header";
function Dashboard(props) {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [nav, setNav] = useState(!isMobile);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading]);

  return (
    <div className="flex flex-row justify-evenly h-screen bg-offwhite">
      <Navigation nav={nav} setNav={setNav} />
      <div className="w-full bg-offwhite p-5 flex flex-col">
        <Header setNav={setNav} name="Dashboard" />
        <div
          className={
            `absolute inset-0 bg-black opacity-50 h-full flex flex-col transition-all ` +
            (nav && isMobile ? "visible" : "invisible")
          }
          onClick={() => setNav(false)}
        ></div>
        <div className="bg-white shadow-md rounded-md flex-grow p-4 mt-4 bg-blend-darken">
          Main Container
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
{
  /* <button onClick={logout}>Logout</button> */
}
