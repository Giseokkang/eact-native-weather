import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.text}>Getting the funking weather</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#FDF6AA",
    paddingHorizontal: 20,
    paddingVertical: 30
  },

  text: {
    color: "#2c2c2c",
    fontSize: 30
  }
});
