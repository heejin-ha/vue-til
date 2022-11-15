import Vue from 'vue';
import Vuex from 'vuex';
import { 
    getAuthFromCookie, 
    getUserFromCookie, 
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    },
    getters: {
        isLogin(state) {
            return state.username !== '';
        },
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = '';
        }
    },
    actions: {
        CLEAR_TOKEN_USER({commit}) {
            commit('clearToken');
            commit('clearUsername');
        }
    }
});