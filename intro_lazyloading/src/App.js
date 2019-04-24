import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import IsLazy from "./Components/IsLazy";
import NotLazy from "./Components/NotLazy";

class App extends Component {
  render() {
    return (
      <div>
          <Suspense fallback={<div>Loading Regular...</div>}>
              <NotLazy/>
          </Suspense>
          <Suspense fallback={<div>Loading Lazy...</div>}>
              <IsLazy/>
          </Suspense>
      </div>
    );
  }
}

export default App;
