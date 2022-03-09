import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text
        style={{
          color: "blue",
          fontSize: 30,
          marginVertical: 20,
          alignSelf: "center",
        }}
      >
        App Home Page
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
      >
        <Text style={styles.text}>Components Demo</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.text}>List Demo</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
      >
        <Text style={styles.text}>Image Demo</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text style={styles.text}>Counter Demo</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Color")}
      >
        <Text style={styles.text}>Color Demo</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Square")}
      >
        <Text style={styles.text}>Square Demo</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Text")}
      >
        <Text style={styles.text}>Text Demo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 400,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default HomeScreen;
