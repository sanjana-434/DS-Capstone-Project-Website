// src/components/Project.js
import React from 'react';

const Project = ({ title, description,developers, imageUrl, link }) => {
  return (
    <div className="project">
        <a href={link} target="_blank" rel="noopener noreferrer" class= 'project-a'>
            <img src={imageUrl} alt={title} className='project-img' />
            <h2 className='project-title'>{title}</h2>
            <b>
            <p className='project-description'>{developers}</p>
            </b>
            <br></br>
            <p className='project-description'>{description}</p>
            
            
        </a>
    </div>
  );
};

export default Project;
