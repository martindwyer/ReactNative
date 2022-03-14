import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

const BlogPostForm = ({
  navigation,
  pageTitle,
  postTitleLabel,
  postTitleValue,
  postContentLabel,
  postContentValue,
  submitFunction,
  submitLabel,
  postId,
}) => {
  const [title, setTitle] = useState(postTitleValue);
  const [content, setContent] = useState(postContentValue);

  return (
    <View>
      <Text style={styles.title}>{pageTitle}</Text>

      <Text style={styles.label}>{postTitleLabel}</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>{postContentLabel}</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(content) => setContent(content)}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          submitFunction(title, content, postId, () => {
            navigation.navigate("Index");
          });
        }}
      >
        <Text style={styles.buttonText}>{submitLabel}</Text>
      </Pressable>
    </View>
  );
};

const buttonWidth = "50%";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    maxWidth: buttonWidth,
    alignSelf: "center",
    backgroundColor: "blue",

    padding: 10,

    borderRadius: 8,
  },

  buttonText: {
    color: "white",
  },
});

export default BlogPostForm;
