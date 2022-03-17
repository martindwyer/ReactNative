import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, currentLocation: action.payload };
    case "add_track_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const changeName = (dispatch) => {
  return (name) => {
    dispatch({ type: "change_name", payload: name });
  };
};

const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: "start_recording" });
  };
};

const stopRecording = (dispatch) => {
  return () => {
    dispatch({ type: "stop_recording" });
  };
};

const addLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: "add_location", payload: location });
  };
};

const addTrackLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: "add_track_location", payload: location });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { startRecording, stopRecording, addLocation, addTrackLocation, changeName },
  { recording: false, locations: [], currentLocation: null, name: "" }
);
