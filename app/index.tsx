import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CategoryDetailScreen from "./screens/CategoryDetail";
import GameplayScreen from "./screens/Gameplay"; // Make sure this import exists

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Category"
        component={CategoryScreen}
      />
      <Stack.Screen
        name="CategoryDetail"
        options={{ headerShown: false }}
        component={CategoryDetailScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Gameplay"
        component={GameplayScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
   
      <AppNavigator />
  
  );
}

