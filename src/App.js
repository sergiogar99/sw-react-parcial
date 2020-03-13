import React, { Component } from "react";
import "./Components/Styles.css"
import Data from "./assets/swapi.co.json";
import Body from "./Components/Body";


class App extends Component {
  state = {
    
    data: { ...Data }
  };

  render() {

    const filteredData = this.state;
    
    return (
      <div className="App">
        <div className="content">

          <div className="title"> THE STAR WARS API </div>
      
          <Body data={this.state} />

        </div>

      </div>
    );
  }
}

export default App;
