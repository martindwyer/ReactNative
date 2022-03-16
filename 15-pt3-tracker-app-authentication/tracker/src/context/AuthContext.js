import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signout = (dispatch) => {
  return (email, password) => {};
};

const signin = (dispatch) => {
  return (email, password) => {};
};

const signup = (dispatch) => {
  return async (email, password) => {
    try {
      const response = await trackerApi.post("/signup", {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({ type: "add_error", payload: "Something went wrong" });
    }
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
