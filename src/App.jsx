import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CodeEditor from './pages/CodeEditor';

function App() {
  return (
    <Router>
      <div>
        {/* Include the Navbar component */}
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<CodeEditor />} />
          <Route path="/CodeEditor" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
