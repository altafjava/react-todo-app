import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Route path="/" Component={LoginComponent} />
                        {/* <Route path="/login" Component={LoginComponent} /> */}
                        {/* <Route path="/welcome" Component={WelcomeComponent} /> */}
                    </>
                </Router>
                <LoginComponent />
                {/* <WelcomeComponent /> */}
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
        this.loginClicked = this.loginClicked.bind(this)
    }

    render() {
        return (
            <div>
                {this.state.isLoginFailed && <div>Invalid Credential</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClicked() {
        console.log(this.state)
        if (this.state.username === 'altaf' && this.state.password === 'java') {
            this.setState({ isLoginFailed: false, showSuccessMessage: true })
        } else {
            this.setState({ isLoginFailed: true, showSuccessMessage: false })
        }
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome to AltafJava</div>
    }
}

export default TodoApp