<template>
  <div>
    <ul>
      <li>
        <postCard class="mb-10" :postData="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import postCard from "../components/PostCard";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    postCard
  }
};
</script>

<style  scoped>
</style>