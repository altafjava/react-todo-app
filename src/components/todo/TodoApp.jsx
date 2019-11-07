import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component {
    render() {
        console.log("todoApp render=");
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" component={TodoComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log("isUserLoggedIn=" + isUserLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://altafjava.blogspot.com" className="navbar-brand">AltafJava</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/altafjava">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
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
class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link></div>
            </>
        )
    }
}
class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: "My Desc", done: false, targetDate: new Date() },
                { id: 2, description: "Playing with Java", done: false, targetDate: new Date() },
                { id: 3, description: "Entertaining with React", done: false, targetDate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>List of Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
class FooterComponent extends Component {
    render() {
        return (
            <div className="footer">
                <span className="text-muted">All rights reserved 2019 @AltafJava</span>
            </div>
        )
    }
}
class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out now</h1>
                <div className="container">Thanks for using our application</div>
            </>
        )
    }
}
function ErrorComponent() {
    return (
        <div>Something went wrong</div>
    );

}
export default TodoApp