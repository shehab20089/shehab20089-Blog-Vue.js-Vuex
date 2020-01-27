//made this class to easily using route names in my views and components
export default class StoreConstants {
  static getters = {
    getPosts: "getPosts",
    getPostById: "getPostById",
    getcommentLength: "getcommentLength"
  };

  static actions = {
    addComment: "addComment",
    addlvl2Comment: "addlvl2Comment"
  };
}
