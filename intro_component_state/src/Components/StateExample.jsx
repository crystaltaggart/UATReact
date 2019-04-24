import React, {Component} from "react";

class StateExample extends Component {
    constructor(props){
        super(props);
        if(props.count)
            this.state.count=props.count;
    }
    state = {
        count:0,
        dt: new Date()
    };

    render() {
        return (
            <div>
                <hr/>
                <h1>State Example:</h1>
                <span>Count: {this.state.count}</span><br/>
                <span>DateTime: {this.state.dt.toISOString()}</span>
            </div>
        )
    }
}

export default StateExample;