import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: { term },
          location: "north palm beach",
        },
      });
      setResults(response.data.businesses);
      setError("");
    } catch (err) {
      setError("Cannot connect to server at this time.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        Enter search terms such as 'burger' or 'chicken' or 'gourmet' below:
      </Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />

      <StatusBar style="auto" />
      <Text>Searching for {term}</Text>
      <Text>We have found {results.length} results</Text>
      <Text>{error != "" ? error : ""}</Text>
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

export default SearchScreen;
