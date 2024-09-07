import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DateDisplay from '../components/DateDisplay';
import { Helmet } from 'react-helmet';
import '../styles/_showcase.sass';

const Showcase: React.FC = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Showcase</title>
            </Helmet>
            <Header title="Showcase" />
            <DateDisplay />
            <div className="content">
              <ProjectSection/>
            </div>
            <Footer />
        </div>
    );
};


const ProjectSection: React.FC = () => (
    <section className="projects">
        <h2>My Projects and Special Interests</h2>
        <div className="project-cards">
            <ProjectCard title="Discrete Mathematics for Computer Science" description="Building responsive and modern web applications..." />
            <ProjectCard title="Large Language Models - (LLMs)" description="Creating mobile applications for Android and iOS..." />
            <ProjectCard title="Generative AI Development" description="Designing user-friendly and aesthetic interfaces..." />
            <ProjectCard title="Cybersecurity Risk Assessment" description="Designing user-friendly and aesthetic interfaces..." />
            <ProjectCard title="UI/UX Design" description="Designing user-friendly and aesthetic interfaces..." />
        </div>
    </section>
);

const ProjectCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="learn-more-button">Learn More</button>
    </div>
);
export default Showcase;