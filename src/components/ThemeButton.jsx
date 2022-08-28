import React from "react";

function Button(props) {
  return (
    <button
      className="w-full p-3  rounded-lg flex justify-center items-center bg-primary text-white mt-10 "
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
