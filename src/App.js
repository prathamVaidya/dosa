import React, { useEffect, useState } from "react";
import { useTheme } from "./themes/useTheme";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
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
            <Route
              path="/dashboard"
              element={<Dashboard theme={selectedTheme} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
  );
}

export default App;
