// src/components/RolesAndResponsibilities.js

import React, { useState } from 'react';
import '../roles.css'; // Import the CSS file

const roles = [
    {
        title: 'Adhering to Agile Methodologies',
        description: 'Implement user stories by developing dynamic, responsive components using React, HTML, and CSS, ensuring alignment with design specifications and user requirements.',
    },
    {
        title: 'Troubleshooting and Debugging',
        description: 'Troubleshoot and debug applications, identifying and resolving issues promptly to enhance user experience.',
    },
    {
        title: 'Code Maintenance',
        description: 'Regularly refactor code to improve readability, maintainability, and overall performance, applying best coding practices.',
    },
    {
        title: 'Team Collaboration',
        description: 'Engage with marketing teams to implement analytics tools (e.g., Google Analytics) to track user engagement and application performance.',
    },
];

const RolesAndResponsibilities = () => {
    const [openedIndex, setOpenedIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (openedIndex === index) {
            setOpenedIndex(null); // Close if already open
        } else {
            setOpenedIndex(index); // Open the selected one
        }
    };

    return (
        <div className="roles-container">
            <h1>Roles and Responsibilities</h1>
            <div className="roles-list">
                {roles.map((role, index) => (
                    <div className="role-card" key={index}>
                        <div 
                            className="role-title" 
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2>{role.title}</h2>
                        </div>
                        {openedIndex === index && (
                            <p className="role-description">{role.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RolesAndResponsibilities;