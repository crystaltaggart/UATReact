import React, { Component } from 'react';
import logo from './logo.svg';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {


  render() {

    return (
        <div className="App">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
            <h1>Some text goes here...</h1>
            <Typography variant={"h1"}>Other text goes here</Typography>
        </div>

    );
  }
}

export default App;
