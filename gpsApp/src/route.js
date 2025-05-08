import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import HomeScreen from "../screens/Home";

import Rotas from "../screens/Rotas";

import Perfil from "../screens/Perfil"; 


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />


      <Drawer.Screen
        name="Rotas"
        component={Rotas}
        options={{
          drawerLabel: "Rotas",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Perfil} 
        options={{
          drawerLabel: "Perfil",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}

function StackNavigator() {
  return (

    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="Rotas"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      
      
    </Stack.Navigator>
  );
}

export default StackNavigator;
