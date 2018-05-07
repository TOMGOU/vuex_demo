export const getters = {
    count: state => {
        return state.count
    },
    type: state => {
        return state.count % 2 == 0 ? "偶数" : "奇数"
    }
}