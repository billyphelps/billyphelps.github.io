import React from "react";
import './FooterItem.css';

class FooterItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.destination} target="_blank">
                <img src={this.props.imgSrc} class="tile-image"/>
            </a>
        ); 
    }
}

export default FooterItem;
