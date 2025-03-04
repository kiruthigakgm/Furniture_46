import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="Logo" className="footer-logo" />

            <p>Stay Connected with Us!Explore our extensive range of furnitures designed to get home beautiful.</p>
            
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9842087572</li>
                <li>prakashfurniture98@gmail.com</li>
            </ul>
        </div>
      </div>
      
      
    </div>
  )
}

export default Footer
