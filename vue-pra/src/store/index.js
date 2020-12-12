import Vue from 'vue';
import Vuex from 'vuex';
import {count} from './modules/count';
import {student} from './modules/student';


import {
    COUNT_INCREMENT,
    OBJ_B,
    CHANGE_MSG
} from './mutation-types.js';
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        
       
        obj: {
            a: 1
        },
        msg: ''
    },
    modules:{
        count,
        student
    },
    getters: {
        
        
    },
    mutations: {
        // countIncrement(state, payload) {
        //     // 变更状态
        //     state.count += payload.num;
        // }
        
        [OBJ_B](state, payload) {
            Vue.set(state.obj, 'b', 2)
            // state.obj = {...state.obj,b:2};
        },
        [CHANGE_MSG](state, {
            value
        }) {
            state.msg = value;
        },
       
    },
    actions: {
        
    }
})

export default store;