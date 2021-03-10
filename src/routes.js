
import Basket from './components/Basket.vue'
import BasketAddress from './components/BasketAddress.vue'
import BasketPayment from './components/BasketPayment.vue'

export const routes = [
    {path:'', component:Basket},
    {path:'/BasketAddress', component:BasketAddress},
    {path:'/BasketPayment', component:BasketPayment}
]
    