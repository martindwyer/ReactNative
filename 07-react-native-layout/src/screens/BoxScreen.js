import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>BoxScreen 1</Text>
      <Text style={styles.textTwoStyle}>BoxScreen 2</Text>
      <Text style={styles.textThreeStyle}>BoxScreen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 500,
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  textOneStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: "red",
    margin: 20,
    padding: 10,
    backgroundColor: "green",
    color: "white",
  },
  textTwoStyle: {
    height: 200,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "blue",
    color: "white",
    margin: 20,
    padding: 10,
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 0,
  },
  textThreeStyle: {
    height: 150,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    color: "white",
    margin: 20,
    padding: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default BoxScreen;
