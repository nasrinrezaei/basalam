<template>
  <div class="vendor">
    <div >
      <div class="user-info">
        <div class="name">
          <h5>از غرفه:</h5>
          <h5 class="Vendor-Name">{{ vendor.vendor.name }}</h5>
        </div>
        <img class="pic" :src="vendor.vendor.owner.avatarUrl" />
        <div class="location-info">
          <h5>{{ vendor.vendor.owner.name }}</h5>
          <div>
            &nbsp;<img src="@/assets/pic/location.png" /> &nbsp;
            <h5>{{ vendor.vendor.owner.city }}</h5>
          </div>
        </div>
      </div>
      <Product
        v-for="item in vendor.items"
        :VendorID="vendor.vendor.id"
        :key="item.id"
        :product="item"
      />
    </div>
    <Pay :idofvendor="vendor.vendor.id" />
  </div>
</template>
<script>
import Pay from "@/components/ForBasket/Pay.vue";
import Product from "@/components/ForBasket/Product.vue";
export default {
  name: "vendor",
  components: {
    Pay,
    Product,
  },
  props: ["vendor"],
};
</script>
<style scoped>
.name h5:first-child {
  font-size: 0.8rem;
  font-weight: 400;
}
.pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.vendor {
  border-bottom: 0.3rem solid #e5e5e5;
}
.Vendor-Name {
  font-size: 0.8rem;
  font-weight: 700;
  padding-right: 4px;
  padding-bottom: 7px;
}
.user-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1.2rem 1rem 0.5rem;
}
.name {
  display: flex;
  width: 100%;
  padding-bottom: 7px;
}
.location-info {
  padding-right: 0.6rem;
}
.location-info img {
  height: 0.8rem;
}
.location-info img + h5 {
  padding-right: 0.3rem;
}
.location-info h5 {
  font-size: 0.6rem;
  font-weight: 400;
}
.location-info div {
  display: flex;
}
h5 {
  color: #3e3e3e;
}
</style>

