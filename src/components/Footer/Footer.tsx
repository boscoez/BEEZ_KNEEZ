import React from 'react';
import './_footer.sass'; // Import the SASS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} D.S. Lindholm. All rights reserved.</p>
        </footer>
    );
};

export default Footer;