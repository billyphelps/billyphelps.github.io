import React from "react";
import Logo from "./Logo/Logo";
import HeaderLink from "./HeaderLink/HeaderLink";
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="header">
                <Logo></Logo>
                <ul class="nav">
                    <HeaderLink destination='Portfolio.html' label='Portfolio'></HeaderLink>
                    <HeaderLink destination='Timeline.html' label='About Me'></HeaderLink>
                </ul>
            </header>
        ); 
    }
}

export default Header;
