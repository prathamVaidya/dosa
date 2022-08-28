import React from "react";

function Seperator(props) {
  return (
    <div className="flex py-10 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">OR</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
}

export default Seperator;
