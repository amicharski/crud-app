import httpCommon from '../http-common';
import { createStore } from 'vuex';
import axios from 'axios';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA(state, userData){
            state.user = userData;
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("accountType", userData.accountType);
            localStorage.setItem("requirePasswordReset", userData.requirePasswordReset);
            axios.defaults.headers.common["Authorization"] = `Bearer ${
                userData.token
            }`;
        },
        async LOGOUT(state){
            localStorage.removeItem("user");
            localStorage.removeItem("accountType");
            localStorage.removeItem("requirePasswordReset");
            state.user = null;
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
        async update({ commit }, changes){
            await httpCommon.put("/users/" + this.state.user.userID, changes);
            const { data } = await httpCommon.get("/" + this.state.user.userID);
            console.log("dataValues: ", data);
            commit("SET_USER_DATA", data);
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
            return state.user?.username;
        },
        getAccountType(state){
            return state.user.accountType;
        },
        getUser(state){
            return state.user;
        },
        getUserID(state){
            return state.user.userID;
        }
    },
    plugins: [vuexLocal.plugin]
})