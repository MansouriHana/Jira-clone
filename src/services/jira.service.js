import axios from 'axios';
class JiraService {

    getTasks() {
        return axios.get('http://jsonplaceholder.typicode.com/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {}
        });
    }
}
export default new JiraService();