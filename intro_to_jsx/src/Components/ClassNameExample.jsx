import React from "react";

const ClassNameExample = (props) => {
    return <h1 className={props.classSetting}>{props.textValue}</h1>;
};

export default ClassNameExample;