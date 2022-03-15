<template>
  <div v-if="posts.length > 0">
    <h3>List of posts</h3>
    <transition-group name="post-list">
      <post-item
        :key="post.id"
        v-for="post in posts"
        :post="post"
        @remove="$emit('remove', post)"
      ></post-item
    ></transition-group>
  </div>
  <h4 v-else class="postList__noPosts">Don't have any posts</h4>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.postList__noPosts {
  color: brown;
  font-size: 28px;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>
