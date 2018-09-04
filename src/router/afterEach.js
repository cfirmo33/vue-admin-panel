import store from 'vuex-store'

let mediaHandler = () => {
    if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
      store.dispatch('toggleSidebar', true)
    } else {
      store.dispatch('toggleSidebar', false)
    }
  }

const afterEach = (to, from) => {
    mediaHandler(),
    store.commit('setLoading', false)
}

export default afterEach