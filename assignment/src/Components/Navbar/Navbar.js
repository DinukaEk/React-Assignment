import React from 'react';
import "./Navbar.css"
import logo1 from "../Images/Logo1.png";


function Navbar (){
    return (
        <nav>
            <a href=' '>
                <img src={logo1} height={40} alt=""/>
            </a>
            <div>
                <ul id="navbar">
                    <li><a href=' '>Products</a></li>
                    <li><a href=' '>Solutions</a></li>
                    <li><a href=' '>Resource</a></li>
                    <li><a href=' '>Enterprise</a></li>
                    <li><a href=' '>Pricing</a></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <input type="button" className="button1" value="Sign Up" />
            </div>
        </nav>
    );
}

export default Navbar;