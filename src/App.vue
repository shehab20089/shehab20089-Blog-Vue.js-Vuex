<template>
  <!-- I used vutify css farmework for vue js which applies google's material design -->
  <v-app>
    <!-- ----------------------------------------------------------- -->
    <!-- APP BAR HEDAER AREA  -->
    <!-- ----------------------------------------------------------- -->
    <div class="grey lighten-3">
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

          <h1 class="font-weight-black">
            Blog
            <span class="font-weight-medium">Task</span>
          </h1>
        </div>

        <!-- here v spacer will take all avialbe space  -->
        <v-spacer></v-spacer>
      </v-app-bar>

      <!-- ----------------------------------------------------------- -->
      <!-- APP CONTENT AREA  -->
      <!-- ----------------------------------------------------------- -->
      <v-content class="my-11">
        <router-view></router-view>
      </v-content>

      <!-- ----------------------------------------------------------- -->
      <!-- APP FOOTER AREA  -->
      <!-- ----------------------------------------------------------- -->
      <v-footer class="black font-weight-medium">
        <v-col class="text-center orange--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>BlogTask</strong>
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({})
};
</script>
