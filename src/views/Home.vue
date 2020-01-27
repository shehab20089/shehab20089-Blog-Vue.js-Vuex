<template>
  <div>
    <div v-for="(post, index) in getPosts" :key="index">
      <!-- using my created postcard component to view the post content -->
      <postCard class="mb-10" :postData="post" :commentNum="getcommentLength(post.id)" />
    </div>
  </div>
</template>

<script>
//the card for each post
import postCard from "../components/PostCard";

//a class which will make it easier to acess all vuex store props
import StoreConstants from "../store/storeConstants";

//this helper will allow to easily acess vuex store easily by using the spread operator
//it will get all getters from the store
import { mapGetters } from "vuex";

//just making it easier to acess getters by getter name
let getters = StoreConstants.getters;

export default {
  name: "home",

  components: {
    //here is a list of all user created components we use in this view
    postCard
  },
  computed: {
    //This is es6 spread operator which will assign all properties in mapGetters Into computed obj
    //and this props are vuex store getter props
    ...mapGetters([getters.getPosts, getters.getcommentLength])
  }
};
</script>

<style  scoped>
</style>