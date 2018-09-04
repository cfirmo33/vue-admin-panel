import { routes as products } from './products'
import { routes as deliveries} from './deliveries'
import { routes as orders } from './orders'
import { routes as profile } from './profile'
import { routes as reports } from './reports'
import { routes as stock } from './stock'
import { routes as users } from './users'
import { routes as settings } from './settings'
import { routes as coupons } from './coupons'

export default [
    ...products,
    ...deliveries,
    ...orders,
    ...profile,
    ...reports,
    ...stock,
    ...users,
    ...settings,
    ...coupons,
]