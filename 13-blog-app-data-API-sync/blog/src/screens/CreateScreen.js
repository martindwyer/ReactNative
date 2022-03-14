import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <BlogPostForm
        navigation={navigation}
        pageTitle="Create Blog Post"
        postTitleLabel="Enter Post Title"
        postTitleValue=""
        postContentLabel="Enter Post Content"
        postContentValue=""
        submitFunction={addBlogPost}
        submitLabel="Add Post"
        postId={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
