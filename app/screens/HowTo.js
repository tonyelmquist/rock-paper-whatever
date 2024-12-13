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
import FloatingButton from "../components/FloatingButton";
import SettingsButton from "../components/SettingsButton";
import { useNavigation } from "@react-navigation/native";
import floatingButtonImage from "../../assets/images/handograf.png";
import backgroundImage from "../../assets/images/vicbg.jpg";

const HowToScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bgImageWrapper}>
        <Image source={backgroundImage} style={styles.bgImage} />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.textContainer}
        >
          <Text style={styles.title}>Rock, Paper, Whatever!</Text>
          <Text style={styles.subtitle}>
            Do you like to have silly pointless arguments with your friends?
            Then “Rock, Paper, Whatever” is the game for you!
          </Text>
          <Text style={styles.bulletPoint}>
            You play it just like “Rock, Paper, Scissors” except you can play
            anything you want. Darth Vader versus Pineapple. Utilitarianism
            versus Kylie Minogue. Purple versus A Caveman. And then it's up to
            you do decide who wins!
          </Text>
          <View style={styles.separator} />
          <Text style={styles.bulletPoint}>
            Now if you want, you can play within a category - Rock, Paper,
            Animals, or Rock, Paper, 19th-Century British Politicians. And
            that's where the mobile game comes in - pick a category, and let it
            pick your scissors for you!
          </Text>
          <View style={styles.separator} />
          <Text style={styles.bulletPoint}>
            Or have it pick for you at random, either from its built-in
            categories or, using robot magic, from the whole Internet. Or enter
            your own category, and let the app pick for you!
          </Text>
          <View style={styles.separator} />
          <Text style={styles.bulletPoint}>
            Click on “Make Your Own” and you can enter your own category, and
            the app will play for you. Then it's up to you and your friend to
            argue who the best Minnesota Twins pitcher or Pakistani pop star is.
          </Text>
          <View style={styles.separator} />
          <Text style={styles.bulletPoint}>
            Can't agree on who wins? If you're playing the “old-fashioned” way
            you can just click on “Get a Judgement” and let the app decide for
            you who won - you can choose from Obtuse, Play-by-play, or Pedantic
            for a judgement style in Settings.
          </Text>
          <View style={styles.separator} />
          <Text style={styles.bulletPoint}>
            You can also just use the app to settle arguments for you. Just
            click on Get a Judgement and enter your two positions, and let the
            magic of Rock, Paper, Whatever decide whether you or your best
            friend is dead wrong.
          </Text>
          <View style={styles.separator} />
          <Text style={styles.bulletPoint}>
            Or if you're letting the app play for you, you can click on “Get a
            Judgement” and let the robot magic in the game give you a verdict.
          </Text>
          <View style={styles.separator} />
          <Text style={styles.conclusion}>
            All of the AI-powered magic is thanks to the wonderful folks at
            OpenAI. You get 10 judgements and 10 categories for free to start - then
            you'll need to sign up for a free trial of an (incredibly cheap) subscription to
            cover our AI costs. Subscribe in the Settings menu to keep playing
            as long as you like!
          </Text>
        </ScrollView>
      </View>
      <SettingsButton />
      <FloatingButton
        onPress={navigateToHome}
        imageSource={floatingButtonImage}
      />
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
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Aguante",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "AmericanTypewriter",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Aguante",
  },
  modeTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
    fontStyle: "italic",
    marginTop: 20,
    fontFamily: "AmericanTypewriter",
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "80%",
    height: "80%",
    marginTop: "20%",
    marginBottom: "20%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  separator: {
    width: "60%",
    height: 1,
    backgroundColor: "#000",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default HowToScreen;
