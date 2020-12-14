import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import { PageBodyStyled, FormTitle, FormButton } from './App.styled';
import { PageMainContainer, FormContainer, FormInnerContainer } from './Components/Container/Container.styled';
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import EmailViewer from './Components/EmailViewer'
import Dashboard from './Components/Dashboard';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <PageBodyStyled>

        <PageMainContainer>
          <Router>
            <Switch>
            <Route path="/email">
              <EmailViewer></EmailViewer>
            </Route>
            <Route path="/faq">
              <Faq></Faq>
            </Route>
            <Route path="/">
                <Dashboard></Dashboard>
            </Route>             
            </Switch>
          </Router>

        </PageMainContainer>
        <Footer />
      </PageBodyStyled>
    </ThemeProvider>
  );
}

export default App;
