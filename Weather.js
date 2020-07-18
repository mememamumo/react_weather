import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
	Haze: {
		iconName: "weather-hazy",
		gradient: ["#93B4AC", "#C1EBE1"],
		title: "Hazy",
		subtitle: "Hazy again due to the high concentrations of dust. "
	},
	Thunderstorm: {
		iconName: "weather-lightning-rainy",
		gradient: ["#0f0c29", "#302b63"],
		title: "Thunderstorm",
		subtitle: "Heavy rain or hail along with thunder and lightning."
	},
	Drizzle: {
		iconName: "weather-rainy",
		gradient: ["#85C9C8", "#D4FEE6", "#E5FDC9"],
		title: "Drizzle",
		subtitle: "You should grab an umbrella before you head out for a walk."
	},
	Rain: {
		iconName: "weather-pouring",
		gradient: ["#d7d2cc", "#304352"],
		title: "Rain",
		subtitle: "Nationwide monsoon rain to let up shortly."
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#CFDEF3", "#E0EAFC"],
		title: "Snow",
		subtitle: "The fluffy white snow that falls from the sky."
	},
	Atmosphere: {
		iconName: "weather-sunset",
		gradient: ["#93F9B9", "#1D976C"],
		title: "Atmosphere",
		subtitle: "A surrounding environment or influence."
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#0052D4", "#65C7F7", "#9CECFB"],
		title: "Clear",
		subtitle: "Clean Air and Clear Skies."
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#93B4AC", "#C1EBE1"],
		title: "Clouds",
		subtitle: "Calm afternoon in store, we are expecting a few more clouds to settle in over the nation."
	},
	Mist: {
		iconName: "weather-fog",
		gradient: ["#74ebd5", "#ACB6E5"],
		title: "Mist",
		subtitle: "Most of the rain has cleared up and left us with some fog and patches of mist."
	},
	Dust: {
		iconName: "weather-tornado",
		gradient: ["#D3CBB8", "#6D6027"],
		title: "Dust",
		subtitle: "Yellow dust mixed with fine dus."
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
			<View style={{ ...styles.halfContainer, ...styles.textContainer}}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
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
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start"
	},
	title: {
		color: "white",
		fontSize: 44,
		fontWeight: "300",
		marginBottom: 10
	},
	subtitle: {
		color: "white",
		fontSize: 22,
		fontWeight: "400"
	}
})