import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend 1",
      age: 32,
    },
    {
      name: "Friend 2",
      age: 25,
    },
    {
      name: "Friend 3",
      age: 45,
    },
    {
      name: "Friend 4",
      age: 52,
    },
    {
      name: "Friend 5",
      age: 19,
    },
    {
      name: "Friend 6",
      age: 21,
    },
  ];
  return (
    <FlatList
      vertical
      showsHorizontalScrollIndicator={true}
      data={friends}
      keyExtractor={(friend) => {
        return friend.name;
      }}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name}- Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginLeft: 20,
    marginVertical: 50,
  },
});

export default ListScreen;
