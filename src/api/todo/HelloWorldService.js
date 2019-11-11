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
}
export default new HelloWorldService()