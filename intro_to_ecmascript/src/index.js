import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function testingScope(){
    var date1 = new Date();
    let date2 = new Date();

    for (var i = 0; i<5000; i++){
        date1 = new Date();
    }
    for (let x=0; x<5000; x++){
        date2=new Date();
    }
    console.log(i);
    /*doesn't compile:*/
    //console.log(x);
    console.log(date1);
    console.log(date2);
}

testingScope();

function testingChanges(){
    const count = 5;
    /*breaks the compiler:*/
    //count = 'a';
    console.log(count);
}

testingChanges();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
