<template>
  <div class="buttoncontainer">
    <button class="basktsll">سبد خرید</button>
    <button>لیست خرید بعدی</button>
  </div>
</template>
<script>
export default {
  name: "ButtonContainer",
};
</script>
<style scoped>
.buttoncontainer {
  border-top: 0.5rem solid#E5E5E5;
}
.buttoncontainer button {
  font-family: IRANSans;
  font-size: 0.8rem;
  font-weight: 700;
}
.buttoncontainer button:first-child {
  border-bottom: 2px solid #df3856;
  color: #df3856;
}
.buttoncontainer button:nth-child(2) {
  border-bottom: 2px solid #dfdfdf;
  color: #7d7d7d;
}
.basktsll + button,
.basktsll {
  height: 2.5rem;
  width: 50%;
  background-color: white;
  border: 1px solid white;
}
</style>