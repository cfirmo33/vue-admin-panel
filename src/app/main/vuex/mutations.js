import * as types from "./mutation-types"

export default {
    [types.CLOSE_MENU](state) {
        if (document.documentElement.clientWidth < 992) {
            state.sidebar.opened = false
        }
    },
    [types.TOGGLE_SIDEBAR](state, opened) {
        state.sidebar.opened = opened
    },
    [types.TOGGLE_WITHOUT_ANIMATION](state, value) {
        state.sidebar.withoutAnimation = value
    },
    setLoading(state, isLoading) {
        state.isLoading = isLoading
    }
}
