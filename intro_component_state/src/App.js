import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StateExample from "./Components/StateExample";
import StateExampleWrong from "./Components/StateUpdateWrong";
import StateExampleCorrect from "./Components/StateUpdateCorrect";
import LifecycleExample from "./Components/LifecycleExample";
import CardContainer from "./Components/UmountExample";

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <StateExample/>
            <StateExample count={5}/>
          <StateExampleWrong/>
          <StateExampleCorrect/>
          <LifecycleExample/>
          <CardContainer/>
        </React.Fragment>

    );
  }
}

export default App;
