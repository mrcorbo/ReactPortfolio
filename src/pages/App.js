import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Header from './Header'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'

function App() {
  return (
      <Router>
        <>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<Contact />} />=
            {/* <Route 
                path="/"  <<< put path here for new route 
                element={<element/>} <<< put element here for new route 
                /> */}
          </Routes>
        </>
      </Router>
  );
}

export default App;