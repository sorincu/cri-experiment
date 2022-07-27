import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme.js';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Header from './components/Sections/Header';
import PageTransition from './components/PageTransition';
import BaseLayout from './components/Layouts/BaseLayout';
import Section from './components/Sections/Section';
import HomePage from './Home';
import About from './pages/About';
import OpeningHoursList from './components/OpeningHours/List';
import './style.css';

export const myThemeProvider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Router>
          <Header />
          <BaseLayout>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <h1>My name is boomboxblaster or mmmmfood</h1>
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </BaseLayout>
        </Router>
      </ChakraProvider>
    </>
  );
}
