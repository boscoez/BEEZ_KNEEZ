import React from 'react';
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
            <img src="/path/to/your/icon.png" alt="Icon" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#biography">Biography</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#showcase">Showcase</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNavBar;