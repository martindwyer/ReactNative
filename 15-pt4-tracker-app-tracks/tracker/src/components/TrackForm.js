import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View style={styles.container}>
      <Input value={name} onChangeText={changeName} placeholder="Enter name" />
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      {!recording && locations.length ? (
        <Button title="Save Recording" onPress={saveTrack} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
  },
});

export default TrackForm;
