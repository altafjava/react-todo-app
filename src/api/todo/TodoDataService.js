import Axios from 'axios'
class TodoDataService {
    executeGetAllTodos(username) {
        return Axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    executeDeleteTodo(username, id) {
        return Axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }
}

export default new TodoDataService()