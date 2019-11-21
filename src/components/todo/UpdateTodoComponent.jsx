import React, { Component } from 'react';
class UpdateTodoComponent extends Component {
    render() {
        return (
            <div>UpdateTodoComponent {this.props.match.params.id}</div>
        )
    }
}

export default UpdateTodoComponent;