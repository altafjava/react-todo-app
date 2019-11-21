import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                // { id: 1, description: "My Desc", done: false, targetDate: new Date() },
                // { id: 2, description: "Playing with Java", done: false, targetDate: new Date() },
                // { id: 3, description: "Entertaining with React", done: false, targetDate: new Date() }
            ]
        }
    }
    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.executeGetAllTodos(username)
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
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
export default TodoComponent