import storage from '@/helpers/storage'
import { isEmpty } from "lodash"

const validate = value => {
    if (!isEmpty(value) && value != "undefined") {
        return value
    }
    return ""
}

export default {
    /** Bearer Token for oAuth2 Server authentication */
    token_type: validate(storage.get("token_type")),
    expires_in: validate(storage.get("expires_in")),
    access_token: validate(storage.getObject("access_token")),
    refresh_token: validate(storage.get("refresh_token")),

    /** Default User Object */
    loggedUser: storage.get("currentUser") ? storage.getObject("currentUser") : ""
}