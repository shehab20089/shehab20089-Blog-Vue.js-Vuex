<template>
  <div>
    <div v-for="(post, index) in getPosts()" :key="index">
      <!-- using my created postcard component to view the post content -->
      <postCard class="mb-10" :postData="post" />
    </div>
  </div>
</template>

<script>
import postCard from "../components/PostCard";
import StoreConstants from "../store/storeConstants";

//this helper will allow to easily acess vuex store easily by using the spread operator
//it will get all getters from the store
import { mapGetters } from "vuex";

//just making it easier to acess getters
let getters = StoreConstants.getters;

export default {
  name: "home",

  components: {
    postCard
  },
  computed: {
    ...mapGetters([getters.getPosts])
  }
};
</script>

<style  scoped>
</style>