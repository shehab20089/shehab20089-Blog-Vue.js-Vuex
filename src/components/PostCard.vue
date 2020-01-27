<template>
  <v-card class="mx-auto" max-width="600">
    <!-- ----------------------------------------------------------- -->
    <!-- IMAGE WITH TITLE  AREA-->
    <!-- ----------------------------------------------------------- -->
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <!-- ----------------------------------------------------------- -->
    <!-- AUTHOR AREA  -->
    <!-- ----------------------------------------------------------- -->
    <v-card-text class="text--primary">
      <div>Posted By :</div>
      <!-- <v-img > -->
      <div class="ml-12">Shehab</div>
    </v-card-text>

    <!-- ----------------------------------------------------------- -->
    <!-- BUTTON AND COMMENT AREA  -->
    <!-- ----------------------------------------------------------- -->
    <v-card-actions>
      <v-btn color="orange" text>Open</v-btn>
      <v-spacer></v-spacer>
      <div>
        <v-btn disabled color="orange" text>
          10 Comments
          <v-icon right>mdi-comment</v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  //   props: {
  //     post
  //   }
};
</script>

<style>
</style>