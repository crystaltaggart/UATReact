import React, {Component} from "react";

class RouteParams extends Component {
    state = {};

    render() {
        return (
            <h1>The hobby id selected was {this.props.match.params.id}</h1>
        )
    }
}

export default RouteParams;