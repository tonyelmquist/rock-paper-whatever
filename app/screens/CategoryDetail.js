import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import NotchedButton from "../components/NotchedButton";

const CategoryDetailScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Minecraft: require("../../assets/fonts/Minecraft.ttf"),
  });

  const [customCategory, setCustomCategory] = useState("");

  const backgroundImage = require("../../assets/images/vicbg.jpg");

  const navigateToGameplay = () => {
    navigation.navigate("Gameplay", { category, customCategory });
  };

  if (fontsLoaded)
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.bgImageWrapper}>
          <Image source={backgroundImage} style={styles.bgImage} />
        </View>
        {category !== "Create Your Own" ? (
          <View style={styles.container}>
            <Text style={styles.plainText}>The category is:</Text>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.plainText}>Enter your own category:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setCustomCategory}
              value={customCategory}
            />
          </View>
        )}
        <View style={styles.playButton}>
          <NotchedButton
            action={navigateToGameplay}
            text="Play"
            style={styles.playButton}
          />
        </View>
      </View>
    );

  return <Text>Loading...</Text>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    // Add or adjust styles to match Gameplay.js
  },

  bgImageWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bgImage: {
    flex: 1,
    resizeMode: "stretch",
    width: "100%",
  },
  fullscreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center", // Semi-transparent background
    padding: 20,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // Add or adjust styles to match Gameplay.js
  },
  plainText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#000000",
    fontFamily: "AmericanTypewriter",
    textAlign: "center", // Replace with your custom font
    // Add or adjust styles to match Gameplay.js
  },
  categoryText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
    fontFamily: "Ewert",
    textAlign: "center", // Replace with your custom font
    // Add or adjust styles to match Gameplay.js
  },
  playButton: {
    marginBottom: 60,
    width: "60%",
    alignSelf: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "AmericanTypewriter",
    borderRadius: 5,
  },
});

export default CategoryDetailScreen;
