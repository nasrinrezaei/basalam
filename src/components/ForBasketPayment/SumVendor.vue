<template>
  <div>
    <div>
      <div class="user-info">
        <div class="name">
          <h5>از غرفه:</h5>
          <h5 class="Vendor-Name">{{  vendor.vendor.name  }}</h5>
        </div>
      </div>
      <SumProduct
        v-for="item in vendor.items"
        :VendorID="vendor.id"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
import Pay from "@/components/ForBasket/Pay.vue";
import SumProduct from "@/components/ForBasketPayment/SumProduct.vue";
export default {
  name: "vendor",
  components: {
    Pay,
    SumProduct,
  },
  props: ["vendor"],
};
</script>
<style scoped>
.Vendor-Name {
  padding-right: 4px;
}
.user-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.6rem 1rem;
}
.name {
  display: flex;
  width: 100%;
  padding-bottom: 7px;
}
h5{
  font-size: 0.8rem;
  font-weight: 400;
  color: #3E3E3E;
}
</style>

