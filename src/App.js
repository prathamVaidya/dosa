import React, { useEffect, useState } from "react";
import { useTheme } from "./themes/useTheme";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Logout from "./views/Logout";
import Users from "./views/Dashboard/Users";
import Setting from "./views/Dashboard/Setting";
function App(props) {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    themeLoaded && (
      <ThemeProvider theme={selectedTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard theme={selectedTheme} />} />
            <Route path="/login" element={<Login theme={selectedTheme} />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/dashboard"
              element={<Dashboard theme={selectedTheme} />}
            >
              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/settings" element={<Setting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
  );
}

export default App;
