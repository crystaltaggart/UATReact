import React from 'react';
import {Route} from 'react-router-dom';
import Anonymous from './components/anonymous';
import Home from './components/home';
import Login from './components/login';
import './App.css';
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  return (
    <div>
      <Route path="/anonymous" component={Anonymous}/>
       <Route path="/login" component={Login}/>

    </div>
  );
}

export default App;
