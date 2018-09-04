import axios from "axios"
import app from '@/main'
import { resource } from '@/config'

let url = `${resource.url}/api/`;

if(resource.apiVersion)
{
    url += `${resource.apiVersion}`
}

const http = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

http.interceptors.request.use(
    config => {
        let accessToken = app.$store.state.auth.access_token
        let token_type = app.$store.state.auth.token_type
        if (accessToken) {
            config.headers.Authorization = token_type + " " + accessToken
        }
        //app.$loader.show()
        return config
    },
    err => {
        //app.$loader.hide()
        return Promise.reject(err)
    }
)

http.interceptors.response.use(
    config => {
        //app.$loader.hide()
        return config
    },
    error => {
        //app.$loader.hide()
        return Promise.reject(error.response)
    }
)

export default http