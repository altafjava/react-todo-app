import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
}

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
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render() {
        return (
            <div>
                {/* <ShowSuccessOrErrorMessageComponent isLoginSuccess={this.state.isLoginSuccess} /> */}
                {this.state.isLoginFailed && <div>Invalid Credential</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/* Username <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                Password <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} /> */}
                Username <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    // handleUsernameChange(event) {
    //     console.log(event.target.value)
    //     this.setState({ username: event.target.value })
    // }
    // handlePasswordChange(event) {
    //     console.log(event.target.value)
    //     this.setState({ password: event.target.value })
    // }

    loginClicked() {
        console.log(this.state)
        if (this.state.username === 'altaf' && this.state.password === 'java') {
            this.setState({ isLoginFailed: false, showSuccessMessage: true })
        } else {
            this.setState({ isLoginFailed: true, showSuccessMessage: false })
        }
    }
}
// function ShowSuccessOrErrorMessageComponent(props) {
//     if (props.isLoginSuccess != undefined) {
//         if (props.isLoginSuccess) {
//             return <div>Login Successful</div>
//         } else {
//             return <div>Invalid Credential</div>
//         }
//     }
//     return null
// }

export default TodoApp