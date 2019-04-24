import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeClass from './Components/WelcomeClass';
import WelcomeFunction from './Components/WelcomeFunction';
import ClassNameExample from "./Components/ClassNameExample";

class App extends Component {
  render() {
    return (
        //fragment parent element
        <Fragment>
            {/*render the functions:*/}
          <WelcomeFunction name="Student 1"/>
          <WelcomeFunction name="Student 2"/>
            {/*render the classes*/}
          <WelcomeClass name="Student 3"/>
          <WelcomeClass name="Student 4"/>
            <ClassNameExample classSetting="highlight" textValue="Highlighted Class Example"/>
            <ClassNameExample classSetting="error" textValue="Error Class Example"/>
        </Fragment>
    );
  }
}

export default App;
