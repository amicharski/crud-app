import { createStore } from 'vuex';

export default createStore({
    state: {
        userdata: {},
        username: null,
        password: null,
        accountType: null
    },
    mutations: {
        LOGIN_USER(state, userdata){
            state.userdata = userdata;

            state.username = userdata.username;
            state.password = userdata.password;
            state.accountType = userdata.accountType;
        }
    },
    actions: {
        pushUserdata({ commit }, userdata){
            return commit("LOGIN_USER", userdata);
        }
    }
});