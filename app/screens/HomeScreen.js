import React, { useContext, useState, useEffect } from "react";
import { useFonts } from "expo-font";
import NotchedButton from "../components/NotchedButton";
import { View, Text, StyleSheet, Image, Modal, Button } from "react-native";
import Loading from "../components/Loading";
import SettingsButton from "../components/SettingsButton";
import logo from "../../assets/images/icon.png";
import backgroundImage from "../../assets/images/vicbg.jpg";
import SubscriptionContext from "../utils/SubscriptionContext";
import { Share } from "react-native";
import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";
import AIUsageContext from "../utils/AIUsageContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [loaded, error] = useFonts({
    Aguante: require("../../assets/fonts/Aguante-Regular.otf"),
    AmericanTypewriter: require("../../assets/fonts/AmericanTypewriter.ttf"),
    Ewert: require("../../assets/fonts/Ewert-Regular.ttf"),
  });

  const { isSubscriber } = useContext(SubscriptionContext);
  const { getUsageCount, incrementUsage } = useContext(AIUsageContext);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (!hasLaunched) {
        setShowPopup(true);
        await AsyncStorage.setItem('hasLaunched', 'true');
      }
    };
    checkFirstLaunch();
  }, []);

  async function presentPaywall() {
    // Present paywall for current offering:
    const paywallResult = await RevenueCatUI.presentPaywall();
    // or if you need to present a specific offering:
  }

  const share = (url, title, message) => {
    Share.share({
      message: message + " " + url,
      url: url,
      title: title,
    });
  };

  if (loaded)
    return (
      <View style={{ flex: 1 }}>
        <Modal
          visible={showPopup}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Welcome to Rock, Paper, Whatever! You get 10 AI judgements and 10 AI categories for free to start. Have fun!. 
              </Text>
              <Button title="Got it!" onPress={() => setShowPopup(false)} />
            </View>
          </View>
        </Modal>
        <View style={styles.bgImageWrapper}>
          <Image source={backgroundImage} style={styles.bgImage} />
        </View>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
         {/*  {!isSubscriber && (
            <View style={styles.usageContainer}>
              <Text style={styles.usageText}>
                {`Custom Categories: ${10 - getUsageCount("category")} remaining`}
              </Text>
              <Text style={styles.usageText}>
                {`Judgements: ${10 - getUsageCount("judgement")} remaining`}
              </Text>
            </View>
          )} */}
        </View>
        <View style={styles.buttonContainer}>
          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("Category")}
            text="Pick a Category"
          />
          {isSubscriber || getUsageCount("category") < 10 ? (
            <NotchedButton
              style={styles.button}
              action={() =>
                navigation.navigate("CategoryDetail", {
                  category: "Create Your Own",
                })
              }
              text="Make Your Own"
            />
          ) : (
            <NotchedButton
              style={styles.button}
              action={() => presentPaywall()}
              text="Create Your Own"
            />
          )}

          {isSubscriber || getUsageCount("judgement") < 10 ? (
            <NotchedButton
              style={styles.button}
              action={() => navigation.navigate("JustJudgement")}
              text="Just a Judgement"
            />
          ) : (
            <NotchedButton
              style={styles.button}
              action={() => presentPaywall()}
              text="Just a Judgement"
            />
          )}

          <NotchedButton
            style={styles.button}
            action={() => navigation.navigate("HowTo")}
            text="How to Play"
          />
          <NotchedButton
            style={styles.button}
            action={() => share("https://rockpaperwhatever.com", "Check out this game!", "Rock, Paper, Whatever!")}
            text="Share with a Friend"
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
  logo: {
    width: "60%",
    resizeMode: "contain",
    marginTop: "20%",
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    width: "60%",
    height: "60%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
    marginBottom: "10%",

  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "AmericanTypewriter",
    color: "#000000",
  },
  usageContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  usageText: {
    fontFamily: "AmericanTypewriter",
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 2,
  },
});

export default HomeScreen;
