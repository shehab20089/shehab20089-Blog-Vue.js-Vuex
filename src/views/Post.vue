<template>
  <div>
    <P>Hello post {{$route.params.id}}</P>

    <div>
      <!-- using my created postcard component to view the post content -->
    </div>
  </div>
</template>

<script>
import StoreConstants from "../store/storeConstants";

//this helper will allow to easily acess vuex store easily by using the spread operator
//it will get all getters from the store
import { mapGetters } from "vuex";

//just making it easier to acess getters
let getters = StoreConstants.getters;
export default {
  name: "post",

  components: {
    // postCard
  },
  computed: {
    ...mapGetters([getters.getPosts])
  }
};
</script>

<style>
</style>