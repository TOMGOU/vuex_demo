import getters from "./getters"
const state = {
    count: 10
}

const mutations = {
    add: state => {
        state.count++;
    },//this point problem
    minus: state => {
        state.count--;
    }//this point problem
}

export default {
    state,
    mutations,
    getters
}