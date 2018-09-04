import store from "vuex-store"

export default {
    methods: {
        isLogged: function() {
            return store.getters.isLogged === true
        },
        isAuthRoute: function(route){
            return ( route.name === 'login' || route.name === 'password-reset' || route.name === 'register')
        }
    },
}
