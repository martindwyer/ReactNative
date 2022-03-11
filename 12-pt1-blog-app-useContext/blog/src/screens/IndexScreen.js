import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const value = useContext(BlogContext);
  const posts = value.data;
  const addBlogPost = value.addBlogPost;

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={posts}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default IndexScreen;
