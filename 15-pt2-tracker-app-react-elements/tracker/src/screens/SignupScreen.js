import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
