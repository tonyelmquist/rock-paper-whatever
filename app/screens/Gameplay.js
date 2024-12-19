/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useAnimatedValue,
  Image,
  Easing,
} from "react-native";
import NotchedButton from "../components/NotchedButton";
import { useNavigation } from "@react-navigation/native";
import categories from "../data/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FloatingButton from "../components/FloatingButton";
import SettingsButton from "../components/SettingsButton";

import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";
import rockImage from "../../assets/images/fistograph.png";
import paperImage from "../../assets/images/papergraf.png";
import whateverImage from "../../assets/images/handahand.png";
import floatingButtonImage from "../../assets/images/handograf.png";
import backgroundImage from "../../assets/images/vicbg.jpg";
import SubscriptionContext from "../utils/SubscriptionContext";
import AIUsageContext from "../utils/AIUsageContext";

const GameplayScreen = ({ route }) => {
  const { category, customCategory } = route.params;
  const { incrementUsage, getUsageCount } = useContext(AIUsageContext);
  const [player1Entry, setPlayer1Entry] = useState("");
  const [player2Entry, setPlayer2Entry] = useState("");
  const [winner, setWinner] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const [playText, setPlayText] = useState("");
  const [judgementStyle, setJudgementStyle] = useState("pedantic");

  const judgementUsage = getUsageCount("judgement");    

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    startAnimation();
  }, []);

  const { isSubscriber } = useContext(SubscriptionContext);

  const navigation = useNavigation();

  const navigateToCategories = () => {
    navigation.navigate("Category");
  };
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const judgementStyleValue =
          await AsyncStorage.getItem("judgementStyle");

        if (judgementStyleValue !== null) {
          setJudgementStyle(judgementStyleValue);
        }
      } catch (error) {
        console.error("Failed to load settings", error);
      }
    };

    loadSettings();
  }, []);

  const fetchWinner = async (entry1, entry2) => {
    incrementUsage("judgement");

    const randomString = Math.random().toString(36).substring(7);

    const judgementEndpoint = judgementStyle + ".php";

    try {
      const response = await fetch(
        `${apiUrl}/${judgementEndpoint}?param1=${entry1}&param2=${entry2}&cacheBuster=${randomString}`,
      );
      const result = await response.text();
      setWinner(result);
      navigation.navigate("Judgement", { text: result });
    } catch (error) {
      console.error("Error fetching winner:", error);
    }
  };

  const fetchRandomItems = async () => {
    try {
      const randomString = Math.random().toString(36).substring(7);
      const response = await fetch(
        `${apiUrl}/randomness.php?cacheBuster=${randomString}`,
      );
      const result = await response.text();
      const items = result.split(",");
      setPlayer1Entry(items[0]);
      setPlayer2Entry(items[1]);
    } catch (error) {
      console.error("Error fetching random items:", error);
    }
  };

  const fetchMyCategory = async () => {
    try {
      const randomString = Math.random().toString(36).substring(7);
      const response = await fetch(
        `${apiUrl}/choices.php?param1=${customCategory}&cacheBuster=${randomString}`,
      );
      const result = await response.text();
      const items = result.split(",");
      setPlayer1Entry(items[0]);
      setPlayer2Entry(items[1]);
    } catch (error) {
      console.error("Error fetching random items:", error);
    }
  };

  const scaleAnim = useAnimatedValue(0);
  const startAnimation = () => {
    setPlayer1Entry("");
    setPlayer2Entry("");
    setWinner("");
    const images = [rockImage, paperImage, whateverImage];
    const playState = ["Rock,", "Paper,", "Whatever!"];
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
    if (category === "Random (AI driven)") {
      fetchRandomItems();
      return;
    } else if (category === "Create Your Own") {
      fetchMyCategory();
      return;
    } else if (category === "Random") {
      items = categories.flatMap((cat) => cat.items);
    } else {
      items = categories.find((cat) => cat.name === category).items;
    }
    setPlayer1Entry(getRandomItem(items));
    setPlayer2Entry(getRandomItem(items));
  };

  const getRandomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  async function presentPaywall() {
    // Present paywall for current offering:
    const paywallResult = await RevenueCatUI.presentPaywall();
    // or if you need to present a specific offering:
  }

  return (
    <View style={{ flex: 1 }}>
      {!(player1Entry && player2Entry) && winner === "" ? (
        <View style={{ flex: 1 }}>
          <View style={styles.bgImageWrapper}>
            <Image source={backgroundImage} style={styles.bgImage} />
          </View>

          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: "100%",
              width: "100%",
              transform: [{ scale: scaleAnim }],
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={currentImage}
              style={styles.fullscreenImage}
              resizeMode="contain"
            />
            <Text style={styles.playText}>{playText}</Text>
          </Animated.View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.bgImageWrapper}>
            <Image source={backgroundImage} style={styles.bgImage} />
          </View>
          <View style={styles.entriesContainer}>
            <View style={styles.entryRow}>
              <Text
                style={styles.entryText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
              >
                {player1Entry}
              </Text>
              <Text style={styles.winnerText}>versus</Text>
              <Text
                style={styles.entryText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
              >
                {player2Entry}
              </Text>
            </View>
          </View>
          <View style={styles.controlsContainer}>
            {isSubscriber || judgementUsage < 10 ? (
              <NotchedButton
                action={() => fetchWinner(player1Entry, player2Entry)}
                text="Get a Judgement!"
                style={{ marginBottom: 10 }}
              />
            ) : (
              <NotchedButton
                action={() => presentPaywall()}
                text="Get a Judgement!"
                style={{ marginBottom: 10 }}
              />
            )}
            <NotchedButton
              action={startAnimation}
              text="Play Again"
              style={{ marginBottom: 10 }}
            />
            <NotchedButton action={navigateToCategories} text="Categories" />
          </View>
        </View>
      )}
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
  fullscreenImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  entriesContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "center",
  },
  winnerTextContainer: {
    marginLeft: "20%",
    marginRight: "20%",
    height: 200,
  },
  entryText: {
    fontSize: 40, // Increased font size
    fontWeight: "bold",
    textTransform: "uppercase", // Added font
    marginVertical: 10,
    fontFamily: "Ewert",
    color: "#000000",
    textAlign: "center",
  },
  winnerText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "AmericanTypewriter",
    color: "#000000",
  },

  entryRow: {
    opacity: 1,
    margin: 20,
    alignItems: "center",
    padding: 20,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Ewert",
    color: "#000000",
  },
  playAgainButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Ewert",
    color: "#000000",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#FFFFFF", // Text color
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Ewert",
    color: "#000000",
  },
  playText: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Ewert",
    color: "#000000",
    textAlign: "center",
    marginTop: -100,
    alignSelf: "center",
  },
  controlsContainer: {
    flexDirection: "column",
    marginLeft: "20%",
    width: "60%",
    marginBottom: "20%",
    justifyContent: "space-between",
  },
  controlButton: {
    marginTop: 20,
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

export default GameplayScreen;
