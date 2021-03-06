import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'altaf',
            password: '',
            isLoginFailed: undefined,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this)
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.isLoginFailed && <div className="alert alert-warning">Invalid Credential</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    Username <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    loginClicked() {
        if (this.state.username === 'altaf' && this.state.password === 'java') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({ isLoginFailed: false, showSuccessMessage: true })
        } else {
            this.setState({ isLoginFailed: true, showSuccessMessage: false })
        }
    }
}
export default LoginComponent