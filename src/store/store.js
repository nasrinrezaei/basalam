import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import AddressData from '.././data/AddressDate.js'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        cart:[],
        AddressData: AddressData,
        ChosedAddress: null,
    },
    getters: {
        getcart(state) {
            return state.cart
        },
        AddressData(state) {
            return state.AddressData
        },
        getnumberofcart(state) {
            return state.cart.length
        },
        getprice(state) {
            var product = []
            state.cart.forEach(function (vendor) {
                vendor.items.forEach(function (pro) {
                    product.push(pro)
                })
            })
            return product
        },
        getpricevendor: (state) => (VendorId) => {
            var sum = 0
            const index = state.cart.findIndex(state => state.id == VendorId);
            state.cart[index].items.forEach(function (pro) {
                sum += pro.quantity * pro.product.price
            })
            return sum
        },
        gettotalnumber: (state) => (VendorId) => {
            const index = state.cart.findIndex(state => state.id == VendorId);
            return state.cart[index].items.length
        }
    },
    mutations: {
        CHANGE_NUMBER(state, data) {
            const index = state.cart.findIndex(state => state.id == data.vendorID);
           const productIndex = state.cart[index].items.findIndex(product => product.product.id == data.productID)
            state.cart[index].items[productIndex].quantity += data.op;
            if (state.cart[index].items[productIndex].quantity < 0) state.cart[index].items[productIndex].quantity = 0
        },
        DELETE_ITEM(state, data) {
            const index = state.cart.findIndex(state => state.id == data.vendorID);
            const productIndex = state.cart[index].items.findIndex(product => product.product.id == data.productID);
            Vue.delete(state.cart[index].items, productIndex)
            if (state.cart[index].items.length == 0) Vue.delete(state.cart, index)
        },
        ADD_ADRDRESS(state, data) {
            this.ChosedAddress = data
            console.log("this.ChosedAddress",this.ChosedAddress
            )
        },
         GET_DATA(state,data) {
            state.cart = data.vendors
        }
    },
    actions: {
        CHANGE_NUMBER_MIN(context, data) {
            context.commit('CHANGE_NUMBER', data);
        },
        CHANGE_NUMBER_PLUS(context, data) {
            context.commit('CHANGE_NUMBER', data);
        },
        DELETE_ITEM(context, data) {
            context.commit('DELETE_ITEM', data);
        },
        ADD_ADRDRESS(context, data) {
            context.commit('ADD_ADRDRESS', data);
        },
        async  GET_DATA(context) {

            let response = await axios.get('https://mini-cart.iran.liara.run/v1/cart');
            let data = await response.data;
            context.commit('GET_DATA',data);

        },
    }

})