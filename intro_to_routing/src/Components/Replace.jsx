import React, {Component} from "react";

class ReplaceExample extends Component{
    handleClick = () => {
        //replace current URL
        this.props.history.replace("/projects");
    };
    render() {
        return(<button onClick={this.handleClick}>Go Replace </button>);
    }
}

export default ReplaceExample;