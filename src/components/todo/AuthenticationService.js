class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log(username + "  " + password);
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user === null ? false : true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem("authenticatedUser");
        return user == null ? '' : user
    }
}
export default new AuthenticationService()