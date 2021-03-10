<template>
  <div class="continuebutton">
    <Button :isLink="true" :link="NextPage" :size="'large'">
      <slot> </slot>
    </Button>
    <div class="cost">
      <h5>  مبلغ قابل پرداخت {{getnumberofcart}} غرفه </h5>
      <h5>{{ sum }} توما</h5>
      <h5>ن</h5>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Button from "@/components/Share/Button.vue";
export default {
  name: "ButtonContainer",
  computed: {
    ...mapGetters(["getprice", "getnumberofcart","getnumberofcart"]),
    sum() {
      var sum = this.getprice.reduce((presum, sum) => {
        return presum + sum.quantity * sum.product.price;
      }, 0);
      return sum;
    },
  },
  props: ["NextPage"],
  components: {
    Button
  },
};
</script>
<style scoped>
.cost h5:first-child {
  font-size: 0.7rem;
  font-weight: 400;
  color:#535353;
}
.cost h5:nth-child(2) {
  font-size: 0.7rem;
  font-weight: 700;
  color: #535353;
}
.continuebutton {
  direction: rtl;
}
.continuebutton {
  display: flex;
  padding: 0.6rem 0.75rem;
  width: 100%;
  justify-content: space-between;
  background-color: white;
}
.sell {
  background-color: #df3856;
  height: 2rem;
  border-radius: 6.25rem;
  align-items: center;
  display: flex;
  padding: 0rem 1rem;
}
.sell h5 {
  color: white;
  font-size: 0.8rem;
}
.cash {
  padding: 1.2rem 1.8rem;
  border: none;
}
.cost {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
   position: relative;
   justify-content: space-evenly;
}
.cost h5:nth-child(3) {
  font-size: 0.7rem;
  font-weight: 700;
  color: #535353;
  position: absolute;
  left: 3px;
  bottom: 15px;
}
</style>