import React from "react";

/*example: traditional named function*/
function ucaseName(name) {
    return name.toUpperCase();
}

//example: no parameters for the arrow function
//automatically returns the value
const noParams = () => 'no params sent into this function';
//example: single line arrow function with 1 parameter called name;
const arrowUcaseName = name => name.toUpperCase();

//example: multi line arrow function
const arrowUcaseName2 = arrowUcaseName2 => {
    return arrowUcaseName2.toUpperCase();
};

//example: multi parameter arrow function
const arrowMultiParameters = (param1, param2) =>{
    const s = `You passed in ${param1} and ${param2}`;
    return s;
};

export function testArrowFunctions(){
    debugger;
    console.log(noParams());
    console.log(ucaseName('function ucaseName'));
    console.log(arrowUcaseName('arrowUcaseName1'));
    console.log(arrowUcaseName2('arrowUcaseName2'));
    console.log(arrowMultiParameters('this', 'that'));
}

const exampleArrowFunction = () => {
    const s0 = <h1>noParams: {noParams()}</h1>;
    const s1 = <h1>uCase: {ucaseName('function ucaseName')}</h1>;
    const s2 = <h1>arrowUCase1: {arrowUcaseName('arrowUcaseName1')}</h1>;
    const s3 = <h1>arrowUCase2: {arrowUcaseName2('arrowUcaseName2')}</h1>;
    const s4 = <h1>arrowMultiParam: {arrowMultiParameters('this', 'that')}</h1>;
    const returnVal = (
        <React.Fragment> {s0} {s1} {s2} { s3 } {s4}  </React.Fragment>
    );
    return returnVal;
};

export default exampleArrowFunction;