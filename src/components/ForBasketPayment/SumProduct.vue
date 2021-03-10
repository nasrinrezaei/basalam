<template>
  <div class="information-product">
    <img class="pic" :src="product.product.photoUrl" />
    <div class="name-oldprice">
      <h5>{{product.product.name}}</h5>
      <div>
        <h5>{{ product.quantity }} عدد</h5>
        <h5>
          <del>{{ product.product.primaryPrice }}</del>
        </h5>
      </div>
      <div class="price">
        <h5>ن</h5>
        <h5>{{ product.product.price }}</h5>
        <h5>توما</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>
<style scoped>
.pic{
  width:80px;
  height: 80px;
  border-radius: 8px;
}
.information-product:last-child{
  border-bottom: 1px solid white;
}
.name-oldprice div {
  display: flex;
}
.name-oldprice div h5:nth-child(2) {
  padding-right: 10.3rem;
  padding-bottom: 3px;
}
.name-oldprice h5 {
  font-size: 0.7rem;
  font-weight: 400;
}
.name-oldprice {
  padding: 0rem 1rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 

} 
.information-product {
  display: flex;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e5e5e5;
}
.information-product:nth-child(4) {
  border-bottom: 2px solid #eeeeee;
}
.information-product > h5 {
  font-size: 0.8rem;
  font-weight: 400;
  padding-right: 0.6rem;
}
.price {
  width: 100%;
  display: flex;
  position: relative;
}
.price h5 {
  font-size: 0.8rem;
  font-weight: 400;
}
.price h5:first-child {
  position: absolute;
  left: 3px;
  bottom: 0.7rem;
  bottom: 15px;
}
.price h5:nth-child(2) {
  margin-right: auto;
  padding-left: 0.2rem;
}
del {
  color: #9d9d9d;
}
h5{
   color: #535353;
}
</style>