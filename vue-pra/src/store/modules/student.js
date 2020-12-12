export const student = {
    state: {

        studentList: [],

    },
    getters: {


        studentLength(state) {
            return state.studentList.length;
        },
        studentJuveniles(state) {
            return state.studentList.filter(item => item.age < 18);
        }
    },
    mutations: {

    },

}