import React from "react";
import { useFonts } from "expo-font";
import NotchedButton from "../components/NotchedButton";
import { View, Text, StyleSheet, Image } from "react-native";
import Loading from "../components/Loading";

const HomeScreen = ({ navigation }) => {
  const [loaded, error] = useFonts({
    Aguante: require("../../assets/fonts/Aguante-Regular.otf"),
    AmericanTypewriter: require("../../assets/fonts/AmericanTypewriter.ttf"),
    Ewert: require("../../assets/fonts/Ewert-Regular.ttf"),
  });

  const backgroundImage = require("../../assets/images/vicbg.jpg");

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
          <Text style={styles.subtitle}>
            The game where you decide who beats who! 
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("Category")}
            text="Start Game"
          />
          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("JustJudgement")}
            text="Get a Judgement!"
          />
          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("HowTo")}
            text="How to Play"
          />
        </View>
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
