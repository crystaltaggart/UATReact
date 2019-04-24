import React, {Component} from "react";
import auth from "./services/authService";

class Login extends Component {
    state = {
        formValues:{
            email:"demo_user@askatlas.ai",
            password:"@um^8tHqgE7Xena"},
        /*email:'',password:'',},*/
    };
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = prop => event => {
        const formValues = { ...this.state.formValues};
        formValues[prop]=event.target.value;
        this.setState({formValues});
    };

    handleSubmit = async() => {
        debugger;
        //run the login function
        await auth.login(this.state.formValues.email, this.state.formValues.password);
        debugger;
        //navigate to the authenticated screen
        this.props.history.replace('/');

    };

    render() {
        const {user } = this.props;
        return (
            <form>
                <label>
                    Email:
                    <input type="text" value={this.state.formValues.email} onChange={this.handleChange('email')} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.formValues.email} onChange={this.handleChange('password')} />
                </label>
                <br/><br/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
        )
    }
}

export default Login;