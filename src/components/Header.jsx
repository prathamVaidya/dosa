import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoNotificationsSharp, IoMenu } from "react-icons/io5";
import Input from "../components/Input";
import Breadcrumbs from "../components/Breadcrumbs";

function Header(props) {
  const { setNav, name } = props;
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-grow p-2">
        <div className="font-light text-sm">
          <Breadcrumbs />
        </div>
        <div className="font-bold">{name}</div>
      </div>

      <div className="items-center grid grid-flow-col">
        <Input
          placeholder="Type here..."
          icon={<FaSearch />}
          className="mr-3"
        />
        <IoMenu
          size={20}
          className="mr-3 cursor-pointer visible sm:invisible"
          onClick={() => setNav(true)}
        />
        <FaUserCircle size={20} className="mr-3 cursor-pointer" />
        <IoNotificationsSharp size={20} className="cursor-pointer mr-3" />
      </div>
    </div>
  );
}

export default Header;
