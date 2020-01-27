import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// I Used Vuex to mange my app state throught the application
export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: "title1",
        image: "../assets/frozed.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [{}]
      },
      {
        id: 2,
        title: "title2",
        image: "../assets/media.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [{}]
      },
      {
        id: 3,
        title: "title3",
        image: "../assets/child1.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [{}]
      },
      {
        id: 4,
        title: "title4 ",
        image: "../assets/tokyo-wallpaper-24391-25051-hd-wallpapers.jpg",
        author: "writer tester",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [{}]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    //get posts while filter
    getPosts: state => searchText => {
      // console.log("arrived");

      //return all posts if no search text is passed
      if (searchText == null) return 10;
      //return filter posts by search result
      return state.posts.filter(post => {
        return post.author.includes(searchText);
      });
    },

    //get post by post id
    getPostById: state => id => {
      return state.posts.find(post => post.id == id);
    }
  },
  modules: {}
});
