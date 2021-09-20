import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

export default function Header(){
    return(
        <header>
            <nav>
                <ul className="menu">
                    <li><Link className="links" to="/">Home</Link></li>
                    <li><Link className="links" to="/about">About</Link></li>
                    <li><Link className="links" to="/projects">Projects</Link></li>
                    <li><Link className="links" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}