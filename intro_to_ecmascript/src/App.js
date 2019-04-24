import React, { Component } from 'react';
import './App.css';
import Dog from './Classes/Dog';
import {testArrowFunctions} from  './Examples/ArrowFunctions';
import {testMap} from './Examples/MapFilter';
import {testSpreading} from "./Examples/SpreadExample";
import {testThis} from './Examples/ThisKeyword';
import {testDefaults} from './Examples/DefaultFunctionVals';
import {testTemplateStrings} from './Examples/TemplateStrings';
import {testDogs} from "./Classes/Dogs";
import {testDestructuring} from "./Examples/Destructuring";
import TestClassA, {TestClassC, TestFunctionA} from "./Examples/DefaultNamedExample";
//Default -> import ... from 'fileLocation';
//Named -> import {...} from 'fileLocation';


class App extends Component {

   testDog (){
     debugger;
        let dog = new Dog('Sparky', 'mutt', 'image.jpg');
        dog.name='Sparky Jr.';
        console.log(dog.name);
    }
    testClasses(){
       let tcA = new TestClassA();
       //let tcB = new TestClassB();
       let tcC = new TestClassC();
       let funcAValue = TestFunctionA();
       //let funcBValue = TestFunctionB();
       let funcCValue = tcC.nowPublic();
    }

  render() {
    return (
      <div className="App">
          {testArrowFunctions()}
          {testSpreading()}
          {testDestructuring()}
          {testThis()}
          {testDefaults()}
          {testMap()}
          {testTemplateStrings()}
          {this.testDog()}
          {testDogs()}
          {this.testClasses()}
      </div>
    );
  }
}

export default App;
