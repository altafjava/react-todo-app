import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: '',
            errorMessage: ''
        }
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get customized message.<br /><br />
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button><br /><br />
                    <button className="btn btn-info" onClick={this.retrieveHelloWorldBean}>Get Hello World Bean</button><br /><br />
                    <button className="btn btn-success" onClick={this.retrievePathVariableService}>Get Path Variable Message</button><br /><br />
                    <button className="btn btn-danger" onClick={this.retrieveErrorService}>Get Error Message</button><br /><br />
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div className="container">
                    {this.state.errorMessage}
                </div>
            </>
        )
    }
    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
            .then(response => {
                this.setState(
                    { welcomeMessage: response.data }
                )
            })
    }
    retrieveHelloWorldBean = () => {
        HelloWorldService.executeRetrieveHelloWorldBean()
            .then(response => {
                this.setState(
                    { welcomeMessage: response.data.message }
                )
            })
    }

    retrievePathVariableService = () => {
        HelloWorldService.executePathVariableService(this.props.match.params.name)
            .then(response => {
                this.setState(
                    { welcomeMessage: response.data.message }
                )
            })
    }

    retrieveErrorService = () => {
        HelloWorldService.executeErrorService()
            .then(response => console.log("response=" + response.data))
            .catch(error => console.log("error=" + error.response.data.message))
    }
}
export default WelcomeComponent