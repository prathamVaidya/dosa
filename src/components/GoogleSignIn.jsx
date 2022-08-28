import React from "react";
import { FcGoogle } from "react-icons/fc";

function GoogleSignIn(props) {
  return (
    <button
      className="w-full border-gray-300 p-3 border rounded-lg flex justify-center items-center bg-gray-100"
      {...props}
    >
      <FcGoogle size={24} className="mx-2" />
      <span className="text-gray-900">Sign in with Google</span>
    </button>
  );
}

export default GoogleSignIn;
