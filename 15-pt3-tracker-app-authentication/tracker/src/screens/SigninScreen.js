import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AuthInput from "../components/AuthInput";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <AuthInput
      pageTitle="Sign In to Tracker"
      submitButtonText="Sign In"
      submitFunction={signin}
      altText="Not a user? Sign up."
      altFunction={() => navigation.navigate("Signup")}
      state={state}
    />
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({});

export default SigninScreen;
