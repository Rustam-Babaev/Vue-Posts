<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  display: block;
  min-width: 100px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
  transition: 0.4s;
}
.btn:hover {
  opacity: 0.6;
}
</style>
