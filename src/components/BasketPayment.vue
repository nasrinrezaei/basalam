
<template>
  <div>
    <Back :new="false" :back-page="'/BasketAddress'">
      <h5>پرداخت</h5>
    </Back>
    <div class="final-cash">
      <button class="confrim">تایید</button>
      <h5>اگر کد تخفیف دارید وارد کنید</h5>
      <form>
        <input type="text" value="کد تخفیف" />
      </form>
      <div class="usefree">
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round"></span>
        </label>
        <h5>استفاده از اعتبار</h5>
      </div>
    </div>
    <div class="bank">
      <h5>درگاه پرداخت</h5>
      <Chose v-for="item in databank" :key="item" :name="'bank'">
        <h5>{{ item }}</h5>
      </Chose>
    </div>
    <div>
      <h5 class="sum">خلاصه ی سفارش</h5>
      <SumVendor v-for="item in getcart" :key="item.id" :vendor="item" />
    </div>
    <div class="Pay-Button">
      <Button :block="true">
        <h5>پرداخت</h5>
      </Button>
    </div>
  </div>
</template>

<script>
import Back from "@/components/Share/Back.vue";
import Chose from "@/components/Share/Chose.vue";
import SumVendor from "@/components/ForBasketPayment/SumVendor.vue";
import Button from "@/components/Share/Button.vue";
import { mapGetters } from "vuex";
export default {
  name:
  "BasketPayment",
  components: {
    Back,
    Chose,
    SumVendor,
    Button,
  },
  data() {
    return {
      databank: ["بانک سامان", "بانک پاسارگارد", "آسان پرداخت"],
    };
  },
  computed: {
    ...mapGetters(["getcart"]),
  },
};
</script>
  <style scoped>
.sum {
  padding: 1rem;
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: #3e3e3e;
}
.Pay-Button {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0rem;
}
.final-cash {
  padding: 2rem 1rem;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  position: relative;
}
.final-cash h5 {
  font-weight: 400;
  color: #3e3e3e;
}
.new {
  display: flex;
  align-items: center;
}
.back {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #eeeeee;
  border: 0px;
}
.address {
  padding-right: 0.6rem;
}
input {
  height: 2.5rem;
  border-radius: 0.5rem;
  width: 100%;
  border: 1px solid #9d9d9d;
  font-family: IRANSans;
  color: #7d7d7d;
  padding-right: 1rem;
  width: 100%;
  margin-top: 0.5rem;
}
.switch {
  position: relative;
  display: inline-block;
  width: 3.4rem;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eeeeee;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  right: 25px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border: 1px solid #9d9d9d;
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 2rem;
  padding: 1rem 0rem;
}
.slider.round:before {
  border-radius: 50%;
}
.usefree {
  display: flex;
  margin-top: 1.5rem;
  align-items: baseline;
}
.usefree h5 {
  padding-right: 0.5rem;
}
.confrim {
  height: 2rem;
  border-radius: 6.2rem;
  padding: 0rem 1rem;
  align-items: center;
  display: flex;
  background-color: #eeeeee;
  position: absolute;
  font-family: IRANSans;
  top: 64px;
  left: 20px;
}
.bank {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 1rem 0rem 1rem;
  border-bottom: 1px solid #e5e5e5;
}
.bank > h5 {
  font-size: 1rem;
  width: 100%;
  color: #3e3e3e;
  font-weight: 400;
  padding-bottom: 0.7rem;
}
.bank+div{
  border-bottom:1px solid #E5E5E5 ;
}
</style>