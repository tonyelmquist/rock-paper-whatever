import React, { useState, useEffect } from "react";
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotchedButton from "../components/NotchedButton";
import backgroundImage from "../../assets/images/vicbg.jpg";
import floatingButtonImage from "../../assets/images/handograf.png";
import FloatingButton from "../components/FloatingButton";
import SettingsButton from "../components/SettingsButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EnterItemsScreen = () => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const navigation = useNavigation();
  const [judgementStyle, setJudgementStyle] = useState("obtuse");

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const judgementStyleValue = await AsyncStorage.getItem(
          "judgementStyle"
        );

        if (judgementStyleValue !== null) {
          setJudgementStyle(judgementStyleValue);
        }
      } catch (error) {
        console.error("Failed to load settings", error);
      }
    };

    loadSettings();
  }, []);

  const judgementEndpoint = judgementStyle + ".php";
  const fetchJudgement = async () => {
    const randomString = Math.random().toString(36).substring(7);
    try {
      const response = await fetch(
        `http://www.rockpaperwhatever.com/${judgementEndpoint}?param1=${item1}&param2=${item2}&cacheBuster=${randomString}`
      );
      const result = await response.text();
      navigation.navigate("Judgement", { text: result });
    } catch (error) {
      console.error("Error fetching judgement:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bgImageWrapper}>
        <Image source={backgroundImage} style={styles.bgImage} />
      </View>
      <Text style={styles.orText}>Need someone to decide who wins? Enter your two items and let the app decide!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first item"
        value={item1}
        onChangeText={setItem1}
      />
      <Text style={styles.orText}>versus</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter second item"
        value={item2}
        onChangeText={setItem2}
      />
      <View style={styles.buttonContainer}>
        <NotchedButton action={fetchJudgement} text="Get a Judgement!" />
      </View>
      <FloatingButton onPress={navigateToHome} imageSource={floatingButtonImage} />
      <SettingsButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "AmericanTypewriter",
    borderRadius: 5, // Semi-transparent background
  },
  orText: {
    fontSize: 20,
    fontFamily: "AmericanTypewriter",
    marginBottom: 10,
    marginTop: 10,
    width: "60%",
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: 60,
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
  },
  floatingButton: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  floatingButtonImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default EnterItemsScreen;
