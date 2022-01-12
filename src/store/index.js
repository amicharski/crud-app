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
            console.log("User Data: ", userData);
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
        async register({ commit }, credentials){
            return httpCommon.post("users", credentials)
                .then(({ data }) => {
                    commit("SET_USER_DATA", data);
                });
        },
        async login({ commit }, credentials){
            const { data } = await httpCommon.post("login", credentials);

            commit("SET_USER_DATA", data);
            return data;
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