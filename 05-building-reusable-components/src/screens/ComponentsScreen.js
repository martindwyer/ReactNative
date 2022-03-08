import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Hi There!";
  const name = "Martin";
  return (
    <View>
      <Text style={styles.textStyle}>Components Screen</Text>
      <Text style={styles.subHeaderStyle}>
        {greeting}! My name is {name}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
