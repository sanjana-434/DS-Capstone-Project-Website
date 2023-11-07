// src/components/ProjectList.js
import React, { useState } from 'react';
import Project from './Projects';
import projectsData from './projectData';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Projects.css';

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='project-container'>
      <div className='project-input-container'>
      <h1>Projects</h1>
      <div className='search-bar'>
        <input
          className='project-search'
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className='search-icon'>
          <SearchIcon />
        </span>
      </div>
    </div>
      <div className="project-list">
        {filteredProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
