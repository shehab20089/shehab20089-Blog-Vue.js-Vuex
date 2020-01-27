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
        <v-list three-line>
          <template>
            <v-subheader class="headline black--text">Comments</v-subheader>

            <v-divider></v-divider>

            <v-list-item v-for="(comment, index) in getPostById(id).comments" :key="index">
              <v-list-item-avatar size="50" color="grey">
                <!-- <v-img></v-img> -->
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="title">{{comment.author}}</v-list-item-title>
                <v-list-item-subtitle>{{Date().substring(0,16)}}</v-list-item-subtitle>
                <p class="body-2">{{comment.commentContent}}</p>
                <v-list v-if="comment.secondLComments.length>0" three-line>
                  <template>
                    <v-subheader>Replies</v-subheader>

                    <v-divider></v-divider>

                    <v-list-item
                      v-for="(commenLvl2, index) in comment.secondLComments"
                      :key="index"
                    >
                      <v-list-item-avatar size="50" color="grey"></v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title class="title">{{commenLvl2.author}}</v-list-item-title>
                        <v-list-item-subtitle>{{Date().substring(0,16)}}</v-list-item-subtitle>
                        <p class="body-2">{{commenLvl2.commentContent}}</p>
                      </v-list-item-content>
                    </v-list-item>
                    <div class="d-flex align-content-center">
                      <v-avatar class="mr-6" size="50" color="grey"></v-avatar>
                      <v-text-field
                        @keyup.enter="addComment2LvlStore(comment.id,index)"
                        class="mt-2"
                        solo
                        clearable
                        rounded
                        :id="'lvl2Comment'+index"
                        dense
                        name="comment"
                        hint="press enter to add  Comment"
                        label="Add Comment"
                      ></v-text-field>
                    </div>
                  </template>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <div class="d-flex align-content-center">
          <v-avatar class="mr-6" size="50" color="grey"></v-avatar>
          <v-text-field
            @keyup.enter="addCommentStore"
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
      </div>
    </v-card>
  </div>
</template>

<script>
import StoreConstants from "../store/storeConstants";

//this helper will allow to easily acess vuex store easily by using the spread operator
//it will get all getters from the store
import { mapGetters, mapActions } from "vuex";

//just making it easier to acess getters
let actions = StoreConstants.actions;
let getters = StoreConstants.getters;
export default {
  name: "post",
  data() {
    return {
      id: this.$route.params.id,
      commentText: "",
      comment2LevelText: ""
    };
  },
  components: {
    // postCard
  },
  methods: {
    ...mapActions([actions.addComment, actions.addlvl2Comment]),

    addCommentStore: function() {
      //this comment to avoid eslint console error
      // eslint-disable-next-line no-console

      // i have hard coded author name to current user of course this should be dynamic but for testing the
      //features of this task i wil hard code it
      let newCommentobj = {
        id: Date.now(),
        author: "current User",
        commentContent: this.commentText,
        secondLComments: []
      };
      this.addComment({ postid: this.id, comment: newCommentobj });
      this.commentText = "";
    },
    addComment2LvlStore: function(CommentId, index) {
      let commentLVL2 = document.getElementById("lvl2Comment" + index).value;

      document.getElementById("lvl2Comment" + index).value = "";
      let newCommentobj = {
        author: "current User",
        commentContent: commentLVL2
      };
      this.addlvl2Comment({
        postid: this.id,
        commentid: CommentId,
        comment: newCommentobj
      });
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