import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/pizza-logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Pizza Delivery</Text>
            <Text style={styles.subtitle}>
                A pizza mais saborosa da cidade, entregue na sua casa 🍕
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    logo: {
      width: 200,
      height: 200,
      marginBottom: 30,
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#e63946",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: "#555",
      textAlign: "center",
      marginBottom: 40,
    },
    button: {
      backgroundColor: "#e63946",
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 25,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });