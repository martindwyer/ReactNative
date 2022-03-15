import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() => {
          navigation.navigate("TrackDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
