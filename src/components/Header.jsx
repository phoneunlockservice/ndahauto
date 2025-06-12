import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import Sidebar from './Sidebar';

import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            {/* Top Social Bar */}
            <div className="top-bar">
                <div className="social-icons">
                    <a href="#"><span className="icon-facebook"><FaFacebookF /></span> Facebook</a>
                    <a href="#"><span className="icon-instagram"><FaInstagram /></span> Instagram</a>
                    <a href="#"><span className="icon-whatsapp"><FaWhatsapp /></span> Whatsapp</a>
                    {/* <a href="tel:+237678708403"><span className="icon-phone"><FaPhone /></span> +237678708403</a> */}
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="main-navbar">
                <Link to="/home" className="logo">ndah auto</Link>
                {/* <div className="logo">NDAH AUTO</div> */}

                {/* Desktop Nav */}
                <div className="nav-links desktop-only">
                    <Link to="/home">Home</Link>
                    <Link to="/reserve">Reserve a Vehicle</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/requirements">Requirements</Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="hamburger-wrapper mobile-only">
                    <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={24} direction="right" duration={0.4} />
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    );
}
