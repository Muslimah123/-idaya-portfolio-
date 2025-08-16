import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-all duration-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navigation />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/projects" element={<Projects />} />
                                   <Route path="/experience" element={<Experience />} />
                     <Route path="/leadership" element={<Leadership />} />
                     <Route path="/publications" element={<Research />} />
                     <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;