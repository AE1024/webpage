import React from "react";

import "./b.css";

const About = () => {

    return (
<section className="section">
    <div className="container">
        <div className = "header">
            <h1>About Me</h1>
        </div>
            <div className="name">
                <h2>Anıl Elmaz</h2>
            </div>
        <div className="title">
            <h3>Data Science-Machine Learning</h3>
        </div>
        <div className="text">
            <p>I m a student in Suleyman Demirel University.
                And ı m currently studying Data Science and Machine Learning.
                I m trying to improve myself in this field by doing projects and courses.
                I use so many platfrorms to improve myself.
            </p>
        </div>
        <div className="about-image">
            <img src = "images.png" alt = "about me" />
        </div>
        <div className="about-media" height="auto" >
            <video className="about-video" width="300" height="300" controls autoPlay muted loop>
                <source src="./aivideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <footer >
            <div className="copy-right">
                <p>&copy; 2025 Anıl Elmaz. All rights reserved.2321032024</p>
            </div>
        </footer>
    </div>
</section>
        
    );


};

export default About;