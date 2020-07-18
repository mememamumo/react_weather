import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "b6e8e9a7a370829073667a1fe7876cb5";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      // console.log(coords.latitude, coords.longitude);
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return <Loading />;
  }
}
