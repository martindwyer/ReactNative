import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const colorIncrement = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload <= 255 && state.red + action.payload
        ? { ...state, red: state.red + action.payload }
        : { ...state };

    case "green":
      return state.green + action.payload <= 255 && state.green + action.payload
        ? { ...state, green: state.green + action.payload }
        : { ...state };

    case "blue":
      return state.blue + action.payload <= 255 && state.blue + action.payload
        ? { ...state, blue: state.blue + action.payload }
        : { ...state };

    default:
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <Text>
      <View>
        <ColorCounter
          onIncrease={() => dispatch({ type: "red", payload: colorIncrement })}
          onDecrease={() =>
            dispatch({ type: "red", payload: -1 * colorIncrement })
          }
          color="Red"
        />
        <ColorCounter
          onIncrease={() =>
            dispatch({ type: "green", payload: colorIncrement })
          }
          onDecrease={() =>
            dispatch({ type: "green", payload: -1 * colorIncrement })
          }
          color="Green"
        />
        <ColorCounter
          onIncrease={() => dispatch({ type: "blue", payload: colorIncrement })}
          onDecrease={() =>
            dispatch({ type: "blue", payload: -1 * colorIncrement })
          }
          color="Blue"
        />
      </View>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      ></View>
    </Text>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
