import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "delete_post":
      return state.filter((post) => post.id !== action.payload);
    case "add_post":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_post":
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        } else {
          return post;
        }
      });

    case "get_posts":
      return action.payload;

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/posts");
    dispatch({ type: "get_posts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, id = null, callback) => {
    const newPostId = Math.floor(Math.random() * 999999);
    await jsonServer.post("/posts", { id: newPostId, title, content });
    dispatch({
      type: "add_post",
      payload: { title: title, content: content, id: newPostId },
    });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return async (title, content, id, callback) => {
    await jsonServer.put(`/posts/${id}`, { title, content });
    dispatch({
      type: "edit_post",
      payload: { id: id, title: title, content: content },
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/posts/${id}`);
    dispatch({ type: "delete_post", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
