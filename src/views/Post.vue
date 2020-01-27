<template>
  <div>
    <v-card class="ml-12" max-width="800" min-height="500" shaped outlined>
      <v-img :src="require('../assets/'+getPostById(id).image) " height="400px"></v-img>
      <v-list-item three-line>
        <v-list-item-content>
          <!-- <div class="overline mb-4">{{}}</div> -->
          <v-list-item-title class="headline mb-1 display-1">{{getPostById(id).title |textFilter}}</v-list-item-title>
          <v-list-item-subtitle>Written by : {{getPostById(id).author |textFilter}}</v-list-item-subtitle>
        </v-list-item-content>
        {{ Date().substring(0,16)}}
        <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
      </v-list-item>

      <v-card-text class="text--primary">
        <div></div>
        <div class="ml-10 meduims">{{getPostById(id).content |textFilter}}</div>
      </v-card-text>

      <v-divider></v-divider>
      <comment :postId="parseInt(id)" />
    </v-card>
  </div>
</template>

<script>
//to easily acess the store properties
import StoreConstants from "../store/storeConstants";

//adding the logic of the comment into comment because it has so much
import comment from "../components/Comment";

//this helper will allow to easily acess vuex store easily by using the spread operator
//it will get all getters from the vuex store
import { mapGetters } from "vuex";

//just making it easier to acess getters of the vuex store
let getters = StoreConstants.getters;

export default {
  name: "post",
  data() {
    return {
      //the id of the post which  will be passed from the parameters
      id: this.$route.params.id
    };
  },
  components: {
    // adding the comment component to use it in this view
    comment
  },

  computed: {
    //spread opertaor to get selectd getters from vuex store
    ...mapGetters([getters.getPostById])
  }
};
</script>

