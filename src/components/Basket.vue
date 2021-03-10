<template>
  <div>
    <Buttoncontainer />
    <Vendor v-for="item in getcart" :key="item.id" :vendor="item" />
    <Cash :NextPage="'/BasketAddress'">
      <h5>ادامه خرید از {{ getnumberofcart }} غرفه</h5>
    </Cash>
  </div>
</template>
<script>
import Buttoncontainer from "@/components/ForBasket/ButtonContainer.vue";
import Cash from "@/components/Share/Cash.vue";
import Vendor from "@/components/ForBasket/Vendor.vue";
import { mapGetters } from "vuex";
import Button from "./Share/Button.vue";
export default {
  name:"Basket",
  components: {
    Vendor,
    Buttoncontainer,
    Cash,
    Button,
  },
  data: function () {
    return { loading: false, ShowButton: false };
  },
  computed: {
    ...mapGetters(["getcart", "getnumberofcart"]),
  },  
};
</script>
<style scoped>
.error {
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
}
.error > h5 {
  margin-top: 100px;
}
.error div {
  margin-top: 200px;
}
</style>