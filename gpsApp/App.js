import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/route"; // Ajuste o caminho para o seu arquivo StackNavigator

export default function App() {
  return (

    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
