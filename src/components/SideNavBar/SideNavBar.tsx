import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.sass'; // Import the SASS file for styling

interface SideNavBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`side-nav-bar ${isOpen ? 'open' : ''}`}>
            <button onClick={onClose} className="close-btn">&times;</button>
            <div className="icon-area">
                <img src="../logo192.png" alt="Icon" className='spin-icon'/>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" onClick={onClose}>Home</Link></li>
                    <li><Link to="/biography" onClick={onClose}>Biography</Link></li>
                    <li><Link to="/education" onClick={onClose}>Education</Link></li>
                    <li><Link to="/showcase" onClick={onClose}>Showcase</Link></li>
                    <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNavBar;