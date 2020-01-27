<template>
  <!-- using vutify farmework card for this component -->

  <v-card class="mx-auto hover-effect" max-width="600">
    <!-- ----------------------------------------------------------- -->
    <!-- IMAGE WITH TITLE  AREA-->
    <!-- ----------------------------------------------------------- -->

    <router-link :to=" route.Post+`/${postData.id}` " class="d-block">
      <v-img
        class="white--text align-end"
        height="200px"
        v-bind:src="require('../assets/'+postData.image)"
      >
        <v-card-title>{{postData.title |textFilter}}</v-card-title>
      </v-img>

      <!-- ----------------------------------------------------------- -->
      <!-- AUTHOR AREA  -->
      <!-- ----------------------------------------------------------- -->
      <v-card-text class="text--primary">
        <div>Posted By :</div>
        <div class="ml-10 headline">{{postData.author |textFilter}}</div>
      </v-card-text>

      <!-- ----------------------------------------------------------- -->
      <!-- BUTTON AND COMMENT NUMBER AREA  -->
      <!-- ----------------------------------------------------------- -->
      <v-card-actions>
        <v-btn color="orange" text>Open</v-btn>
        <v-spacer></v-spacer>
        <div>
          <v-btn disabled text>
            {{commentNum}} Comments
            <v-icon right>mdi-comment</v-icon>
          </v-btn>
        </div>
      </v-card-actions>
    </router-link>
  </v-card>
</template>

<script>
//easier to acess the route through static properties of a class
import route from "../router/routePaths";

export default {
  props: {
    //this is the obj with all data of the post
    postData: Object,
    //this is a prop for the comments count in this post (1st level + 2nd level)
    commentNum: Number
  },

  data() {
    return {
      route
    };
  }
};
</script>

<style scoped>
/*  scale up when hover with transtion */
.hover-effect {
  transition: transform 0.2s;
}
.hover-effect:hover {
  transform: scale(1.07);
}
</style>