/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useAnimatedValue,
  Image,
  Easing,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { categories, getAllItems } from "../data/categories";

// Import images
import rockImage from "../../assets/images/rock.png";
import paperImage from "../../assets/images/paper.png";
import whateverImage from "../../assets/images/question.png";
import backgroundImage from "../../assets/images/bg.png";
const GameplayScreen = ({ route }) => {
  const { category } = route.params;
  const [player1Entry, setPlayer1Entry] = useState("");
  const [player2Entry, setPlayer2Entry] = useState("");
  const [winner, setWinner] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const [playText, setPlayText] = useState("");

  const [fontsLoaded] = useFonts({
    Minecraft: require("../../assets/fonts/Minecraft.ttf"),
  });

  useEffect(() => {
    startAnimation();
  }, []);

  const navigation = useNavigation();

  const navigateToCategories = () => {
    navigation.navigate("Category");
  };

  const fetchWinner = async (entry1, entry2) => {
    try {
      const response = await fetch(
        `http://www.rockpaperwhatever.com/judgement.php?param1=${entry1}&param2=${entry2}`
      );
      const result = await response.text();
      setWinner(result);
    } catch (error) {
      console.error("Error fetching winner:", error);
    }
  };

  const scaleAnim = useAnimatedValue(0);
  const startAnimation = () => {
    setPlayer1Entry("");
    setPlayer2Entry("");
    setWinner("");
    const images = [rockImage, paperImage, whateverImage];
    const playState = ["Rock!", "Paper!", "Whatever!"];
    let index = 0;

    const animateImage = () => {
      if (index < images.length) {
        setCurrentImage(images[index]);
        setPlayText(playState[index]);
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 0.8,
            duration: 100,
            easing: Easing.bounce,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.7,
            duration: 300,
            easing: Easing.bounce,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.7,
            duration: index === 2 ? 1200 : 500,
            useNativeDriver: true,
          }),
        ]).start(() => {
          index++;
          animateImage();
        });
      } else {
        displayCategoryEntries();
      }
    };

    animateImage();
  };

  const displayCategoryEntries = () => {
    let items;
    if (category === "Random") {
      items = getAllItems();
    } else {
      items = categories.find((cat) => cat.name === category).items;
    }
    setPlayer1Entry(getRandomItem(items));
    setPlayer2Entry(getRandomItem(items));
  };

  const getRandomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  return (
    <View style={styles.container}>
      {!(player1Entry && player2Entry) && winner === "" ? (
        <>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: "100%",
              width: "100%",
              transform: [{ scale: scaleAnim }],
            }}
          >
            <Image source={currentImage} style={styles.fullscreenImage} />
          </Animated.View>
          <Text style={styles.playText}>{playText}</Text>
        </>
      ) : (
        <ImageBackground source={backgroundImage} style={styles.background}>
          <View style={styles.entriesContainer}>
            <View style={styles.entryRow}>
              <Text style={styles.entryText}>{player1Entry}</Text>
              <Text style={styles.winnerText}>vs</Text>
              <Text style={styles.entryText}>{player2Entry}</Text>
              <Text style={styles.winnerText}>{winner}</Text>
            </View>
            <TouchableOpacity
              onPress={() => fetchWinner(player1Entry, player2Entry)}
              style={styles.playAgainButton}
            >
              <Text style={styles.buttonText}>Get a Judgement!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigateToCategories}
              style={styles.playAgainButton}
            >
              <Text style={styles.buttonText}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={startAnimation}
              style={styles.playAgainButton}
            >
              <Text style={styles.buttonText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  fullscreenImage: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  entriesContainer: {
    marginTop: 20,
  },
  entryText: {
    fontSize: 24, // Increased font size
    fontWeight: "bold",
    textTransform: "uppercase", // Added font
    marginVertical: 10,
    fontFamily: "Fixedsys62",
  },
  winnerText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "Fixedsys62",
  },
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#000000",
  },
  entryRow: {
    opacity: 1,
    margin: 20,
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Fixedsys62",
  },
  playAgainButton: {
    backgroundColor: "#000000", // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Fixedsys62",
  },
  buttonText: {
    color: "#FFFFFF", // Text color
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Fixedsys62",
  },
  playText: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Fixedsys62",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: -200,
  },
});

export default GameplayScreen;
