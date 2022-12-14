import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <header>
        <nav className="nav extra">
            <div className="container">
                <div className="main">
                    <div className="logo">
                        <img src="images/logo-nav.png" alt="logo"/>
                    </div>
                    <div className="menu">
                        <ul>
                        <li><link to ="/">Home</link></li>
                        <li><link to ="/about">About Us</link></li>
                        <li><link to ="/features">Features</link></li>
                        <li><link to ="/pricing">Pricing</link></li>
                        <li><link to ="/faq">Faq</link></li>
                        <li><link to ="/blog">Blog</link></li>
                        </ul>
                        <a className="contact-us" href="contact.html">Contact us</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar