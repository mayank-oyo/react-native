import React from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import Component1 from "./components/component1";

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello world from React Native</Text>
        <Button title="Dummy button component" />
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

AppRegistry.registerComponent("main", () => App)   // Required by EXPO
AppRegistry.registerComponent("MyReactNativeApp", () => App); // Required by android,ios every component needs to be registered
AppRegistry.registerComponent("Component1", () => Component1); // Required by android,ios only

// Required by web only. Need to comment out when using android/ios
// AppRegistry.runApplication("MyReactNativeApp", {
//   rootTag: document.getElementById("root")
// });
