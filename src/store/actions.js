import { state } from './state'
import * as type from './type'
export const actions = {
    add: ({ commit }) => {
        commit(type.ADD)
    },
    minus: ({ commit }) => {
        commit(type.MINUS)
    },
    odd: ({ commit }) => {
        if (state.count % 2 == 1) {
            commit(type.ADD)
        }
    },
    even: ({ commit }) => {
        if (state.count % 2 == 0) {
            commit(type.ADD)
        }
    }
}