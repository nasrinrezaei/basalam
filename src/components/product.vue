<template>
  <div class="informationpro">
    <img :src="product.picture" />
    <h5>{{ product.name }}</h5>
    <div class="price">
      <h5>ن</h5>
      <h5>
        <del>{{ product.oldprice }}</del>
      </h5>
      <h5>{{ product.newprice }}</h5>
      <h5>توما</h5>
    </div>
    <div class="buttpro">
      <div class="button">
        <button class="butt min" @mousedown="change('min')" @mouseup="stop()">
          <img src=".././assets/pic/min.png" />
        </button>
        <div class="number">{{ product.number }}</div>
        <button class="butt plus" @mousedown="change('plus')" @mouseup="stop()">
          <img src=".././assets/pic/plus.png" />
        </button>
      </div>
      <button class="butt" @click="deleteitem(idInfo)">
        <img src=".././assets/pic/trash.png" />
      </button>
    </div>
    <h5 class="save">ذخیره در لیست بعدی</h5>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      price: this.product.newprice,
      repeat: 1000,
      number: 0,
      step: String,
      idInfo: {
        vendorID: this.VendorID,
        productID: this.product.id,
      },
    };
  },
  name: "product",
  props: ["product", "VendorID"],
  methods: {
    ...mapActions(["changenumber", "deleteitem"]),
    change(op) {
      let data = {
        ...this.idInfo,
        operation: op,
      }
      this.changenumber(data);
      this.repeat /= 3;
      this.step = setTimeout(() => this.change(op), this.repeat);
    },
    stop() {
      clearTimeout(this.step);
      this.repeat = 1000;
    },
  },
};
</script>