import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CodeEditor from './pages/HTMLRunner';
import OnlineCompiler from './pages/OnlineCompiler';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('./src/assets/herobg.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  return (
    <Router>
      <div className='gradient-bg-welcome'>
        {/* Include the Navbar component */}
        <Navbar />
      </div>
      <div style={backgroundStyle}>


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
        <div className='gradient-bg-portfolio' >
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
