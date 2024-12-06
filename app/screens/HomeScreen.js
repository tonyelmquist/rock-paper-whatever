import React from "react";
import { useFonts } from "expo-font";
import NotchedButton from "../components/NotchedButton";
import { View, Text, StyleSheet, Image } from "react-native";
import Loading from "../components/Loading";
import SettingsButton from "../components/SettingsButton";
import floatingButtonImage from "../../assets/images/handograf.png";

const HomeScreen = ({ navigation }) => {
  const [loaded, error] = useFonts({
    Aguante: require("../../assets/fonts/Aguante-Regular.otf"),
    AmericanTypewriter: require("../../assets/fonts/AmericanTypewriter.ttf"),
    Ewert: require("../../assets/fonts/Ewert-Regular.ttf"),
  });

  const subtitles = [
    "The game where you decide who beats who!",
    "Can't agree on who wins? Have an argument? Let the app decide for you!",
    "Make your own categories and play with your friends!",
    "The game where you can't agree on who wins!",
  ];

  const backgroundImage = require("../../assets/images/vicbg.jpg");

  const randomSubtitle = subtitles[Math.floor(Math.random() * subtitles.length)];

  if (loaded)
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.bgImageWrapper}>
          <Image source={backgroundImage} style={styles.bgImage} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Rock!</Text>
          <Text style={styles.title}>Paper!</Text>
          <Text style={styles.title}>Whatever!</Text>
          <Text style={styles.subtitle}>{randomSubtitle}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("Category")}
            text="Pick a Category"
          />
          <NotchedButton
            style={styles.button}
            action={() =>
              navigation.navigate("CategoryDetail", {
                category: "Create Your Own",
              })
            }
            text="Make Your Own"
          />
          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("JustJudgement")}
            text="Just a Judgement"
          />
          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("HowTo")}
            text="How to Play"
          />
        </View>
        <SettingsButton />
      </View>
    );
  return <Loading />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Ewert",
    color: "#000000",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "AmericanTypewriter",
    width: "80%",
  },
  background: {
    flex: 1,
    resizeMode: "stretch",
    height: "100%",
    width: "100%", // Cover the entire screen
  },
  button: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Aguante", // Must match the font's internal name
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "column",
    marginLeft: "20%",
    width: "60%",
    marginBottom: "20%",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
