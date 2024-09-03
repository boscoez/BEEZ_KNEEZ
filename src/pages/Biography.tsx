import React from 'react';
import Header from '../components/Header/Header';
import DateDisplay from '../components/DateDisplay';
import { Helmet } from 'react-helmet';

const Biography: React.FC = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Biography</title>
            </Helmet>
            <Header title="Biography" />
            <div className="content">
                <DateDisplay />
                <h2 style={{ fontSize: '3em', padding: '0px', textAlign: 'center', fontFamily: ' courier '}}>Biography</h2>
            </div>
        </div>
    );
};

export default Biography;