import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {Button,Divider}  from 'react-native-paper' ;
import Component1 from "./components/component1";

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello world from React Native</Text>
        <Divider />
        <Button primary>
    React Native Paper Component2
  </Button>
  </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
AppRegistry.registerComponent("main", () => HelloWorld)
AppRegistry.registerComponent("MyReactNativeApp", () => HelloWorld);
AppRegistry.registerComponent("Component1", () => Component1);

/*AppRegistry.runApplication("MyReactNativeApp", {
  rootTag: document.getElementById("root")
});*/
