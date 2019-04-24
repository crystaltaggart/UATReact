import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Hobbies from "./Components/Hobbies";
import Projects from './Components/Projects';
import Home from './Components/Home';
import ExampleRedirectReplace from './Components/ExampleRedirectReplace';
import ReloadExample from "./Components/Reload";
import PropsExample from "./Components/PropsExample";
import RouteParams from "./Components/RouteParams";

class App extends Component {
  render() {
    return (
     <div>
         <div><h1>Some Header Text Here</h1></div>
       <div className="pageContent">
         <Switch>
           <Route path="/projects" component={Projects}/>
             <Route path="/hobbies/:id" component={RouteParams}/>
           <Route path="/hobbies" component={Hobbies}/>
             <Route path="/programmatic" component={ExampleRedirectReplace}/>
             <Route path="/reload" component={ReloadExample}/>
             <Route path="/reload2" component={ReloadExample}/>
             <Route path="/props" render={() =><PropsExample title={"Props Title"}/>}/>
             <Route path="/props2" render={(props) =><PropsExample title={"Props Title"} {...props}/>}/>
           <Route path="/" component={Home}/>


         </Switch>
       </div>
     </div>
    );
  }
}

export default App;
