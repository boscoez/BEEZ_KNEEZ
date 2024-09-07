import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DateDisplay from '../components/DateDisplay';
import { Helmet } from 'react-helmet';


const Biography: React.FC = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Biography</title>
            </Helmet>
            <Header title="Biography" />
            <DateDisplay />
            <div className="content">
                <h2 style={{ fontSize: '3em', padding: '0px', textAlign: 'center', fontFamily: ' courier '}}>-</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Biography;