import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// I Used Vuex to mange my app state throught the application
export default new Vuex.Store({
  // the state of our application which in this case is the posts which have a list of post obj
  state: {
    posts: [
      {
        id: 1,
        title: "title1",
        image: "paris.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 1,
            author: "user 6516asd1 ",
            commentContent:
              "hello i think this is the best post i have ever seeen in my entire life",
            secondLComments: [
              { author: "userX", commentContent: "YEAH I AGREE" },
              { author: "userX5161", commentContent: "Nope" },
              { author: "userX5161x16x1", commentContent: "YEAH I AGREE" }
            ]
          },
          {
            id: 2,
            author: "user 205315",
            commentContent: "I think this is the worst post i have ever seen",
            secondLComments: [
              {
                author: "user 489489",
                commentContent: "Why i thought it was good enough"
              }
            ]
          },
          {
            id: 3,
            author: "user 561981 ",
            commentContent: "nice nice nice",
            secondLComments: [{ author: "user 41984984", commentContent: ":D" }]
          }
        ]
      },
      {
        id: 2,
        title: "title2",
        image: "nightProgrammer.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 4,
            author: "user 414865asd1618161 ",
            commentContent:
              "hello i think this is the best post i have ever seeen in my entire life",
            secondLComments: [
              { author: "userX", commentContent: "YEAH I AGREE" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "title3",
        image: "canada.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 5,
            author: "user 516651asdsa61 ",
            commentContent:
              "hello i think this is the best post i have ever seeen in my entire life",
            secondLComments: [
              { author: "userX", commentContent: "YEAH I AGREE" }
            ]
          },

          {
            id: 6,
            author: "user 561981 ",
            commentContent: "not bad",
            secondLComments: [
              { author: "user 41984984", commentContent: "yeah i guess" }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "title4 ",
        image: "nature1.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 7,
            author: "user 65161 ",
            commentContent:
              "hello i think this is the best post i have ever seeen in my entire life",
            secondLComments: [
              { author: "userX", commentContent: "YEAH I AGREE" }
            ]
          },

          {
            id: 8,

            author: "user 561981 ",
            commentContent: "nice nice nice",
            secondLComments: [{ author: "user 41984984", commentContent: ":D" }]
          }
        ]
      },
      {
        id: 5,
        title: "title5 ",
        image: "tokyo.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: []
      }
    ]
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
