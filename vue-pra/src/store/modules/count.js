import {
    COUNT_INCREMENT,
   
} from '../mutation-types.js';
export const count = {
    state: {
        count: 0,
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
    },
    mutations: {
       
        [COUNT_INCREMENT](state, payload) {
            state.count += payload.num;
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
}