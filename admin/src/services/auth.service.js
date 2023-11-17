import createApi from './api.servie';
import axios from "axios";

const auth = 'http://localhost:8888/api';

class AuthService {
    // constructor(baseURL = auth) {
    //     this.api = createApi(baseURL);
    // }

    async login(staffname, password) {
        return (await axios.post('http://localhost:8888/api/admin/login', { staffname: staffname, password: password })).data
    };

}

export default AuthService;