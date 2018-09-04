import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'deliveries',
        component: emptyParentComponent,
        children:[
            {
                path: 'all',
                name: 'deliveries',
                component: lazyLoading('deliveries', 'deliveries')
            }
        ]
    }
]