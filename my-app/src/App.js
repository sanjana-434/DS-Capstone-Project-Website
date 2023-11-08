import './App.css';
import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import NavBar from './components/NavBar'
import { Banner } from "./components/Banner";
import ProjectList from  './components/ProjectList';
import Contact from './components/Contact';
import ContactAll from './components/ContactAll';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="https://sanjana-434.github.io/DS-Capstone-Project-Website" element={<Banner />} />
        <Route path="https://sanjana-434.github.io/DS-Capstone-Project-Website/Banner" element={<Banner />} />
        <Route path="https://sanjana-434.github.io/DS-Capstone-Project-Website/ProjectList" element={<ProjectList />} />
        <Route path="https://sanjana-434.github.io/DS-Capstone-Project-Website/Contact" element={<Contact />} />
        <Route path="https://sanjana-434.github.io/DS-Capstone-Project-Website/ContactAll" element={<ContactAll />} />
      </Routes>
    </Router>
  );
}

export default App;
