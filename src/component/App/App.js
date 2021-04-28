import React from "react";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import Tile from '../Tile/Tile';
import './App.css';

import BAEImg from './media/BAE_Tile.png';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div class="container">
          <Tile largeTile={true} imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile largeTile={true} imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile largeTile={true} imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile largeTile={true} imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile largeTile={true} imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
          <Tile imgSrc={BAEImg} destination='' label='BAE Systems'></Tile>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
