class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log(username + "  " + password);
        sessionStorage.setItem('authenticatedUser', username);
    }
}
export default new AuthenticationService()