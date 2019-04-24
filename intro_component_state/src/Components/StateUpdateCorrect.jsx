import React, {Component} from "react";

class StateExampleCorrect extends Component {
    constructor(props){
        super(props);
        if(props.count)
            this.state.count=props.count;
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    state = {
        count:0,
        dt: new Date()
    };

    handleIncrement(){
        //set the state using the Component method setState:
        this.setState({count:this.state.count+1,dt:new Date()});
    };

    render() {
        return (
            <div>
                <hr/>
                <h1>State Example (Correct):</h1>
                <span>Count: {this.state.count}</span><br/>
                <span>DateTime: {this.state.dt.toISOString()}</span><br/>
                <button onClick={this.handleIncrement}>Update Count & Time</button>
            </div>
        )
    }
}

export default StateExampleCorrect;