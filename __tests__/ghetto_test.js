const axios = require("axios");

var http = axios.create({
    baseURL: "http://localhost:8080/session/",
    headers: {
        "Content-type": "application/json"
    }
});

class UserDataService {
    getAll(){
        return http.get("/getusers");
    }

    get(id){
        return http.get(`/users/${id}`);
    }

    authenticateLogin(data){
        return http.post("/login", data);
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
}
const uds = new UserDataService();

function createAccount(){
    // http://localhost:8080/api/users
    uds.create({
        "username": "cmos",
        "email": "test@enron.com",
        "password": "password"
    }).catch(err => {
        console.log(err.message);
    });
}

function userLogin(){
    // http://localhost:8080/api/login
    uds.authenticateLogin({
        "username": "test",
        "password": "passwor"
    }).catch(err => {
        console.log("OOF: " + err.message);
    });
}

function fetchUsers(){
    http.get("/getusers").catch(err => {
        console.log("OOF: " + err.message);
    });
}

function forceUpdatePassword(){
    http.put("/users/20", {
        "require_password_at_login": "1"
    }).catch(err => {
        console.log("OOF: " + err.message);
    });
}

function newSession(){
    http.post("/session", {
        "userID": null
    });
}

newSession();