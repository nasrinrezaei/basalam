<template>
  <div class="product">
    <div class="product-info">
      <img class="pic" :src="product.product.photoUrl" />
      <h5>{{ product.product.name }}</h5>
    </div>
    <div class="price">
      <h5>ن</h5>
      <h5>
        <del>{{ product.product.primaryPrice }}</del>
      </h5>
      <h5>{{ price }}</h5>
      <h5>توما</h5>
    </div>
    <div>
      <div class="button-number">
        <div class="button">
          <button
            class="butt min"
            @mousedown="ChangeMin()"
            @mouseup="stop()"
            @mouseout="stop()"
          >
            <img src="@/assets/pic/min.png" />
          </button>
          <div class="number">{{ product.quantity }}</div>
          <button
            class="butt plus"
            @mousedown="ChangePlus()"
            @mouseup="stop()"
            @mouseout="stop()"
          >
            <img src="@/assets/pic/plus.png" />
          </button>
        </div>
        <button class="butt" @click="DELETE_ITEM(idInfo)">
          <img src="@/assets/pic/trash.png" />
        </button>
      </div>
      <h5 class="save">ذخیره در لیست بعدی</h5>
    </div>
    <h5 class="stock" v-if="stock">موجودی کافی نیست</h5>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Product",
  props: ["product", "VendorID"],
  data() {
    return {
      price: this.product.product.price,
      repeat: 1000,
      number: 0,
      step: String,
      stock: false,
      idInfo: {
        vendorID: this.VendorID,
        productID: this.product.product.id,
      },
    };
  },
  methods: {
    ...mapActions(["CHANGE_NUMBER_PLUS", "CHANGE_NUMBER_MIN", "DELETE_ITEM"]),
    ChangeMin() {
      this.stock = false;
      let data = {
        ...this.idInfo,
        op: -1,
      };
      this.CHANGE_NUMBER_MIN(data);
      this.repeat /= 3;
      this.price = this.product.product.price * this.product.quantity;
      this.step = setTimeout(() => this.ChangeMin(), this.repeat);
    },
    ChangePlus() {
      if (this.product.quantity < this.product.product.stock) {
        let data = {
          ...this.idInfo,
          op: 1,
        };
        this.CHANGE_NUMBER_PLUS(data);
        this.repeat /= 3;
        this.price = this.product.product.price * this.product.quantity;
        this.step = setTimeout(() => this.ChangePlus(), this.repeat);
      } else this.stock = true;
    },
    stop() {
      clearTimeout(this.step);
      this.repeat = 1000;
    },
  },
};
</script>
<style scoped>
.price + div,
.product-info {
  display: flex;
}
.price + div {
  width: 100%;
}
.product-info h5 {
  font-size: 0.7rem;
  padding-right: 1rem;
}
.pic {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}
.product {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  border-bottom: 1px solid #e5e5e5;
}
.product:nth-child(4) {
  border-bottom: 2px solid #eeeeee;
  
}
.price {
  width: 100%;
  display: flex;
  position: relative;
}
.price h5 {
  font-size: 0.8rem;
  font-style: normal;
}
.price h5:first-child {
  position: absolute;
  left: 3px;
  bottom: 0.7rem;
}
del {
  color: #9d9d9d;
}
.price h5:nth-child(2) {
  margin-right: auto;
  padding-left: 0.6rem;
}
.price h5:nth-child(4) {
  padding-right: 5px;
}
.save {
  align-items: center;
  text-align: center;
  color: #7d7d7d;
  display: flex;
  border-bottom: 2px dotted #7d7d7d;
  margin-right: auto;
}
.button-number {
  display: flex;
}
.button {
  display: flex;
}
.number {
  border: solid 2px #eeeeee;
  border-radius: 0.3rem;
  padding: 0.1rem 0.6rem;
  display: flex;
  align-items: center;
  margin: 0rem 0.3rem;
  color: #3e3e3e;
}
.butt {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  border-style: none;
  border-radius: 6.25rem;
}
h5 {
  color: #3e3e3e;
  font-weight: 400;
}
.butt:nth-child(2) {
  margin-right: 1.3rem;
}
.stock {
  padding-top: 1rem;
}
</style>