import * as types from "./mutation-types"

import http from "@/http"

export default {
    login: ({ commit }, user) => {
        return http
            .post("login", { ...user })
            .then(response => commit(types.setToken, response.data))
    },
    getUser: ({ commit }) => {
        return http
            .get("admin/profile")
            .then(response => commit(types.setUser, response.data.data))
    }
}
