import Axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello-world')
    }

    executeRetrieveHelloWorldBean(){
        return Axios.get("http://localhost:8080/hello-world-bean")
    }
}
export default new HelloWorldService()