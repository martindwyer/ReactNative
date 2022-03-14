import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const post = state.find((item) => item.id === navigation.getParam("id"));

  return (
    <View>
      <BlogPostForm
        navigation={navigation}
        pageTitle="Edit Blog Post"
        postTitleValue={post.title}
        postTitleLabel="Edit Post Title"
        postContentLabel="Edit Post Content"
        postContentValue={post.content}
        submitFunction={editBlogPost}
        submitLabel="Edit Post"
        postId={post.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
