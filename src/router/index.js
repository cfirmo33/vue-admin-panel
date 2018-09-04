import Vue from "vue"
import Router from "vue-router"
import AppLayout from "../components/admin/AppLayout"
import lazyLoading from "./lazyLoading"
import appRoutes from "@/app/routes"
import beforeEach from "./beforeEach"
import afterEach from "./afterEach"
import { routes as AuthRoutes } from '@/app/auth'

Vue.use(Router)

const EmptyParentComponent = {
    template: "<router-view></router-view>"
}

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "*",
            redirect: { name: "dashboard" }
        },
        ...AuthRoutes,
        {
            name: "Admin",
            path: "/admin",
            component: AppLayout,
            meta: {
                requiresAuth: true
            },
            children: [
                ...appRoutes,
                {
                    name: "dashboard",
                    path: "dashboard",
                    component: lazyLoading("dashboard/Dashboard"),
                    meta: {
                        requiresAuth: true
                    }
                },
            ]
        }
    ]
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
