import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";


const HowToScreen = () => {
  const navigation = useNavigation();
  const backgroundImage = require("../../assets/images/vicbg.jpg");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bgImageWrapper}>
        <Image source={backgroundImage} style={styles.bgImage} />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.textContainer}>
          <Text style={styles.title}>
            How to Play Rock, Paper, Whatever!
          </Text>
          <Text style={styles.subtitle}>
            Welcome to a whimsical twist on the classic game! In Rock, Paper, Whatever, your choices battle it out to see who reigns supreme. Here’s how to play:
          </Text>
          <Text style={styles.sectionTitle}>Game Modes</Text>
          <Text style={styles.modeTitle}>1. Category Mode</Text>
          <Text style={styles.bulletPoint}>• Choose a category from the list (e.g., Animals, Historical Figures, or Inventions).</Text>
          <Text style={styles.bulletPoint}>• The app generates two random options from the selected category (e.g., “Kea” vs. “Shoebill”).</Text>
          <Text style={styles.bulletPoint}>• Tap “Get a Judgement!” to see which option wins and read a fun, creative explanation.</Text>
          <Text style={styles.modeTitle}>2. Create Your Own Category</Text>
          <Text style={styles.bulletPoint}>• Enter your own category (e.g., “Birds”) to personalize your game.</Text>
          <Text style={styles.bulletPoint}>• The app’s AI selects two contenders from your category.</Text>
          <Text style={styles.bulletPoint}>• Tap “Play” and then “Get a Judgement!” to see the result.</Text>
          <Text style={styles.modeTitle}>3. Manual Mode</Text>
          <Text style={styles.bulletPoint}>• Enter two custom options into the text fields (e.g., “The Pope” vs. “Anthills”).</Text>
          <Text style={styles.bulletPoint}>• Tap “Get a Judgement!” to let the app’s AI decide the winner and explain why.</Text>
          <Text style={styles.sectionTitle}>Gameplay Tips</Text>
          <Text style={styles.bulletPoint}>• Random & Really Random: Can’t decide? Use these options to let the app surprise you with categories and contenders.</Text>
          <Text style={styles.bulletPoint}>• Fun & Fair Play: The app’s decisions are meant to be entertaining. Don’t take them too seriously—just enjoy the creativity!</Text>
          <Text style={styles.bulletPoint}>• Replay or Explore: After each judgement, you can tap “Play Again” to try new combinations or return to the Categories menu for a fresh start.</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
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
  categoryButton: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  flatList: {
    marginTop: "20%",
    marginBottom: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    height: "60%",
  },
  categoryText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "AmericanTypewriter",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: "Aguante",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "AmericanTypewriter",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Aguante",
  },
  modeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "Aguante",
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "AmericanTypewriter",
  },
  conclusion: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
    fontFamily: "AmericanTypewriter",
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '80%',
    height: '80%',
    marginTop: "20%",
    marginBottom: "20%",
    marginLeft: "10%",
    marginRight: "10%",
  },
});

export default HowToScreen;
