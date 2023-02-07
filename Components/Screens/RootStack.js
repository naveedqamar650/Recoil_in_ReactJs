import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

import FormPage from "../Account/FormPage";
import List from "../Account/List";

const RootStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Form" component={FormPage} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default RootStack;
