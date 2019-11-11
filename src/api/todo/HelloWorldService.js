import Axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello-world')
    }

    executeRetrieveHelloWorldBean() {
        return Axios.get("http://localhost:8080/hello-world-bean")
    }

    executePathVariableService(param) {
        return Axios.get(`http://localhost:8080/hello-world-path-variable/${param}`)
    }

    executeErrorService() {
        return Axios.get("http://localhost:8080/err")
    }
}
export default new HelloWorldService()