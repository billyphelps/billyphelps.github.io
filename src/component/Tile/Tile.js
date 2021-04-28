import React from "react";
import './Tile.css';

class Tile extends React.Component {

    constructor(props) {
        super(props);

        if(props.largeTile){
            this.state = {
                class: 'tile'
            }
        } else {
            this.state = {
                class: 'small-tile'
            }
        }
    }

    render() {
        return (
            <div class={this.state.class}>
                <img src={this.props.imgSrc}/>
                <a href={this.props.destination}>
                    <div class="tile-overlay">
                        <div class="tile-text">{this.props.label}</div>
                    </div>
                </a>
            </div>
        ); 
    }
}

export default Tile;
