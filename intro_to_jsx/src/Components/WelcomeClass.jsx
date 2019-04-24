import React, {Component} from "react";

class WelcomeClass extends Component {
    state = {};

    render() {
        return (
            <h1>Welcome to the class {this.props.name}</h1>
        )
    }
}

export default WelcomeClass;