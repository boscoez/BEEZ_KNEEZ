import React from 'react';
import './HamburgerMenuButton'; // Import the SASS file for styling

interface HamburgerMenuButtonProps {
    onClick: () => void;
}

const HamburgerMenuButton: React.FC<HamburgerMenuButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="hamburger-menu-button">
            &#9776;
        </button>
    );
};

export default HamburgerMenuButton;