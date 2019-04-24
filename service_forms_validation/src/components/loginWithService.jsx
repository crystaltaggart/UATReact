import React, {Component} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

class Login extends Component {
    state ={
        account:{ email:'', pw:'',}, //stores form values
        errors:{}, //stores error messages if they occur
    };

    //see what happens when you comment out this method
    /*rename the event.currentTarget value to input as it's passed into the method*/
    handleChange = ({currentTarget:input}) => {
        //get the current state values for the account object
        const account = {...this.state.account};
        //set the current state value for the current field name
        account[input.name]=input.value;
        //update the state object
        this.setState({account});
    };
    validate=() =>{
        const errors ={};
        const {account} = this.state;
        if (account.email.trim() ==='')
            errors.email = 'Email is required.';
        if (account.pw.trim() ==='')
            errors.pw='Password is required.';
        return Object.keys(errors).length>0? errors : null;
    };
    hasError =(fieldName) => {
        return this.state.errors[fieldName].length>0;
    };

    /*version 2: posting asynchronously*/
    handleSubmit = async() => {
        debugger;
        if (this.validate()) {
            await auth.login(this.state.formValues.email, this.state.formValues.password);
            this.props.history.replace('/');
        }
    } ;


render() {
    const { account,errors } = this.state;
        return (

                <div>
                    <TextField
                        label={'Email'}
                        id={'email'}
                        name={'email'}
                        autoFocus
                        helperText={'Enter Your Email Address'}
                        margin={'normal'}
                        value={account.email}
                        onChange={this.handleChange}
                        error={this.hasError('email')}
                    />
                    <br/>
                    <TextField
                        label={'Password'}
                        id={'pw'}
                        name={'pw'}
                        type={'password'}
                        autoComplete={'current-password'}
                        margin={'normal'}
                        value={account.pw}
                        onChange={this.handleChange}
                        error={this.hasError('pw')}
                    />

                    <br/>
                    <Button id={'submit'} name={'submit'} variant={'contained'} color={'primary'} onClick={this.handleSubmit}>Submit</Button>

                </div>

        )
    }
};

export default Login;