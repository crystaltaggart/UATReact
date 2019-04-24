import React, { Component } from 'react';
import logo from './logo.svg';
import {testJson} from "./Examples/ExampleJson";
import './App.css';

class App extends Component {
  //state: used to pass properties to a component
  state = {userName: 'Crystal'};
  //render(): creates React Element
  render() {
      {testJson()}
    return (
      <div className="App">
        <header className="App-header"> <img src={logo} className="App-logo" alt="logo" />
            {/*render the state*/}
          <p>Hi {this.state.userName}</p>
        </header>
      </div>
    );
  }
}
//export makes this 'public'
export default App;
