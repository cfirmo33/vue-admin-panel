import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'products',
        component: emptyParentComponent,
        children:[
            {
                path: 'all',
                name: 'products',
                component: lazyLoading('products', 'products')
            }
        ]
    }
]