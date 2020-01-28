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
        title: "best city in Europe",
        image: "paris.jpg",
        author: "Adam Jones",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 1,
            author: "alex200894 ",
            commentContent:
              "hello i think this is the best post i have ever seeen in my entire life",
            secondLComments: [
              { author: "ahmed", commentContent: "YEAH I AGREE" },
              { author: "khalid", commentContent: "Nope" },
              { author: "alex200894", commentContent: "why khalid?" }
            ]
          },
          {
            id: 2,
            author: "Ahmed Khan",
            commentContent: "I have visted better places to be honest",
            secondLComments: [
              {
                author: "youssef",
                commentContent: "I disagree with you i think it is the best "
              }
            ]
          },
          {
            id: 3,
            author: "Hend ",
            commentContent: "looking lovley",
            secondLComments: [
              { author: "Omar", commentContent: "ofcourse xmen" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "the best city in africa",
        image: "nightProgrammer.jpg",
        author: "Omar Ahmed",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 4,
            author: "Omnia ",
            commentContent:
              "I can't blive this city in believe this city in in africa",
            secondLComments: [
              { author: "userX", commentContent: "YEAH me too flash" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "best city in north amrica",
        image: "canada.jpg",
        author: "Jhon",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 5,
            author: "cathrine2001 ",
            commentContent: "i think new yourk is much better to be honest",
            secondLComments: [
              { author: "Brad", commentContent: "reallyyyyyy!" }
            ]
          },

          {
            id: 6,
            author: "roma ",
            commentContent: "not bad",
            secondLComments: [
              { author: "nidal", commentContent: "yeah i guess" }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "best water fall in the world ",
        image: "nature1.jpg",
        author: "Nature Lover",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 7,
            author: "mrBean ",
            commentContent:
              "i can't agree more I have visted it before and it was beautfull",
            secondLComments: [{ author: "Sondos", commentContent: "+1" }]
          },

          {
            id: 8,

            author: "AnimeLover ",
            commentContent: "really i think you i will add It to my to do list",
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
