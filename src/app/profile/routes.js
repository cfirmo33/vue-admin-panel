import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'profile',
        component: emptyParentComponent,
        children:[
            {
                path: 'me',
                name: 'profile',
                component: lazyLoading('profile', 'profile')
            }
        ]
    }
]