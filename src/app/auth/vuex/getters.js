import { isEmpty } from "lodash"

export const isLogged = ({ access_token }) => {
    return !isEmpty(access_token)
}

export const currentUser = ({ loggedUser }) => {
    return loggedUser
}

export const hasAccessToken = ({ access_token }) => {
    return access_token ? true : false
}

export const accessToken = ({ access_token }) => {
    return access_token
}