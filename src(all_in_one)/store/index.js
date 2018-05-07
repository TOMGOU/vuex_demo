import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getters = {
    count: (state) => {
        return state.count
    },
    type: (state) => {
        return state.count % 2 ? "奇数" : "偶数"
    }
}

const state = {
    count: 10,
    type: ''
}

const actions = {
    add: ({ commit }) => {
        commit('add')
    },
    minus: ({ commit }) => {
        commit('minus')
    },
    odd: ({ commit }) => {
        if (state.count % 2 == 0) {
            commit('add')
        }
    }
}

const mutations = {
    add(state) {
        state.count++
    },
    minus(state) {
        state.count--
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})