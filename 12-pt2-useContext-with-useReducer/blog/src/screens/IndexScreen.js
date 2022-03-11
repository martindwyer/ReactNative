import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.post}>
              <Text style={{ fontSize: 24 }}>{item.title}</Text>
              <AntDesign
                name="delete"
                style={{ marginLeft: 40 }}
                size={24}
                color="black"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const postWidth = "80%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  post: {
    fontSize: 24,
    paddingVertical: 20,
    width: postWidth,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default IndexScreen;
