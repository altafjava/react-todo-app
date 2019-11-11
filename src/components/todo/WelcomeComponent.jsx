import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ''
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
                    <button className="btn btn-info" onClick={this.retrieveHelloWorldBean}>Get Hello World Bean</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
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
                    { welcomeMessage: response.data.mesage }
                )
            })

    }
}
export default WelcomeComponent