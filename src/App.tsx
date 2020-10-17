import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./theme/GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Wrapper } from "./components/shared/Wrapper";
import About from "./pages/About";
import Component from "./pages/Component";
import Account from "./pages/Account";

const Layout = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <div className="App">
        <GlobalStyle theme={theme} />
        <Header />
        <Layout>
          <Wrapper>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="account" element={<Account />} />
                <Route path="component" element={<Component />} />
              </Routes>
            </BrowserRouter>
            <div />
          </Wrapper>
        </Layout>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

/**
 * TODO
 * Implement the routing with all the pages having a placeholder
 * Implement the media queries (create a new file for them)
 * import any fonts you want to use from
 * Pick a color pallet and create a color object for
 * */
