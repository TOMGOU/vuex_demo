import { state } from './state'
// import { ADD, MINUS } from './type'
import * as type from './type'
export const mutations = {
    [type.ADD](state) {
        state.count++;
    },
    [type.MINUS](state) {
        state.count--;
    }
}