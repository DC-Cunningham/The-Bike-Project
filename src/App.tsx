import React from "react";
import "./firebase/config"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./theme/GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Background} from "./components/shared/Background"
import { Wrapper } from "./components/shared/Wrapper";
import About from "./pages/About";
import ComponentList from "./pages/ComponentList";
import Account from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { UserProvider } from "./context/UserProvider";


function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <UserProvider>
      <div className="App">
        <GlobalStyle />
            <BrowserRouter>
        <Header />
        <Background>
          <Wrapper>
              <Routes>
                <Route path="/" element={<About />} />
                <PrivateRoute path="account" component={Account} />
                <PrivateRoute path="profile/:id" component={Profile} />
                <PrivateRoute path="component" component={ComponentList} />
                <PublicRoute path="login" component={Login} />
                <PublicRoute path="register" component={Register} />
              </Routes>
            <div />
          </Wrapper>
        </Background>
            </BrowserRouter>
        <Footer />
      </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

