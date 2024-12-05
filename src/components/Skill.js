// src/components/Skills.js

import React from 'react';
import '../skills.css'; // Import the CSS file

const skillsData = {
    languages: ['JavaScript', 'HTML5', 'CSS3', 'SCSS', 'PHP', 'TypeScript'],
    frameworks: ['React.js', 'Redux', 'Bootstrap', 'Tailwind CSS', 'Material-UI'],
    tools: ['Git', 'MySQL Workbench', 'Figma', 'Postman', 'VSCode', 'Jenkins'],
    testingFrameworks: ['React Testing Library'],
    databases: ['SQL', 'MySQL'],
};

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            {Object.keys(skillsData).map((category, idx) => (
                <div className="skills-category" key={idx}>
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    <ul>
                        {skillsData[category].map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;