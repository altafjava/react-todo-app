import Axios from 'axios'
class TodoDataService {
    executeGetAllTodos(username) {
        return Axios.get(`http://localhost:8080/users/${username}/todos`)
    }
    executeGetTodo(username, id) {
        return Axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
    }
    executeUpdateTodo(username, id, todo) {
        return Axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
    }
    executeCreateTodo(username, todo) {
        return Axios.post(`http://localhost:8080/users/${username}/todos`, todo)
    }
    executeDeleteTodo(username, id) {
        return Axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }
}

export default new TodoDataService()