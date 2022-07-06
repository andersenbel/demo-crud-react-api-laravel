import axios from 'axios'

export default class Api {
    static getList() {
        return axios.get('http://localhost:80/api/index', {})
            .then(response => response.data)
    }
    static storeTodo(name, description) {
        return axios.post('http://localhost:80/api/store', { name: name, description: description })
            .then(response => response.data)
            .then(() => this.getList())
    }
    static deleteTodo(id) {
        return axios.post('http://localhost:80/api/delete', { id: id })
            .then(response => response.data)
            .then(() => this.getList())
    }
    static getTodo(id) {
        return axios.get('http://localhost:80/api/show/' + id, {})
            .then(response => response.data[0])
    }
    static updateTodo(id, name, description) {
        return axios.post('http://localhost:80/api/update', { id: id, name: name, description: description })
            .then(response => response.data)
            .then(() => this.getList())
    }
}