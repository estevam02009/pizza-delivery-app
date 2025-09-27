import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type PizzaDetailsRouteProp = RouteProp<RootStackParamList, "PizzaDetails">;
type PizzaDetailsNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "PizzaDetails"
>;

export default function PizzaDetailsScreen() {
  const route = useRoute<PizzaDetailsRouteProp>();
  const navigation = useNavigation<PizzaDetailsNavProp>();

  const { name, description, price, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Aqui futuramente vamos adicionar ao carrinho
          alert(`${name} adicionada ao carrinho!`);
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 10,
    textAlign: "center",
  },
  desc: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 15,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 30,
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
