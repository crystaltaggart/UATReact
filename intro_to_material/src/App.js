import React, { Component } from 'react';
import './App.css';
import GridExample from "./components/GridExample";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import UsingTheme from "./components/UsingTheme";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
        //primary and secondary work without setting up the 'main' value
        //for additional colors define these explicitly
        tertiary: {
            main: orange[500],
        },
    },
    //or define another object to store it in
    contrastingColors: {
      main: green[900],
        contrast: green[50],
    }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <UsingTheme/>
          <GridExample/>
        </MuiThemeProvider>
    );
  }
}

export default App;
