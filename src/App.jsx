import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CodeEditor from './pages/HTMLRunner';
import OnlineCompiler from './pages/OnlineCompiler';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        {/* Include the Navbar component */}
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/onlinecomplier" element={<OnlineCompiler />} />
          <Route path="/htmlrunner" element={<CodeEditor />} />
          {/* To implement
          /community
          /login */}

          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
