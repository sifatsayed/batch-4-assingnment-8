import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       <div className="footer-background">
           <footer className='footer'>
               <div className="footer-container">
                   <div className="footer-column">
                       <h3>Company</h3>
                       <p>About us</p>
                       <p>Our Services</p>
                       <p>Privacy Policy</p>
                       <p>Other Programme</p>
                   </div>
                   <div className="footer-column">
                       <h3>Get Help</h3>
                       <p>FAQ</p>
                       <p>Terms And Condition</p>
                       <p>Our Partner</p>
                       <p>Other Project</p>
                   </div>
                   <div className="footer-column">
                       <h3>Online Coaching</h3>
                       <p>Payment System</p>
                       <p>Status</p>
                       <p>Lifetime Access</p>
                       <p>Other Thing</p>
                   </div>
                   <div className="footer-column">
                       <h3>Follow Us</h3>
                       <p>Facebook</p>
                       <p>Instagram</p>
                       <p>Twitter</p>
                       <p>Linkedin</p>
                   </div>
               </div>
           </footer>
       </div>
    );
};

export default Footer;