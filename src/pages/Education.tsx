import React from 'react';
import Header from '../components/Header/Header';
import DateDisplay from '../components/DateDisplay';
import { Helmet } from 'react-helmet';

const Education: React.FC = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Education</title>
            </Helmet>
            <Header title="Education" />
            <div className="content">
                <DateDisplay />
                <h2 style={{ fontSize: '3em', padding: '0px', textAlign: 'center', fontFamily: ' courier '}}>Education</h2>
            </div>
        </div>
    );
};

export default Education;