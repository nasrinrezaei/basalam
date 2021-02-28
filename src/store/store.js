import  Vue from 'vue';
import Vuex from  'vuex';
import data from '.././data/data.js'
Vue.use(Vuex);
export const store=new Vuex.Store({
    state:{cart:data},
    getters:{
        getcart(state){
            return  state.cart
        },
        getnumberofcart(state){
            return  state.cart.length
        },
        getprice(state){
            var product=[]
            state.cart.forEach(function(vendor){
                vendor.product.forEach(function(pro){
                          product.push(pro)
                      })
            })
            return  product
        },
        getpricevendor: (state) => (VendorId) => {
            var sum=0
            console.log("VendorId in store",  VendorId)
        
            state.cart[VendorId-1].product.forEach(function(pro){
                         sum+=pro.number*pro.newprice
                      })
                      console.log("sum",  sum)
            return  sum
        },
     },
    mutations:{
        changenumber(state,data){
                const index = state.cart.findIndex(state => state.id ==  data.vendorID);
                const productIndex =  state.cart[index].product.findIndex(product => product.id == data.productID);
                data.operation=="plus" ? state.cart[index].product[productIndex].number++ :  state.cart[index].product[productIndex].number--;
                if(  state.cart[index].product[productIndex].number<0){
                        state.cart[index].product[productIndex].number=0
                    }
            },
        deleteitem(state,data){
            const index = state.cart.findIndex(state => state.id ==  data.vendorID);
            const productIndex = state.cart[index].product.findIndex(product => product.id == data.productID);
            Vue.delete(state.cart[index].product,productIndex)
            if(state.cart[index].product.length==0){
                Vue.delete(state.cart,index)
            }
        }
    },
    actions:{
        changenumber(context,data){
            context.commit('changenumber',data);
        },
        deleteitem(context,data){
            context.commit('deleteitem',data);
        },
    }

})