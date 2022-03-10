import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const component_width = "90%";
const component_height = 50;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.component}>
      <FontAwesome
        name="search"
        style={styles.iconStyle}
        size={32}
        color="black"
      />
      <TextInput
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    height: component_height,
    width: component_width,
    backgroundColor: "#F0EEEE",
    marginVertical: 30,
    height: 50,
    borderRadius: 8,
    flexDirection: "row",
    alignSelf: "center",
  },
  iconStyle: {
    alignSelf: "center",
    marginLeft: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SearchBar;
