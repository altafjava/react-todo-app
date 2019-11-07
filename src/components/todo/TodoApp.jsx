import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todo" component={TodoComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                    </>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
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
                Username <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClicked() {
        if (this.state.username === 'altaf' && this.state.password === 'java') {
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({ isLoginFailed: false, showSuccessMessage: true })
        } else {
            this.setState({ isLoginFailed: true, showSuccessMessage: false })
        }
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todo">here</Link></div>
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
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
function ErrorComponent() {
    return (
        <div>Something went wrong</div>
    );

}

export default TodoApp