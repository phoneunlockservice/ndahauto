// src/components/Sidebar.jsx
import React from 'react';
import {
  Facebook,
  Instagram,
  Phone,
  MessageCircleMore as Whatsapp,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div className={`sidebar-backdrop ${isOpen ? 'show' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <div className="nav-links-container"><Link to="/home" onClick={onClose}>Home</Link></div>
          <div className='nav-links-container'><Link to="/reserve" onClick={onClose}>Reserve a Vehicle</Link>
          </div>
          <div className='nav-links-container'><Link to="/gallery" onClick={onClose}>Gallery</Link></div>
          <div className='nav-links-container'><Link to="/requirements" onClick={onClose}>Requirements</Link></div>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-logo">NDAH AUTO</div>
          <div className="sidebar-socials">
            <a href="#" title='keep in touch'><Facebook className="facebook" /></a>
            <a href="#" title='insta chat'><Instagram className="instagram" /></a>
            <a href="#" title='whatsapp'><Whatsapp className="whatsapp" /></a>
            <a href="tel:+237678708403" title='call us'><Phone className="phone" /></a>
            <a href="mailto:hello@ndahauto" title='email'><Mail className="email" /></a>
          </div>
        </div>
      </aside>
    </>
  );
}
