import React, { useEffect, useState } from "react";
import Constants from "../data/Constants";
import Input from "../components/Input";
import GoogleSignIn from "../components/GoogleSignIn";
import Seperator from "../components/Seperator";
import ThemeButton from "../components/ThemeButton";
import { auth, logInWithEmailAndPassword } from "../firebase";
import Alert from "../components/Alert";
import { useAuthState } from "react-firebase-hooks/auth";
import { CircularProgress } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
function Login(props) {
  const { theme } = props;

  const [user, loading2, error2] = useAuthState(auth);

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: null,
    password: null,
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLoginButton = async (e) => {
    setError(false);
    setLoading(true);
    if (login.email && login.password) {
      if (!(await logInWithEmailAndPassword(login.email, login.password))) {
        setError("Email or Password is incorrect");
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  };
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

          {error && <Alert message={error} />}

          <Input
            label="Email"
            placeholder="Enter Email Address"
            className="my-3"
            name="email"
            onChange={handleInput}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            className="my-3"
            name="password"
            onChange={handleInput}
          />

          {loading ? (
            <div className="w-full p-3  rounded-lg flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <ThemeButton onClick={handleLoginButton}>Login</ThemeButton>
          )}

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
