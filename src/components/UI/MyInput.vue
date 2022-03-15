<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(evt) {
      this.$emit("update:modelValue", evt.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
