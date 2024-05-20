import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { useDarkMode } from "./hooks/useDarkMode";
import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

const Container = styled.div`
  padding: 20px;
  margin: auto;
  background-color: ${({ theme }) => theme.background};
  padding-right: 15vw;
  padding-left: 15vw;

  @media (max-width: 1118px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bab2e7;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Switch toggleTheme={toggleTheme} />
        <Header />
        <Main icontheme={theme} />
        <Skills />
        <Seperator />
        <Profile />
        <Seperator />
        <Projects />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
