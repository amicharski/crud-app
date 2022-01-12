import { createStore } from 'vuex';

export default createStore({
    state: {
        userdata: {}
    },
    mutations: {
        LOGIN_USER(state, userdata){
            state.userdata = userdata;
        },
        LOGOUT_USER(state){
            state.userdata = null;
        }
    },
    actions: {
        pushUserdata({ commit }, userdata){
            return commit("LOGIN_USER", userdata);
        },
        nullUserdata({ commit }){
            return commit("LOGOUT_USER");
        }
    }
});