<template>
  <div>
    <v-card class="ml-12" max-width="800" min-height="500" shaped outlined>
      <v-img :src="require('../assets/'+getPostById(id).image) " height="400px"></v-img>
      <v-list-item three-line>
        <v-list-item-content>
          <!-- <div class="overline mb-4">{{}}</div> -->
          <v-list-item-title class="headline mb-1 display-1">{{getPostById(id).title}}</v-list-item-title>
          <v-list-item-subtitle>Written by : {{getPostById(id).author}}</v-list-item-subtitle>
        </v-list-item-content>
        {{ Date().substring(0,16)}}
        <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
      </v-list-item>

      <v-card-text class="text--primary">
        <div></div>
        <div class="ml-10 meduims">{{getPostById(id).content}}</div>
      </v-card-text>

      <v-divider></v-divider>

      <div class="ma-5">
        <div class="d-flex align-content-center">
          <v-avatar class="mr-6" size="50" color="grey"></v-avatar>
          <v-text-field
            @keyup.enter="addComment()"
            class="mt-2"
            solo
            ref="CommentRef"
            clearable
            v-model="commentText"
            rounded
            dense
            name="comment"
            hint="press enter to add  Comment"
            label="Add Comment"
            id="id"
          ></v-text-field>
        </div>
        <v-list three-line>
          <template>
            <v-subheader>Comments</v-subheader>

            <v-divider inset="1"></v-divider>

            <v-list-item>
              <v-list-item-avatar size="50" color="grey">
                <!-- <v-img></v-img> -->
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>this is titile mother</v-list-item-title>
                <v-list-item-subtitle>this is subtitile</v-list-item-subtitle>
                <p class="subtitle-2">
                  adfsafadfdsfdsfsdfdfdsfsdfakshgisuadbfgiudsabgs
                  <br />adfsafadfdsfdsfsdfdfdsfsdfakshgisuadbfgiudsabgs
                  adfsafadfdsfdsfsdfdfdsfsdfakshgisuadbfgiudsabgs
                  adfsafadfdsfdsfsdfdfdsfsdfakshgisuadbfgiudsabgsasdsad
                  adfsafadfdsfdsfsdfdfdsfsdfakshgisuadbfgiudsabgs
                </p>
                <v-list three-line>
                  <template>
                    <v-subheader>Replies</v-subheader>

                    <v-divider inset="1"></v-divider>

                    <v-list-item @click="1+1">
                      <v-list-item-avatar size="50" color="grey">
                        <!-- <v-img></v-img> -->
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>this is titile mother</v-list-item-title>
                        <v-list-item-subtitle>this is subtitile</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-card>
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
  data() {
    return {
      id: this.$route.params.id,
      commentText: ""
    };
  },
  components: {
    // postCard
  },
  methods: {
    addComment: function() {
      //this comment to avoid eslint console error
      // eslint-disable-next-line no-console
      console.log(this.commentText);
      this.commentText = "";
    }
  },
  computed: {
    ...mapGetters([getters.getPostById])
  }
};
</script>

<style>
.bigdiv {
  height: 500px;
  width: 500px;
}
</style>