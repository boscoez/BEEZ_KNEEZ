import React from 'react';
import Header from '../components/Header/Header';
import DateDisplay from '../components/DateDisplay';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header title="Home" />
            <div className="content">
                <DateDisplay />
                <h2 style={{ fontSize: '3em', textAlign: 'center', fontFamily: 'courier'}}>Welcome !</h2>
            </div>
        </div>
    );
};

export default HomePage;