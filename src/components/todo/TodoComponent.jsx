import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
    }
    render() {
        return (
            <div>
                <h1>List of Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message} </div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoComponent(todo.id)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.refreshTodos();
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    deleteTodoComponent = (id) => {
        let username = AuthenticationService.getLoggedInUserName();
        console.log(id, "   ", username)
        TodoDataService.executeDeleteTodo(username, id)
            .then(response => {
                this.setState({ message: `Delete of todo ${id} successful` })
                this.refreshTodos()
            })
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.executeGetAllTodos(username)
            .then(response => {
                this.setState({
                    todos: response.data,
                })
            })
    }
}
export default TodoComponent