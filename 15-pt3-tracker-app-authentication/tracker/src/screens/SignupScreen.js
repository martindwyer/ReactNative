import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthInput from "../components/AuthInput";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <AuthInput
      pageTitle="Sign Up For Tracker"
      submitButtonText="Sign Up"
      submitFunction={signup}
      altText="Already a user? Sign in."
      altFunction={() => navigation.navigate("Signin")}
      state={state}
    />
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default SignupScreen;
