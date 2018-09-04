export default {
    // just set a simple string to session storage
    set(key, value) {
        window.localStorage.setItem(key, value)
        return this
    },
    // just get a simple string from session storage
    get(key) {
        return window.localStorage.getItem(key)
    },
    // stringify and sets an object to session storage
    setObject(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
        return this
    },
    // get and parses an object from session storage
    getObject(key) {
        return JSON.parse(window.localStorage.getItem(key) || null)
    },
    // remove the key passed through params
    remove(key) {
        window.localStorage.removeItem(key)
        return this
    },
    // clear all localStorage saved items
    clear() {
        return window.localStorage.clear()
    }
}