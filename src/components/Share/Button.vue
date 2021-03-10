<template>
  <div>
    <component
      :is="isLink ? 'router-link' : 'button'"
      :to="link"
      :class="['button', size=='small' ? 'small' : 'large', { block: block }]"
       @click="onChange"
    >
      <slot> </slot>
    </component>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: ["block", "size", "isLink", "link"],
   methods: {
    onChange() {
      this.$emit('push-button')
    }
  }
};
</script>
<style scoped>
.button {
  border: none;
  color: white;
  border-radius: 100px;
  display: inline-block;
  background-color: #df3856;
}
.small{
  padding: 10px 26px;
  font-size:12px;
  font-weight: 400;
}
.large{
  font-size:1rem;
  font-weight: 700;
   padding: 13px 32px;
}
.block{
 
  padding: 13px 134px;
}
h5 {
  color: white;

}
</style>