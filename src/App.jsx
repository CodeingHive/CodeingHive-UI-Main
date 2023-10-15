import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CodeEditor from './pages/HTMLRunner';
import OnlineCompiler from './pages/OnlineCompiler';

function App() {
  return (
    <Router>
      <div>
        {/* Include the Navbar component */}
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/OnlineComplier" element={<OnlineCompiler />} />
          <Route path="/HTMLRunner" element={<CodeEditor />} />
          {/* To implement
          /community
          /login */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
