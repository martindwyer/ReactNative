import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-elements";

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
