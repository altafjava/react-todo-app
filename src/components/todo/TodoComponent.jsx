import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos: []
        }
    }
    render() {
        console.log('render')
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
    componentDidMount() {
        console.log('componentDidMount')
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.executeGetAllTodos(username)
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        console.log('nextProps=', nextProps)
        console.log('nextState=', nextState)
        console.log('nextContext=', nextContext)
        return true
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}
export default TodoComponent