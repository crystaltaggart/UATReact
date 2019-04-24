import React, {Component} from "react";

class PropsExample extends Component {
    state = {};

    render() {
        const title = this.props.title;
        return (
            <h1>{title}</h1>
        )
    }
}

export default PropsExample;