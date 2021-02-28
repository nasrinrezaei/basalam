<template>
  <div>
    <div class="tit">
      <div class="userinfo">
        <div class="name">
          <h5>از غرفه:</h5>
          <h5>{{ vendor.vondername }}</h5>
        </div>
        <img :src="vendor.pic" />
        <div class="locinfo">
          <h5>{{ vendor.nameper }}</h5>
          &nbsp;<img src=".././assets/pic/location.png" /> &nbsp;
          <h5>{{ vendor.city }}</h5>
        </div>
      </div>
      <product
        v-for="item in vendor.product"
        :VendorID="vendor.id"
        :key="item.id"
        :product="item"
       
      />
     
    </div>
 
   <pay  :idofvendor="vendor.id" />
  </div>
</template>

<script>
import pay from "./pay.vue";
import product from "./product.vue";

export default {
  name: "vendor",
  components: {
    pay,
    product,
  },
    props: ["vendor"],

 
};
</script>