<template>
  <div id="app">
    <Header />
    <div v-if="loading">...loading</div>
    <Button v-else-if="loadError" @push-button="getData" :size="'large'"  :block="true" class="try">try again
    </Button>
    <router-view v-else />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Button from "@/components/Share/Button.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    Button,
  },
  data() {
    return {
      loading: false,
      loadError: null,
    };
  },
  methods: {
    ...mapActions(["GET_DATA"]),
    async getData() {
      try {
        this.loading = true;
        await this.GET_DATA();
      } catch (error) {
        this.loadError = error;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  direction: rtl;
  box-sizing: border-box;
}
h5 {
  font-family: IRANSans;
  font-style: normal;
}
button:focus {
  outline: none;
}
button {
  border: none;
}
a {
  text-decoration: none;
}
</style>
<style scoped>
#app {
  width: 360px;
}
.try{
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>