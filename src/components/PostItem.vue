<template>
  <div class="post">
    <div class="post__id">{{ post.id }}</div>
    <div class="post__title"><strong>Title</strong> {{ post.title }}</div>
    <div class="post__description">
      <strong>Description</strong> {{ post.body }}
    </div>
    <div class="post__btns">
      <my-button class="post__btn" @click="$router.push(`/posts/${post.id}`)"
        >Open</my-button
      >
      <my-button class="post__btn" @click="$emit('remove', post)"
        >Delete</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid teal;
  margin: 15px 0 0 0;
}
.post__btns {
  display: flex;
}
.post__btn {
  margin-left: 15px;
}
.post__id {
  min-width: 30px;
}
.post__title {
  width: 20%;
}
.post__description {
  width: 60%;
}
</style>
