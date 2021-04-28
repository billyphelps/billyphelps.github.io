import React from "react";
import logo from "./logo.png";
import './Logo.css';

class Logo extends React.Component {
    render() {
        return (
            <span class="logo">
                <a href="index.html">
                    <img src={logo}/>
                </a>
            </span>
        ); 
    }
}

export default Logo;
