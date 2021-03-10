<template>
  <div class="pay">
    <div class="free-send">
      <div
        class="infree"
        :style="{ width: getpricevendor(idofvendor) * 0.0001 + '%' }"
>
        <h5 class="text-for-free" v-if="getpricevendor(idofvendor) * 0.0001 >= 100">
          هورا!&nbsp;ارسال از این غرفه برای شما<span>رایگان شد.</span>
        </h5>
        <h5 class="text-for-free" v-else>
          برای ارسال رایگان :<span :style="{ color: '#3E3E3E' }">
            {{ 1000000 - getpricevendor(idofvendor) }} تومان خرید کنید
          </span>
        </h5>
      </div>
    </div>
    <div
      class="enter-freecod"
      v-show="getpricevendor(idofvendor) * 0.0001 >= 100">
      <h5><img src="@/assets/pic/discount.png" />ثبت کد تخفیف غرفه</h5>
    </div>
    <div class="continue-sell">
      
      <Button :size="'small'">
        <h5>ادامه ی خرید فقط از این غرفه</h5>
      </Button>
      <div class="number-price-info">
        <h5>جمع مبلغ {{ gettotalnumber(idofvendor) }} کالا</h5>
        <h5>{{ getpricevendor(idofvendor) }}     توما</h5>
        <h5>ن</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@/components/Share/Button.vue";
export default {
  name: "pay",
  components: {
    Button,
  },
  props: {
    idofvendor: 0,
  },
  computed: {
    ...mapGetters(["getpricevendor", "gettotalnumber"]),
  },
};
</script>
<style scoped>
.number-price-info {
  position: relative;
}
.number-price-info h5:first-child {
  font-size: 0.7rem;
  font-weight: 400;
}
.number-price-info h5:nth-child(2) {
  font-size: 0.7rem;
  font-weight: 700;
  text-align: left;
}
.number-price-info h5:nth-child(3) {
  font-size: 0.7rem;
  font-weight: 700;
  position: absolute;
  left: 3px;
  bottom: 10px;
}
.number-price-info h5{
   color: #535353;
}
.infree {
  background-color: #dff5f1;
}
.free-send {
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  height: 1.75rem;
  justify-content: flex-start;
  color: #00786c;
  position: relative;
}
.pay:nth-child(3) .freesend h5 {
  display: flex;
  align-items: center;
  line-height: 1.1rem;
  letter-spacing: 0rem;
  text-align: right;
}
.pay:nth-child(3) .freesend h5:first-child {
  background-color: #dff5f1;
}
.pay:nth-child(3) .freesend h5:nth-child(2) {
  color: #3e3e3e;
}
.continue-sell {
  display: flex;
  padding-top: 1.25rem;
  width: 100%;
  justify-content: space-between;
}
.pay {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #e5e5e5;
  padding: 0.6rem;
  align-items: flex-end;
}
.text-for-free {
  position: absolute;
  padding: 0.3rem 0.3rem;
  font-size: 0.7rem;
  font-weight: 700;
}
.text-for-free span {
  font-size: 0.75rem;
  font-weight: 400;
}
.enter-freecod {
  padding-top: 0.5rem;
}
.enter-freecod h5 {
  display: flex;
  align-items: center;
  padding: 0rem 0.6rem;
  color: #3e3e3e;
  height: 1.5rem;
  font-size: 0.6rem;
  font-weight: 700;
  background-color: #eeeeee;
  border-radius: 6.25rem;
  justify-content: center;
}
</style>