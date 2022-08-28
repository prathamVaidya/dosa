import React from "react";

function NavItem(props) {
  const Icon = props.icon;
  return (
    <div
      onClick={props.onClick}
      to={props.to}
      index={props.index}
      className={`h-full w-full  p-4 rounded-xl my-2 flex items-center cursor-pointer ${
        props.active
          ? "bg-white text-primary shadow-lg font-bold"
          : "opacity-40 font-semibold "
      }`}
    >
      <span className="px-3">{Icon}</span>
      <span>{props.name}</span>
    </div>
  );
}

export default NavItem;
