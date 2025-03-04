import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">Get in touch with us for premium furniture and excellent customer service.</p>
      <div className="contact-image-container">
        <img src="/play_store.png" alt="Contact Us" className="contact-image" />
      </div>
      <div className="contact-details">
        <p><strong>Address:</strong> 5/5,B/C,P.S.G.Complex, Majeeth Street,Kangayam-638701</p>
        <p><strong>Phone:</strong> 9842087572</p>
        <p><strong>Email:</strong> prakashfurniture98@gmail.com</p>
        <p><strong>Working Hours:</strong> Mon - Sun, 9:00 AM - 9:45 PM</p>
      </div>
    </motion.div>
  );
};

export default Contact;
