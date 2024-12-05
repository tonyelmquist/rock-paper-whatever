import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CategoryDetailScreen from "./screens/CategoryDetail";
import GameplayScreen from "./screens/Gameplay"; // Make sure this import exists
import JudgementScreen from "./screens/Judgement";
import JustJudgementScreen from "./screens/JustJudgement";
import HowToScreen from "./screens/HowTo";
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
      <Stack.Screen
        options={{ headerShown: false }}
        name="Judgement"
        component={JudgementScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="JustJudgement"
        component={JustJudgementScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HowTo"
        component={HowToScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
   
      <AppNavigator />
  
  );
}

