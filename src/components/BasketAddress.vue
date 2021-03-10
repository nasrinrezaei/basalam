
<template>
  <div>
    <Back :new="true" :BackPage="'/'">
      <h5>آدرس ارسال</h5>
    </Back>
    <form>
      <Preaddress v-for="item in AddressData" :key="item.id" :PreAddress="item" />
    </form>
    <Cash :cashinfo="'ادامه ی فرآیند خرید'" :NextPage="'/BasketPayment'">
      <h5>ادامه ی فرآیند خرید</h5>
    </Cash>
  </div>
</template>

<script>
import Back from "@/components/Share/Back.vue";
import Preaddress from "@/components/ForBasketAddress/Preaddress.vue";
import Cash from "@/components/Share/Cash.vue";
import { mapGetters } from "vuex";
export default {
  name:"BasketAddress",
  components: {
    Back,
    Preaddress,
    Cash,
  },
  computed: {
    ...mapGetters(["AddressData"]),
  },
 
};
</script>
  