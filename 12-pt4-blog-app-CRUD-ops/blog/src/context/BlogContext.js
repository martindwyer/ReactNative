import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "delete_post":
      return state.filter((post) => post.id !== action.payload);
    case "add_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
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
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, id = null, callback) => {
    dispatch({
      type: "add_post",
      payload: { title: title, content: content, id: id },
    });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (title, content, id, callback) => {
    dispatch({
      type: "edit_post",
      payload: { id: id, title: title, content: content },
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_post", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "first post", content: "First post content", id: 1 }]
);
