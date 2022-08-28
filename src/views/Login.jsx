import React from "react";
import Constants from "../data/Constants";
import Input from "../components/Input";
import GoogleSignIn from "../components/GoogleSignIn";
import Seperator from "../components/Seperator";
function Login(props) {
  const { theme } = props;
  return (
    <div className="grid grid-cols-1 sm:h-screen sm:grid-cols-5 ">
      <div className=" col-span-2 bg-primary content-center flex items-center justify-center p-2 sm:p-0">
        <img
          src={process.env.PUBLIC_URL + Constants.APP_LOGO}
          className="w-auto sm:h-48 h-16 object-cover"
          // style={{ width: "512px" }}
        />
        {/* <h1 className="font-medium text-4xl leading-tight text-center">
          Super Company
        </h1> */}
      </div>
      <div
        className="bg-gray-500 col-span-3 flex items-center justify-center"
        style={{
          background: theme.colors.body,
        }}
      >
        <div className="p-5 py-10 w-full max-w-md sm:border border-gray-300 rounded-lg">
          <h1 className="font-medium text-4xl leading-tight text-center">
            Login
          </h1>
          <Input
            label="Email"
            placeholder="Email Address or Username"
            className="my-5"
          />
          <Input label="Password" placeholder="Password" className="mt-5" />

          <Seperator />
          <GoogleSignIn
            onClick={(e) => {
              console.log(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
