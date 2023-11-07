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
        <Route path="/" element={<Banner />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/ProjectList" element={<ProjectList />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ContactAll" element={<ContactAll />} />
      </Routes>
    </Router>
  );
}

export default App;
