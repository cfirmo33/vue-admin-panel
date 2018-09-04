import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: 'coupons',
        component: emptyParentComponent,
        children:[
            {
                path: 'all',
                name: 'coupons',
                component: lazyLoading('coupons', 'coupons')
            }
        ]
    }
]