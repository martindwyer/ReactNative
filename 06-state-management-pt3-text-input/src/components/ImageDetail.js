import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image style={styles.image} source={props.imageSource} />
      <Text>Image Name: {props.title}</Text>
      <Text>Image Score: {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
  },
});

export default ImageDetail;
