import React from "react";
import './HeaderLink.css';

class HeaderLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li><a class="menulink" href={this.props.destination}>{this.props.label}</a></li>
        ); 
    }
}

export default HeaderLink;
