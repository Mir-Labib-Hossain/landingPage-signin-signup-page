import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import GlobalStyle from "./Global.styled";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState({
    themeColor: "#00c806",
    themeBg: "black",
    themeText: "white",
    scrolled: false,
  });
  const modeHandler = () => {
    !darkMode
      ? setTheme({
          ...theme,
          themeColor: "#00c806",
          themeBg: "black",
          themeText: "white",
        })
      : setTheme({
          ...theme,
          themeColor: "#00c806",
          themeBg: "white",
          themeText: "black",
        });

    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 180) {
        setTheme((prevState) => ({
          ...prevState,
          scrolled: true,
        }));
      } else {
        setTheme((prevState) => ({
          ...prevState,
          scrolled: false,
        }));
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.scrolled]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main darkMode={darkMode} modeHandler={modeHandler} />
      </ThemeProvider>
    </>
  );
}

export default App;
