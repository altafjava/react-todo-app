import Axios from 'axios'
class TodoDataService {
    executeGetAllTodos(username) {
        return Axios.get(`http://localhost:8080/users/${username}/todos`)
    }

}

export default new TodoDataService()