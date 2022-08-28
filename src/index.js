import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as themes from "./themes/theme.json";
import { setToLocalStorage } from "./utils/storage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Index = () => {
  setToLocalStorage("themes", themes.default);
  return <App />;
};
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
