import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import RootStack from "./Components/Screens/RootStack";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";

export default class Myapp extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  render() {
    return (
      <RecoilRoot>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </RecoilRoot>
    );
  }
}
const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    flex: 1,
  },
});
