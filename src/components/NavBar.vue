<template>
  <div class="navbar">
    <h3 @click="$router.push('/')">Vue posts</h3>
    <div class="navbar__btns">
      <my-button class="navbar__btn" @click="$router.push('/posts')"
        >Posts</my-button
      ><my-button @click="$router.push('/about')">About company</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  height: 50px;
  background: rgb(199, 231, 227);
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  display: flex;
  margin-left: auto;
}
.navbar__btn {
  margin-right: 15px;
}
</style>
