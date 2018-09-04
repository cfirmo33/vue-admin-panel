import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'orders',
        component: emptyParentComponent,
        children:[
            {
                path: 'all',
                name: 'orders',
                component: lazyLoading('orders', 'orders')
            }
        ]
    }
]