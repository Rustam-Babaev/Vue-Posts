<template>
  <form class="form">
    <h4>Create post</h4>
    <my-input v-model="post.title" type="text" placeholder="title" />
    <my-input v-model="post.body" type="text" placeholder="description" />
    <my-button class="my-button_position_create" @click="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
import MyInput from "./UI/MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost(evt) {
      evt.preventDefault();
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        post: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.my-button_position_create {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
