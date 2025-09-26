import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import "./navbar.css" 

const Navbar = ()=>{

    const [isScrolled , setisScrolled] = useState(false)
    useEffect(()=> {
        const handleScroll = ()=> setisScrolled(window.scrollY > 2);
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    },[]);


    return (
        <nav className = {` navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"> <i className ="fas fa-code" >  </i> Anıl Elmaz</Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-left">
                        <div className="nav-links">
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </div>
                        <a href="https://github.com/AE1024" target="_blank" rel="noopener noreferrer">My Github</a>
                    </div>
                    <div className="navbar-right">
                        <a href="https://www.linkedin.com/in/an%C4%B1l-elmaz-5628a3286/" target="_blank" rel="noopener noreferrer">My Linkedin</a>
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;
