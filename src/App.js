import React, { useEffect, useState } from "react";
import { useTheme } from "./themes/useTheme";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import Login from "./views/Login";
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
        <Login theme={selectedTheme} />
      </ThemeProvider>
    )
  );
}

export default App;
