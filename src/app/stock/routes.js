import lazyLoading from "@/services/lazyLoading"

const emptyParentComponent = {
    template: "<router-view></router-view>"
}

export default [
    {
        path: "stock",
        component: emptyParentComponent,
        children: [
            {
                path: "all",
                name: "stock",
                component: lazyLoading("stock", "stock")
            }
        ]
    }
]
