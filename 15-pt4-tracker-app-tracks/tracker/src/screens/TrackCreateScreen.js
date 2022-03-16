import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import MapView, { Polyline } from "react-native-maps";

const TrackCreateScreen = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 41.9578872 + i * 0.001,
      longitude: -91.6704053 + i * 0.001,
    });
  }
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Track Create</Text>
      <MapView
        initialRegion={{
          latitude: 41.9758872,
          longitude: -91.6704053,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={styles.map}
      >
        <Polyline coordinates={points} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackCreateScreen;
