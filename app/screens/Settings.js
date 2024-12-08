import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import Loading from "../components/Loading";
import SettingsButton from "../components/SettingsButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NotchedToggle from "../components/NotchedToggle";
import backgroundImage from "../../assets/images/vicbg.jpg";
import FloatingButton from "../components/FloatingButton";
import floatingButtonImage from "../../assets/images/handograf.png";

const SettingsScreen = ({ navigation }) => {

  const [judgementStyle, setJudgementStyle] = useState("pedantic");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        
        const judgementStyleValue = await AsyncStorage.getItem("judgementStyle");

        if (judgementStyleValue !== null) {
          setJudgementStyle(judgementStyleValue);
        }
        setLoaded(true);
      } catch (error) {
        console.error("Failed to load settings", error);
      }
    };

    loadSettings();
  }, []);

  const CustomRadioButton = ({ label, selected, onSelect }) => (
    <NotchedToggle
      text={label}
      selected={selected}
      action={onSelect}
    />
  );

  const handleJudgementStyleChange = async (value) => {
    try {
      setJudgementStyle(value);
      await AsyncStorage.setItem("judgementStyle", value);
    } catch (error) {
      console.error("Failed to save judgement style", error);
    }
  };

  if (!loaded) return <Loading />;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bgImageWrapper}>
        <Image source={backgroundImage} style={styles.bgImage} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Judgement style:</Text>
        <View style={styles.radioButtonContainer}>
          <CustomRadioButton
            label="Obtuse"
            selected={judgementStyle === "obtuse"}
            onSelect={() => handleJudgementStyleChange("obtuse")}
          />
          <CustomRadioButton
            label="Play-by-play"
            selected={judgementStyle === "fight"}
            onSelect={() => handleJudgementStyleChange("fight")}
          />
          <CustomRadioButton
            label="Literal"
            selected={judgementStyle === "pedantic"}
            onSelect={() => handleJudgementStyleChange("pedantic")}
          />
          <CustomRadioButton
            label="Silly"
            selected={judgementStyle === "silly"}
            onSelect={() => handleJudgementStyleChange("silly")}
          />
        </View>
      </View>
      <SettingsButton />
      <FloatingButton
        onPress={() => navigation.navigate("Home")}
        imageSource={floatingButtonImage}
      />
    </View>
  );
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

  radioButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#007BFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 280,
  },
  radioButtonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "80%",
  },
  radioButtonText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
