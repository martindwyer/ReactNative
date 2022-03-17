import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  initialLocation = {
    longitude: -91.6704053,
    latitude: 41.9578872,
  };

  return (
    <MapView
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={100}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
