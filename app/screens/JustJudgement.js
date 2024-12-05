import React, { useState } from "react";
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotchedButton from "../components/NotchedButton";
import backgroundImage from "../../assets/images/vicbg.jpg";
import floatingButtonImage from "../../assets/images/handograf.png";

const EnterItemsScreen = () => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const navigation = useNavigation();

  const fetchJudgement = async () => {
    const randomString = Math.random().toString(36).substring(7);
    try {
      const response = await fetch(
        `http://www.rockpaperwhatever.com/judgement.php?param1=${item1}&param2=${item2}&cacheBuster=${randomString}`
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
        <NotchedButton action={fetchJudgement} text="Get Judgement" />
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("Home")}
      >
        <ImageBackground
          source={floatingButtonImage}
          style={styles.floatingButtonImage}
          imageStyle={{ borderRadius: 25 }}
        />
      </TouchableOpacity>
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
