import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  return (
    <View>
      <Text>Enter something below: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value="hi there"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
