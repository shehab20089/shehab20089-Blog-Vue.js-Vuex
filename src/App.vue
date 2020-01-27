<template>
  <!-- I used vutify css farmework for vue js which applies google's material design -->
  <v-app>
    <v-app-bar color="orange" app>
      <div class="d-flex">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/blogger-logo.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Blog Task</h1>
      </div>

      <!-- here v spacer will take all avialbe space  -->
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="grey lighten-4 mt-11">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>

<style >
</style>
