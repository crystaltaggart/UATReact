import React from "react";

function timer(){
    /*making this wait a while to load....*/
    for(let i=0;i<10000;i++){
        console.log(i);
    }
    return <h1>Lazy Example</h1>;
}

const LazyExample = () => {
    console.log('Lazy Started');
    return timer();
};

export default LazyExample;