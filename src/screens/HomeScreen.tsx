// src/screens/HomeScreen.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

const pizzas = [
  {
    id: "1",
    name: "Pizza de Calabresa",
    description: "Calabresa, cebola, azeitona e muito queijo",
    price: 35.9,
    image: "https://i.ibb.co/pRk84yN/calabresa.jpg",
  },
  {
    id: "2",
    name: "Pizza de Frango com Catupiry",
    description: "Frango desfiado e catupiry cremoso",
    price: 39.9,
    image: "https://i.ibb.co/W3R9s5L/frango.jpg",
  },
  {
    id: "3",
    name: "Pizza Margherita",
    description: "Queijo, tomate e manjericão fresco",
    price: 32.9,
    image: "https://i.ibb.co/3rFj7gF/margherita.jpg",
  },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍕 Escolha sua Pizza</Text>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("PizzaDetail", { pizza: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e63946",
  },
});
