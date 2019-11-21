import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Form, Field } from 'formik';
class UpdateTodoComponent extends Component {
    constructor(props) {
        super(props)
        console.log('props=', props)
        this.state = {
            id: this.props.match.params.id,
            description: 'Learn Form',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }
    render() {
        return (
            <div>
                <h1>Todo Update Form</h1>
                <div className="container">
                    <Formik>
                        {
                            (props) => (
                                <Form>
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
}

export default UpdateTodoComponent;