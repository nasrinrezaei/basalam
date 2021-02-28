
<template>
  <div id="app">
    <Header />
    <buttoncontainer />
    <Vendor v-for="item in getcart" :key="item.id" :vendor="item" />
    <cash />
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Buttoncontainer from "./components/buttoncontainer.vue";
  import cash from "./components/cash.vue";
  import Vendor from "./components/vendor.vue";
  import {mapGetters} from "vuex"
  export default {
      computed:{
      ...mapGetters(['getcart'])
    },
    components: {
      Header,
      Vendor,
      Buttoncontainer,
      cash,
    },
  };
  </script>
