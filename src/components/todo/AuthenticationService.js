class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log(username + "  " + password);
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem("authenticatedUser");
    }
}
export default new AuthenticationService()