// src/components/Experience.js
import React, { useState } from 'react';
import '../project.css'; // Import the CSS file

const experiences = [
    {
        title: "Technology Analyst",
        company: "Infosys",
        responsibilities: [
            "Designed and developed full-stack learning applications utilizing PHP and MySQL for server-side programming, and JavaScript/React for client-side interactions.",
            "Improved application functionality to create an intuitive user interface by utilizing AJAX requests for smooth data fetching without necessitating page reloads.",
            "Implemented state management using Redux in a React application to enhance application performance and maintainability, resulting in a 30% reduction in data fetching time."
        ]
    },
    {
        title: "Senior System Engineer",
        company: "Infosys",
        responsibilities: [
            "Developed and maintained responsive web applications using React.js, TypeScript, integrating CMS for state management and dynamic content delivery.",
            "Worked on migration of class components to functional components and improved application performance by 25% with the use of hooks.",
            "Implemented unit testing and end-to-end testing strategies using React Testing Library, increasing code quality and reliability.",
            "Used Bit.dev for effective component management, promoting reusability and collaboration, which improved project efficiency."
        ]
    },
    {
        title: "System Engineer",
        company: "Infosys",
        responsibilities: [
            "Developed reusable React components using Material-UI, enhancing the overall UI/UX of an enterprise application.",
            "Integrated Google Analytics into the web application to track user behavior, generating detailed reports that informed design improvements and functionality enhancements.",
            "Involved in developing new features, refactoring the existing code to make it reusable, and fixing defects under an agile framework."
        ]
    },
    {
        title: "System Engineer Trainee",
        company: "Infosys",
        responsibilities: [
            "Developed an eCommerce website using the MEAN stack as part of training assessment.",
            "During training, I learned MongoDB and Angular Framework and cleared all training examinations."
        ]
    },
];

const Project = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="experience">
            <div className="experience-container">
                <h1>Experience</h1>
                <div className="accordion-container">
                    {experiences.map((job, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" onClick={() => handleToggle(index)}>
                                {job.title} at {job.company}
                                <span className="toggle-icon">{openIndex === index ? '-' : '+'}</span>
                            </h2>
                            {openIndex === index && (
                                <ul className="accordion-content">
                                    {job.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;