<template>
  <div class="pay">
    <div class="freesend">
      <div class="infree" :style="{ width: getpricevendor(this.idofvendor) * 0.0001  + '%' }">
        <h5 class="text" v-if="getpricevendor(this.idofvendor) * 0.0001 >= 100">
          هورا!&nbsp;ارسال از این غرفه برای شما<span>رایگان شد.</span>
        </h5>
        <h5 class="text" v-else >
          برای ارسال رایگان :<span :style="{ color: '#3E3E3E' }">
           {{ 1000000-getpricevendor(this.idofvendor)}} تومان خرید کنید
          </span>
        </h5>
      </div>
    </div>
    <div class="butsell" v-show="this.free * 10 >= 100">
      <h5><img src=".././assets/pic/discount.png" />ثبت کد تخفیف غرفه</h5>
    </div>
    <div class="sellinfo">
      <div class="sellc">
        <h5>ادامه خرید فقط از این غرفه</h5>
      </div>
      <div class="cost">
        <h5>جمع مبلغ {{ this.numbertotal }} کالا</h5>
        <h5 >{{ getpricevendor(this.idofvendor)}} تومان</h5>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  
  name: "pay",

props:{
  numbertotal:0,
  free:0,
  idofvendor:0
},

  computed:{
    ...mapGetters(['getpricevendor']),
  },
};
</script>