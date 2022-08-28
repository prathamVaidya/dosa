import React, { useEffect, useState } from "react";
import { useTheme } from "./themes/useTheme";
import styled, { ThemeProvider } from "styled-components";
function App(props) {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  //   useEffect(() => {
  //     WebFont.load({
  //       google: {
  //         families: getFonts(),
  //       },
  //     });
  //   });

  return (
    themeLoaded && (
      <ThemeProvider theme={selectedTheme}>
        <div className="grid grid-cols-5 min-h-screen">
          <div
            className="bg-gray-500 col-span-3"
            style={{ background: selectedTheme.colors.body }}
          >
            Helllooooo
          </div>
          <div className="bg-red-500 col-span-2"></div>
        </div>
      </ThemeProvider>
    )
  );
}

export default App;
