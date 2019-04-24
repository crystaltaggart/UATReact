import React, {Component} from "react";

class RedirectExample extends Component{
    handleClick = () => {
        //add url to history for back button
        this.props.history.push('/hobbies');
    };
    render() {
        return(<button onClick={this.handleClick}>Go Redirect</button>);
    }
}

export default RedirectExample;