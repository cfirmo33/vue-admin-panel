import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'users',
        component: emptyParentComponent,
        children:[
            {
                path: 'all',
                name: 'users',
                component: lazyLoading('users', 'users')
            }
        ]
    }
]