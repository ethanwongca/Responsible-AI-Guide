import React from 'react';
import '../styles/Navbar.css';
import githubLogo from '../assets/github-logo.png';

const Navbar: React.FC = () =>{
    return (
        <nav className='navbar'>
            <div className="title">
                <span>Responsible AI Guide</span>
            </div>
        
        <ul className="navbar-links">

        </ul>
        </nav>
    );
}

export default Navbar;