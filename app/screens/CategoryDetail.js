import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";


const CategoryDetailScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
      Minecraft: require("../../assets/fonts/Minecraft.ttf"),
    });

    const backgroundImage = require("../../assets/images/bg.png");

  const navigateToGameplay = () => {
    navigation.navigate("Gameplay", { category });
  };

 if (fontsLoaded) return (
    <ImageBackground
      source={backgroundImage} // Ensure this path is correct
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.categoryText}>Category: {category}</Text>
          <TouchableOpacity
            onPress={navigateToGameplay}
            style={styles.playButton}
          >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );

  return "Loading...";
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: 20,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    fontFamily: "Fixedsys62", // Replace with your custom font
  },
  playButton: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Fixedsys62", // Replace with your custom font
  },
});

export default CategoryDetailScreen;
