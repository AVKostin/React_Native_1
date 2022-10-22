import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>
    </View>
);

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
        // width: 700,
        height: 700,
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
});
