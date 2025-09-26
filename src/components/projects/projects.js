import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <section className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <h1>My Projects</h1>
                </div>
                
                <div className="projects-list">
                    <div className="project-item">
                        <div className="projects-title">
                            <h2>1. Herd Management System</h2>
                        </div>
                        <div className="projects-text">
                            <p>Java based desktop application for managing livestock herds</p>
                        </div>
                        <div className="projects-list-link">
                            <a href="https://github.com/AE1024/Herd_Management" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    
                    <div className="project-item">
                        <div className="projects-title">
                            <h2>2. Airbnb Data Analysis</h2>
                        </div>
                        <div className="projects-text">
                            <p>Data analysis project using Python and pandas library</p>
                        </div>
                        <div className="projects-list-link">
                            <a href="https://github.com/AE1024/Airbnb-Data-Analysis" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
