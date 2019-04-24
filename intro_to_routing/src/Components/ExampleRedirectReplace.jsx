import React, {Component} from "react";
import Redirect from './Redirect';
import Replace from './Replace';



class ExampleRedirectReplace extends Component{
    render(){
        return(
        <div>
            <Replace history={this.props.history}/>
            <Redirect history={this.props.history}/>
        </div>
    )
    }
}

export default ExampleRedirectReplace;