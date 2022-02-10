import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
       <div className="header">
           <div className="header-container">
               <img src={logo} alt="" />
               <div className="header-links">
                   <ul>
                       <li><Link  to="/home">Home</Link></li>
                       <li><Link  to="/about">About</Link></li>
                       <li><Link  to="/service">Service</Link></li>
                       <li><Link  to="/blog">Blog</Link></li>
                   </ul>
               </div>
           </div>
       </div>
    );
};

export default Header;