<template>
  <div class="sendaddress">
    <div class="new">
      <button class="back" @click="back">
        <img src="@/assets/pic/flesh.png" />
      </button>
      <slot></slot>
    </div>
    <button v-if="this.new" class="newaddress">
      <img src="@/assets/pic/new.png" />
      <h5>آدرس جدید</h5>
    </button>
  </div>
</template>
<script>
export default {
  name: "Back",
  methods: {
    back() {
      this.$router.push(this.BackPage);
    },
  },
  props: ["new","BackPage"],
};
</script>
<style scoped>
.new {
  display: flex;
  align-items: center;
}
 .newaddress {
  display: flex;
  padding: 0rem 1.2rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  border: 1px solid #9d9d9d;
  align-items: center;
  background-color: white;
  margin-right: auto;
} 
.sendaddress {
  padding: 1rem 1rem 0rem 1rem;
  display: flex;
  align-items: center;
  border-top: 0.5rem solid #e5e5e5;
  background-color: white;
  width: 100%;
}
.back {
  border-radius: 50%;
  background-color: #eeeeee;
  border: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.9rem;
}
h5 {
  padding-right: 0.5rem;
  font-size: 1rem;
  padding-right: 0.5rem;
  color: #3E3E3E;
} 
.new h5{
  font-weight:400;
}
.newaddress h5{
  font-weight:700;
}
</style>