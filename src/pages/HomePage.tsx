import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DateDisplay from '../components/DateDisplay';
import { Helmet } from 'react-helmet';
import '../components/HomePage/_homepage.sass';

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header title="Welcome" />
            <DateDisplay />
            <div className="content">
                <ServicesSection />
            </div>
            <Footer />
        </div>
    );
};

const ServicesSection: React.FC = () => (
    <section className="services">
        <h2>My Services</h2>
        <div className="service-cards">
            <ServiceCard title="Web Development" description="Building responsive and modern web applications..." />
            <ServiceCard title="Mobile Development" description="Creating mobile applications for Android and iOS..." />
            <ServiceCard title="Generative AI Development" description="Designing user-friendly and aesthetic interfaces..." />
            <ServiceCard title="Cybersecurity Risk Assessment" description="Designing user-friendly and aesthetic interfaces..." />
            <ServiceCard title="UI/UX Design" description="Designing user-friendly and aesthetic interfaces..." />
        </div>
    </section>
);

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="service-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="learn-more-button">Learn More</button>
    </div>
);

export default HomePage;
