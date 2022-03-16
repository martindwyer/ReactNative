import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthInput from "../components/AuthInput";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthInput
        pageTitle="Sign Up For Tracker"
        submitButtonText="Sign Up"
        submitFunction={signup}
        altText="Already a user? Sign in."
        altFunction={() => navigation.navigate("Signin")}
        state={state}
      />
    </>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default SignupScreen;
