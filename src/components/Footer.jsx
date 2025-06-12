// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import {
    Facebook,
    Instagram,
    Phone,
    MessageCircleMore as Whatsapp
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top-section">
                <div className="footer-top">
                    <div className="footer-logo">NDAH AUTO</div>
                    <div className="footer-socials">
                        <a href="#"><Facebook className="facebook" /></a>
                        <a href="#"><Instagram className="instagram" /></a>
                        <a href="#"><Whatsapp className="whatsapp" /></a>
                        <a href="tel:+237678708403"><Phone className="phone" /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <Link to="/home">Home</Link>
                    <Link to="/reserve">Reserve a Vehicle</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/requirements">Requirements</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ndah Auto. All Rights Reserved.</p>
            </div>
        </footer>
    );
}