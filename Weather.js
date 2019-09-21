import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-partlycloudy",
    gradient: ["#bdc3c7", "#2c3e50"]
  }
};

const Weather = ({ temp, condition }) => (
  <LinearGradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}
  >
    <StatusBar barStyle="light-content" />

    <View style={styles.halfContainer}>
      <MaterialCommunityIcons
        name={weatherOptions[condition].iconName}
        size={86}
      />
      <Text style={styles.text}>{Math.round(temp)}o</Text>
      <Text>{condition}</Text>
    </View>
    <View style={styles.halfContainer} />
  </LinearGradient>
);

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 47
  }
});

export default Weather;
