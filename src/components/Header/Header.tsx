import React, { useState } from 'react';
import HamburgerMenuButton from '../HamburgerMenuButton/HamburgerMenuButton';
import SideNavBar from '../SideNavBar/SideNavBar';
import './_header.sass'; // Import the SASS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavOpen = () => {
        setIsNavOpen(true);
    };

    const handleNavClose = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <header className="header">
                <HamburgerMenuButton onClick={handleNavOpen} />
                <FontAwesomeIcon icon={faHome} className="home-icon" />
                <img src="/logo192.png" alt="Logo" className="spinning-logo" />
            </header>
            <SideNavBar isOpen={isNavOpen} onClose={handleNavClose} />
        </>
    );
};

export default Header;