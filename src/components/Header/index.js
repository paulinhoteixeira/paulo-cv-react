import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Projects</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}