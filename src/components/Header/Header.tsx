import React, { useState } from 'react';
import HamburgerMenuButton from '../HamburgerMenuButton/HamburgerMenuButton';
import SideNavBar from '../SideNavBar/SideNavBar';
import './_header.sass'; // Import the SASS file for styling

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
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
                <div className="header-left">
                    <HamburgerMenuButton onClick={handleNavOpen} />
                </div>
                <div className="header-center">
                    <h1 className="header-title">{title}</h1>
                </div>
                <div className="header-right">
                    <img src="/logo192.png" alt="Logo" className="spinning-logo" />
                </div>
            </header>
            <SideNavBar isOpen={isNavOpen} onClose={handleNavClose} />
        </>
    );
};

export default Header;