const axios = require("axios");

var http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});

class UserDataService {
    getAll(){
        return http.get("/users");
    }

    get(id){
        return http.get(`/users/${id}`);
    }

    create(data){
        return http.post("/users", data);
    }

    update(id, data){
        return http.put(`/users/${id}`, data);
    }

    delete(id){
        return http.delete(`/users/${id}`);
    }

    findByUsername(username){
        return http.get(`/users?username=${username}`);
    }

    authenticateLogin(data){
        console.log(data);
        return http.get("/login");
    }
}

function main(){
    const uds = new UserDataService();
    uds.create({
        username: "root",
        password: "password",
        email: "root@enron.com"
    });
}

describe('Create Account', () => {
    test('Stupid Test', () => {
        expect(true).toBeTruthy();
    });
    test('Account Creation', () => {
        const uds = new UserDataService();
        uds.create({
            username: "root",
            password: "password",
            email: "root@enron.com"
        });
    });
});