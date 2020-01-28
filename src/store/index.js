import Vue from "vue";
import Vuex from "vuex";
//data is class which carry all the dummy data so we can keep the store clean
import data from "./data";

Vue.use(Vuex);
// I Used Vuex to mange my app state throught the application
export default new Vuex.Store({
  // the state of our application which in this case is the posts which have a list of post obj
  state: {
    posts: data.postData
  },

  //this object will have methods which will mutate the state of our vuex store
  mutations: {
    //this will add level 1 comment
    addCommentState: (state, payload) => {
      state.posts
        .find(post => post.id == payload.postid)
        .comments.push(payload.comment);
    },

    //this will add level 2 comment
    addlvl2Comment: (state, payload) => {
      var comment = state.posts
        .find(post => post.id == payload.postid)
        .comments.find(comment => comment.id == payload.commentid);
      // ensure that there is a first level comment
      if (comment != null) comment.secondLComments.push(payload.comment);
    }
  },
  // this action will commit all the wanted mutations methods

  actions: {
    // this will commit the addcomment mutation
    addComment: ({ commit }, payload) => {
      commit("addCommentState", payload);
    },
    // this will commit the addcomment mutation
    addlvl2Comment: (context, payload) =>
      context.commit("addlvl2Comment", payload)
  },
  getters: {
    //get all posts
    getPosts: state => {
      //return all posts if no search text is passed
      return state.posts;
    },

    //get post by post id
    getPostById: state => id => {
      return state.posts.find(post => post.id == id);
    },

    //get length of all comments in a post
    getcommentLength: state => id => {
      let allComments = state.posts.find(post => post.id == id).comments;
      let length = allComments.length;
      allComments.forEach(item => {
        length += item.secondLComments.length;
      });
      return length;
    }
  },
  modules: {}
});
