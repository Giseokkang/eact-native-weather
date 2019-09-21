import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
import { LinearGradient } from "expo-linear-gradient";

const API_KEY = "e13af1faa92f99f8e2bee06edce451ee";

const getWeather = async (lat, lon) => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return data;
};

export default () => {
  const [state, setState] = useState({
    isLoading: true
  });

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      const {
        main: { temp },
        weather
      } = await getWeather(latitude, longitude);
      setState({
        isLoading: false,
        temp,
        condition: weather[0].main
      });
    } catch (e) {
      console.log(e);
      Alert.alert("위치를 찾을 수 없습니다.", "위치를 허용해주세요.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return state.isLoading ? <Loading></Loading> : <Weather {...state}></Weather>;
};
