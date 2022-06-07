import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Arman</div>
                <span>toogle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testomonials</li>
                    </ul>
                </div>
                <div className="button n-button">
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Navbar