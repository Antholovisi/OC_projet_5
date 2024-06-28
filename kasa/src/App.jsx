import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import Home from './pages/home';
import About from './pages/a_propos';
import FicheAppartement from './pages/apartement-page';
import Error from './pages/404';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FicheAppartement/" element={<FicheAppartement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
