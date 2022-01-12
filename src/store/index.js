import httpCommon from '../http-common';
import { createStore } from 'vuex';
import axios from 'axios';

export default new createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA(state, userData){
            state.user = userData;
            localStorage.setItem("user", JSON.stringify(userData));
            axios.defaults.headers.common["Authorization"] = `Bearer ${
                userData.token
            }`;
        },
        LOGOUT(){
            localStorage.removeItem("user");
            location.reload();
        }
    },
    actions: {
        register({ commit }, credentials){
            return httpCommon.post("users", credentials)
                .then(({ data }) => {
                    console.log("User Data: ", data);
                    commit("SET_USER_DATA", data);
                });
        },
        login({ commit }, credentials){
            return httpCommon.post("login", credentials)
                .then(({ data }) => {
                    console.log("Data: " + data);
                    commit("SET_USER_DATA", data);
                });
        },
        logout({ commit }){
            commit("LOGOUT");
        }
    },
    getters: {
        loggedIn(state){
            return !!state.user;
        },
        getUsername(state){
            return state.user.username;
        }
    }
})