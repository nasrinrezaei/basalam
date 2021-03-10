
<template>
  <div class="pre-address">
    <h5 class="name">{{ PreAddress.name }}</h5>
    <button class="new-address-button">
      <img src="@/assets/pic/pen.png" />
    </button>
    <div class="exist-addres">
      <Chose @select="ADD_ADRDRESS(PreAddress.id)" :name="'address'">
        <p>{{ PreAddress.loction }}</p>
      </Chose>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Chose from "@/components/Share/Chose.vue";
export default {
  name: "Preaddress",
  props: ["PreAddress"],
  components: {
    Chose,
  },
  methods: {
    ...mapActions(["ADD_ADRDRESS"]),
  },
};
</script>
<style scoped>
.pre-address {
  background-color: white;
  padding: 1rem 0.5rem 0rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
}
.new-address-button {
  border-radius: 6.25rem;
  border: 0rem;
  padding: 0.3rem 0.3rem;
}
.name {
  padding-right: 2rem;
  width: 75%;
  font-size: 0.8rem;
  font-weight: 400;
  color: #3e3e3e;
}
.exist-addres {
  background-color: white;
  padding: 0.3rem 0.2rem;
}
h5,
p {
  font-size: 14px;
  font-weight: 400;
}
</style>