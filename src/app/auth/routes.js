import lazyLoading from "@/services/lazyLoading"

import AuthLayout from "./components/AuthLayout"

export default [
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            {
                path: "login",
                name: "login",
                component: lazyLoading('auth', 'login/Login')
            },
            {
                path: 'signup',
                name: 'signup',
                component: lazyLoading('auth', 'signup/Signup')
            },
            // {
            //     path: "reset-password",
            //     name: "reset-password"
            // }
        ]
    }
]
