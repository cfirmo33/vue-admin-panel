import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'settings',
        component: emptyParentComponent,
        children:[
            {
                path: 'all',
                name: 'settings',
                component: lazyLoading('settings', 'settings')
            }
        ]
    }
]