import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({temp}) {
	return (
		<LinearGradient colors={["#93B4AC", "#C1EBE1"]} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="white"/>
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