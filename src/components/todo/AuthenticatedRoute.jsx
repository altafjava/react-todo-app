import React, { Component } from "react";
import Authenticationservice from "./AuthenticationService";
import { Route, Redirect } from 'react-router-dom'

class AuthenticatedRoute extends Component {
    render() {
        console.log('Authenticationservice.isUserLoggedIn=' + Authenticationservice.isUserLoggedIn())
        if (Authenticationservice.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}
export default AuthenticatedRoute