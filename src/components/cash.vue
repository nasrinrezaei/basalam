<template>
  <div class="pay">
    <div class="sellinfo">
      <div class="sellc ccash">
        <h5>ادامه خرید از {{getnumberofcart}}  غرفه</h5>
      </div>
      <div class="cost">
        <h5>مبلغ قابل پرداخت  غرفه</h5>
        <h5> {{sum}} تومان</h5>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from "vuex"
  export default {
      computed:{
    ...mapGetters(['getprice','getnumberofcart']),
 
    sum(){
      var sum=this.getprice.reduce((presum,sum)=>{
        return presum+sum.number*sum.newprice
      },0)
     return sum
    }
  },
  };
  </script>
