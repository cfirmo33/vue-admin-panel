import store from "vuex-store"
import helpers from "@/helpers"

const beforeEach = (to, from, next) => {
    store.commit("setLoading", true)

    // check if page requires auth
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    /** && requiresAuth */
    if (!helpers.methods.isLogged() && !helpers.methods.isAuthRoute(to)) {
        next({ name: "login" })
    } else if (helpers.methods.isLogged() && helpers.methods.isAuthRoute(to)) {
        next({ name: from.name })
    } else {
        next()
    }
    next()
}

export default beforeEach
