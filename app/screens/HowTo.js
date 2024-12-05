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
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.title}>How to Play Rock, Paper, Whatever!</Text>
        <Text style={styles.subtitle}>
          Welcome to a whimsical twist on the classic game! In Rock, Paper,
          Whatever, your choices battle it out to see who reigns supreme. The game is played just like Rock, Paper, Scissors with
          one exception: participants can call out ANYTHING they want on the
          final “throw.” For example, students can say “nuclear bomb,” “Luke
          Skywalker,” “Hurricane,” etc. They aren't restricted to rock, paper,
          or scissors. As you can imagine, there will be TONS of debate about
          who wins - but that's the whole point! This version allows you to play with certain categories, or create your own, or just ask the game's AI decide the winner between any two options you choose. 
        </Text>
        <Text style={styles.sectionTitle}>Game Modes</Text>
        <Text style={styles.modeTitle}>1. Category Mode</Text>
        <Text style={styles.bulletPoint}>
          • Choose a category from the list (e.g., Animals, Historical Figures,
          or Inventions).
        </Text>
        <Text style={styles.bulletPoint}>
          • The app generates two random options from the selected category
          (e.g., “Kea” vs. “Shoebill”).
        </Text>
        <Text style={styles.bulletPoint}>
          • If you and your friends can't decide, you can tap “Get a Judgement!” to see which option wins and read a fun,
          creative explanation.
        </Text>
        <Text style={styles.modeTitle}>2. Create Your Own Category</Text>
        <Text style={styles.bulletPoint}>
          • Enter your own category (e.g., “Birds”) to personalize your game.
        </Text>
        <Text style={styles.bulletPoint}>
          • The app's AI selects two contenders from your category. You can still get a judgement if you and your friends can't decide.
        </Text>
        <Text style={styles.modeTitle}>3. Manual Mode</Text>
        <Text style={styles.bulletPoint}>
          • Play the game the old-fashioned way - and then enter your two options (e.g., “The Pope” vs.
          “Anthills”).
        </Text>
        <Text style={styles.bulletPoint}>
          • Tap “Get a Judgement!” to let the app's AI decide the winner and
          explain why.
        </Text>
        <Text style={styles.sectionTitle}>Gameplay Tips</Text>
        <Text style={styles.bulletPoint}>
          • Random & Really Random: Can't decide? Use these options to let the
          app surprise you with categories and contenders. Random uses all the options built into the app - Really Random uses AI to pick from literally anything you can think of!
        </Text>
        <Text style={styles.bulletPoint}>
          • Fun & Fair Play: The app's decisions are meant to be entertaining.
          Don't take them too seriously—just enjoy the creativity!
        </Text>
        <Text style={styles.bulletPoint}>
          • Replay or Explore: After each judgement, you can tap “Play Again” to
          try new combinations or return to the Categories menu for a fresh
          start.
        </Text>
      </ScrollView>
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
  },
  textContainer: {
    padding: 20,
    marginTop: "20%",
    marginBottom: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    height: "60%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000",
    fontFamily: "Aguante",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: "#000000",
    fontFamily: "AmericanTypewriter",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#000000",
    fontFamily: "Aguante",
  },
  modeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#000000",
    fontFamily: "Aguante",
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000000",
    fontFamily: "AmericanTypewriter",
  },
  conclusion: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
    color: "#000000",
    fontFamily: "AmericanTypewriter",
  },
});

export default HowToScreen;
