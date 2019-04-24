import React, {Component, Fragment} from "react";

class LifecycleExample extends Component {
    state = {count:0};
    constructor(props){
        //need to call super - otherwise no properties on object are available
        super(props);
        console.log('constructor called');
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    handleIncrement(){
        //set the state using the Component method setState:
        this.setState({count:this.state.count+1});
    };
    componentDidUnMount(){
        console.log('componentDidUnmount');
    }

    render() {
        console.log('render called');
        return (
            <Fragment>
                <h1>Lifecycle Example:</h1>
                <span>Count: {this.state.count}</span><br/>
                <button onClick={this.handleIncrement}>Update Count & Time</button>
            </Fragment>
        )
    }
}

export default LifecycleExample;