// src/types/navigation.ts
export type Pizza = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type RootStackParamList = {
  Home: undefined;
  PizzaDetail: { pizza: Pizza };
  Cart: undefined;
};
