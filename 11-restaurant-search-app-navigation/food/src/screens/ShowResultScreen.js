import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const imageWidth = "80%";

const ShowResultScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  console.log(id);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: imageWidth,
    marginVertical: 10,
    alignSelf: "center",
  },
  nameStyle: {
    alignSelf: "center",
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ShowResultScreen;
