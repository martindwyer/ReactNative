import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [displayTerm, setDisplayTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const filterResultsByPrice = (price) => {
    // price == '$' || '$$' || '$$$'

    return results.filter((result) => {
      return result.price === price;
    });
  };

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: { term },
          location: "chicago",
        },
      });
      setResults(response.data.businesses);
      setDisplayTerm(term);
      setError("");
    } catch (err) {
      setError("Cannot connect to server at this time.");
    }
  };

  useEffect(() => {
    searchApi("chicago");
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textStyle}>
        Enter search terms such as 'burger' or 'chicken' or 'gourmet' below:
      </Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      <StatusBar style="auto" />
      {displayTerm != "" ? (
        <Text style={styles.textStyle}>Searching for "{displayTerm}"</Text>
      ) : null}
      <Text style={styles.textStyle}>
        We have found {results.length} results
      </Text>
      <Text>{error != "" ? error : ""}</Text>

      <ResultsList
        style={styles.resultsStyle}
        results={filterResultsByPrice("$")}
        title="$"
      />
      <ResultsList
        style={styles.resultsStyle}
        results={filterResultsByPrice("$$")}
        title="$$"
      />
      <ResultsList
        style={styles.resultsStyle}
        results={filterResultsByPrice("$$$")}
        title="$$$"
      />

      <ResultsList
        style={styles.resultsStyle}
        results={filterResultsByPrice("$$$$")}
        title="$$$$"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
  textStyle: {
    alignSelf: "center",
    justifyContent: "center",
  },

  resultsStyle: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  textStyle: {
    alignSelf: "center",
  },
});

export default SearchScreen;
