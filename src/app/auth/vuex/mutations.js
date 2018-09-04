import * as types from "./mutation-types"
import storage from "@/helpers/storage"
import { resource } from "@/config"
import { isEmpty } from 'lodash'

export default {
    [types.setToken](state, data) {
        storage.setObject("access_token", data.access_token)
        storage.set("expires_in", data.expires_in)
        storage.set("token_type", data.token_type)
        storage.set("refresh_token", data.refresh_token)
        state.token_type = data.token_type
        state.access_token = data.access_token
        state.expires_in = data.expires_in
        state.refresh_token = data.refresh_token
        return this
    },

    [types.setUser](state, user) {
        /** verifica se a foto do cara é default e então insere uma aleatória */
        user.avatar = isEmpty(user.avatar) ? 'https://i.imgur.com/nfa5itq.png' : user.avatar

        /** Verifica se a url da foto aponta para um site ou se é apenas um caminho do mesmo domínio */
        if (user.avatar.indexOf("/storage") >= 0) {
            user.avatar = resource.url + user.avatar
        }

        /**
         * Modifica o state antes de persistir os dados no sessionStorage
         */
        state.user = user
        storage.setObject("currentUser", { ...user })
        return this
    },

    [types.logout](state) {
        storage.clear()
        state.user = null
        return this
    },

    [types.setUserAvatar](state, avatar) {
        state.user.avatar = avatar
        return avatar
    }
}