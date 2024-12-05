// src/components/About.js
import React from 'react';
import '../about.css'; // Import the CSS file

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <h1>Summary</h1>
                <p>Highly motivated and skilled Frontend Developer with 4 years of experience in designing and developing responsive web applications using React.js, JavaScript, HTML, and CSS. Proficient in building dynamic and user-friendly interfaces, optimizing performance, and collaborating with cross-functional teams. Passionate about delivering high-quality solutions and enhancing user experiences.</p>
                
                <h2>Contact Information</h2>
                <ul className="contact-list">
                  
                    <li><strong>Email:</strong> <a href="mailto:lavanyadeva98@gmail.com">lavanyadeva98@gmail.com</a></li>
                    <li><strong>Phone:</strong>+(91) 9791752969</li>
                     <li><strong>GitHub:</strong> <a href="https://github.com/lavanya-deva/userDetails" target="_blank" rel="noreferrer">https://github.com/lavanya-deva/userDetails</a></li>
                   
                </ul>
            </div>
        </section>
    );
};

export default About;