
<template>
  <div class="containerradiobutton">
    <label class="container">
      <slot></slot>
      <input
        type="radio"
        :name="name"
        @change="onChange"
        checked="checked"
        :v-model="picked"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Chose",
  props: ["picked","name"],

  methods: {
    onChange() {
      this.$emit('select')
    }
  }
};
</script>
<style scoped>
input:checked {
  width: 0px;
}
.containerradiobutton {
  background-color: white;
 padding:  0rem 0.2rem 0rem 3rem;
}
.namebutton {
  border-radius: 6.25rem;
  border: 0rem;
  padding: 0.3rem 0.3rem;
}
label {
  padding-right: 2rem;
  font-family: IRANSans;
  font-size: 0.8rem;
  font-weight: 400;
  color: #535353;
}
.container {
  display: block;
  cursor: pointer;
  position: relative;
}
.container input {
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 3px;
  right: 1px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border:2px solid #9D9D9D;
}
.container input:checked ~ .checkmark {
  background-color: #df3856;
  border: none;
}
.checkmark:after {
  content: "";
  position: absolute;
}
.container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
}
h5,
p {
  font-size: 14px;
  font-weight: 400;
}
</style>