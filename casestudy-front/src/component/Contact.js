import React from 'react';
import { Link } from 'react-router-dom'; 
import './css/Contact.css'; 
const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions or need assistance, feel free to reach out!</p>
            <div className="contact-link">
                <h2>Send Us a Message</h2>
                <Link to="/Contactform" className="send-message-link"> Click here to send us a message </Link>
            </div>
            <h2>Phone</h2>
            <p>+123 456 7890</p>
            <h2>Email</h2>
            <p>info@amazecarehospital.com</p>
            <h2>Address</h2>
            <p>123 Health St, Wellness City, HC 12345</p>
            <h2>Follow Us</h2>
            <p>
                <a href="https://facebook.com/amazecarehospital" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://twitter.com/amazecarehospital" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://instagram.com/amazecarehospital" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
        </div>
    );
};

export default Contact;
