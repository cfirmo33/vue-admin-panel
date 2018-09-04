import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'reports',
        component: emptyParentComponent,
        children:[
            {
                path: 'all',
                name: 'reports',
                component: lazyLoading('reports', 'reports')
            }
        ]
    }
]