import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="about-title">About Our Furniture Shop</h1>
      <p className="about-text">
        Welcome to our prakash furniture shop! We offer a wide range of high-quality, stylish, and durable furniture 
        to enhance your living and workspace. Our mission is to provide comfort, elegance, and functionality 
        with our uniquely designed pieces.
      </p>
      <motion.img 
        src="/search_icon.png" 
        alt="Furniture Store" 
        className="about-image"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

export default About;
