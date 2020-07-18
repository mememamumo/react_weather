import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
	Haze: {
		iconName: "weather-hazy",
		gradient: ["#93B4AC", "#C1EBE1"]
	},
	Thunderstorm: {
		iconName: "weather-lightning-rainy",
		gradient: ["#0f0c29", "#302b63"]
	},
	Drizzle: {
		iconName: "weather-rainy",
		gradient: ["#85C9C8", "#D4FEE6", "#E5FDC9"]
	},
	Rain: {
		iconName: "weather-pouring",
		gradient: ["#036564", "#033649"]
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#CFDEF3", "#E0EAFC"]
	},
	Atmosphere: {
		iconName: "weather-sunset",
		gradient: ["#1D976C", "#93F9B9"]
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#0052D4", "#65C7F7", "#9CECFB"]
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#93B4AC", "#C1EBE1"]
	},
	Mist: {
		iconName: "weather-fog",
		gradient: ["#74ebd5", "#ACB6E5"]
	},
	Dust: {
		iconName: "weather-tornado",
		gradient: ["#6D6027", "#D3CBB8"]
	}
};

export default function Weather({temp, condition}) {
	return (
		<LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
				<Text style={styles.temp}>
					{temp}º
				</Text>	
			</View>
			<View style={styles.halfContainer}></View>
		</LinearGradient>
	);
}

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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	temp: {
		fontSize: 42,
		color: "#ffffff"
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
})