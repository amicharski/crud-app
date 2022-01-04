import http from "../http-common";

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
        return http.get("/login");
    }
}

export default new UserDataService();
