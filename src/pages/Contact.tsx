import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DateDisplay from '../components/DateDisplay';
import '../styles/_contact.sass'; // Import the CSS file

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData); // Log form data for debugging
        emailjs.send(
            'service_u4wsgbr', // Your EmailJS service ID
            'template_5fb55os', // Your EmailJS template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            },
            'HcluKvNoKzjbn4YPS' // Your EmailJS user ID
        ).then((response) => {
            console.log('EmailJS Response:', response); // Log response for debugging
            alert('Message sent successfully!');
        }).catch((err) => {
            console.error('EmailJS Error:', err); // Log error for debugging
            alert('Failed to send the message. Please try again.');
        });
    };

    return (
        <div className="container">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Header title="Contact" />
            <div className="content">
                <DateDisplay />
                <h2 style={{ fontSize: '3em', padding: '0px', textAlign: 'center', fontFamily: 'courier' }}>Let&apos;s Connect.</h2>
                <div className="form-container">
                    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                            />
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', height: '150px', padding: '10px', margin: '20px 0' }}
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;