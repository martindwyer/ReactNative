import React from "react";
import { View, StyleSheet } from "react-native-elements";

const Spacer = ({ children }) => {
  return <View style="">{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
