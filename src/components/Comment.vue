<template>
  <div class="ma-5">
    <v-list three-line>
      <template>
        <v-subheader class="headline black--text">Comments ({{getcommentLength(postId)}})</v-subheader>

        <v-divider></v-divider>

        <v-list-item v-for="(comment, index) in getPostById(postId).comments" :key="index">
          <v-list-item-avatar size="50" color="grey"></v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title">{{comment.author}}</v-list-item-title>
            <v-list-item-subtitle>{{Date().substring(0,16)}}</v-list-item-subtitle>
            <p class="body-2">{{comment.commentContent}}</p>
            <v-list three-line>
              <template v-if="comment.secondLComments.length>0">
                <v-subheader>Replies</v-subheader>

                <v-divider></v-divider>

                <v-list-item v-for="(commenLvl2, index) in comment.secondLComments" :key="index">
                  <v-list-item-avatar size="50" color="grey"></v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="title">{{commenLvl2.author}}</v-list-item-title>
                    <v-list-item-subtitle>{{Date().substring(0,16)}}</v-list-item-subtitle>
                    <p class="body-2">{{commenLvl2.commentContent}}</p>
                  </v-list-item-content>
                </v-list-item>
              </template>
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
                  hint="press enter to add Comment"
                  label="Replay to comment"
                ></v-text-field>
              </div>
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
</template>

<script>
//to easily acess the store properties
import StoreConstants from "../store/storeConstants";

//this helper will allow to easily acess vuex store easily by using the spread operator
//it will get all getters from the store
import { mapGetters, mapActions } from "vuex";

//just making it easier to acess getters
let actions = StoreConstants.actions;
let getters = StoreConstants.getters;

export default {
  name: "comment",
  props: { postId: Number },
  data() {
    return {
      //the id of the post which  will be passed from the parameters

      //adding the level1 comment text to easily add bind it to the iput text field
      commentText: ""
    };
  },

  methods: {
    ...mapActions([actions.addComment, actions.addlvl2Comment]),

    //adding comment to the store (level1)
    addCommentStore: function() {
      //the new comment object to send
      let newCommentobj = {
        id: Date.now(),
        author: "current User",
        commentContent: this.commentText,
        secondLComments: []
      };

      //using the add comment mapped action to do some action to the store (state)
      this.addComment({ postid: this.postId, comment: newCommentobj });

      //reset the text  of the textfield
      this.commentText = "";
    },

    //adding comment to the store (level2)

    addComment2LvlStore: function(CommentId, index) {
      //get the element by id cause i can't use the same way as leve1
      //as there is many many level 2 comment input fields
      let commentLVL2 = document.getElementById("lvl2Comment" + index).value;

      document.getElementById("lvl2Comment" + index).value = "";
      let newCommentobj = {
        author: "current User",
        commentContent: commentLVL2
      };
      this.addlvl2Comment({
        postid: this.postId,
        commentid: CommentId,
        comment: newCommentobj
      });
    }
  },
  computed: {
    ...mapGetters([getters.getPostById, getters.getcommentLength])
  }
};
</script>

<style>
</style>