import React from 'react'
import './component-style.css';


const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blogs">blogs</a>
            </nav>
        </header>
    );
};


export default Navbar
