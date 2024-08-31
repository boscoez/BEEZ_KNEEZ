import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReduxProvider from './ReduxProvider';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Home from './pages/HomePage';
import Biography from './pages/Biography';
import Education from './pages/Education';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
import './styles/main.sass';

const App: React.FC = () => {
    const [isNavOpen, setNavOpen] = React.useState(false);

    const handleNavClose = () => {
        setNavOpen(false);
    };

    return (
        <ReduxProvider>
            <div className="app">
                <Router>
                    <SideNavBar isOpen={isNavOpen} onClose={handleNavClose} />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/biography" element={<Biography />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/showcase" element={<Showcase />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<div>404 Not Found</div>} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </ReduxProvider>
    );
};

export default App;