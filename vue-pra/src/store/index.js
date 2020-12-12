import Vue from 'vue';
import Vuex from 'vuex';
import {
    COUNT_INCREMENT,
    OBJ_B,
    CHANGE_MSG
} from './mutation-types.js';
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        count: 0,
        studentList: [],
        obj: {
            a: 1
        },
        msg: ''
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
        addCount(state) {
            return function (num) {
                return state.count + num;
            }
        },
        studentLength(state) {
            return state.studentList.length;
        },
        studentJuveniles(state) {
            return state.studentList.filter(item => item.age < 18);
        }
    },
    mutations: {
        // countIncrement(state, payload) {
        //     // 变更状态
        //     state.count += payload.num;
        // }
        [COUNT_INCREMENT](state, payload) {
            state.count += payload.num;
        },
        [OBJ_B](state, payload) {
            Vue.set(state.obj, 'b', 2)
            // state.obj = {...state.obj,b:2};
        },
        [CHANGE_MSG](state, {
            value
        }) {
            state.msg = value;
        },
        increment(state) {
            state.count++;
        }
    },
    actions: {
        countIncrement(context) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    context.commit('increment');
                    resolve(12);
                }, 1000)
            })
           
        }
    }
})

export default store;