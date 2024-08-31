import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DateDisplay from '../components/DateDisplay';

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">  <DateDisplay />
                <h2 style={{ fontSize: '3em', textAlign: 'center', fontFamily: ' '}}>Welcome !</h2>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;