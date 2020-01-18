import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js';
class UpdateTodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount() {
        if (this.state.id === 0) {
            return
        }
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.executeGetTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
            }))

    }

    render() {
        let { description, targetDate } = this.state
        return (
            <div>
                <h1>Todo Update Form</h1>
                <div className="container">
                    <Formik initialValues={{ description, targetDate }} onSubmit={this.onSubmit} validate={this.validate} validateOnChange={false} validateOnBlur={false} enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" className="alert alert-warning" component="div" />
                                    <ErrorMessage name="targetDate" className='alert alert-warning' component='div' />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>

        )
    }
    onSubmit = (values) => {
        let username = AuthenticationService.getLoggedInUserName()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: moment(values.targetDate).format("YYYY-MM-DD")
        }
        let id = this.state.id;
        console.log('this.state.id=', id)
        if (id == 0) {
            console.log('post')
            TodoDataService.executeCreateTodo(username, todo).then(() => this.props.history.push('/todos'))
        } else {
            console.log('put')
            TodoDataService.executeUpdateTodo(username, this.state.id, todo).then(() => this.props.history.push('/todos'))
        }
    }

    validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = "Please enter description value"
        } else if (values.description.length < 5) {
            errors.description = "Description shold have at least 5 characters"
        }
        if (!moment(values.targetDate).isValid) {
            errors.targetDate = "Please enter valid target date"
        }
        return errors
    }
}

export default UpdateTodoComponent;