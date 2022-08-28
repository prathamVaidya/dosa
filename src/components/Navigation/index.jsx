import React, { useState } from "react";
import Constants from "../../data/Constants";
import NavItem from "./NavItem";
import { MdLibraryBooks, MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoSettings, IoLogOut, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
function Navigation(props) {
  const { setNav, nav } = props;
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const closeHandler = (e) => {
    setNav(!nav);
  };
  const menu = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <MdSpaceDashboard size={24} />,
      default: true,
    },

    {
      name: "Data",
      url: "/dashboard/data",
      icon: <MdLibraryBooks size={24} />,
    },

    {
      name: "Users",
      url: "/dashboard/users",
      icon: <FaUsers size={24} />,
    },

    {
      name: "Settings",
      url: "/dashboard/settings",
      icon: <IoSettings size={24} />,
    },

    {
      name: "Logout",
      url: "/logout",
      icon: <IoLogOut size={24} />,
    },
  ];

  const clickHandler = (e) => {
    e.preventDefault();
    setActive(e.currentTarget.getAttribute("index"));
    navigate(e.currentTarget.getAttribute("to"));
  };

  return (
    <div
      className={
        `z-20 bg-offwhite fixed h-full left-0 w-8/12 sm:w-3/12 sm:relative transition-transform shadow-lg sm:shadow-none ` +
        (nav ? "translate-x-0" : "-translate-x-full")
      }
    >
      <div className={`p-3 float-right ` + (!isMobile ? "invisible" : "")}>
        <IoClose className="cursor-pointer" size={24} onClick={closeHandler} />
      </div>
      <div className="w-full my-10">
        <img
          src={process.env.PUBLIC_URL + Constants.APP_LOGO.BLACK}
          className="w-auto sm:h-16 h-10 object-cover my-4 mx-auto"
        />
      </div>
      <div className="bg-red px-8 my-10 ">
        {menu.map((item, index) => {
          return (
            <NavItem
              name={item.name}
              onClick={clickHandler}
              to={item.url}
              icon={item.icon}
              active={index == active}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
