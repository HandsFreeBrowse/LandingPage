import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

// Component Imports
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import LandingPage from './Pages/Landing/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import css
import './dist/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
