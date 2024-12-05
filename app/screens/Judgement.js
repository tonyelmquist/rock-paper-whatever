import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotchedButton from "../components/NotchedButton";
import backgroundImage from "../../assets/images/vicbg.jpg";

const JudgementScreen = ({ route }) => {
  const navigation = useNavigation();
  const { text } = route.params;

  const parts = text.split(",");
  const winner = parts[0];
  const judgement = parts.slice(1).join(",");

  return (
    <View style={{ flex: 1}}>
      <View style={styles.bgImageWrapper}>
        <Image source={backgroundImage} style={styles.bgImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.plainText}>The winner is:</Text>
        <Text style={styles.title}>{winner}</Text>
        <Text style={styles.plainText}>{judgement}</Text>
      </View>
      <View style={styles.backButton}>
        <NotchedButton action={() => navigation.goBack()} text="Back" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImageWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  plainText: {
    fontSize: 18,
    fontFamily: "AmericanTypewriter",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  bgImage: {
    flex: 1,
    resizeMode: "stretch",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    margin: "10%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Ewert",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 60,
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

export default JudgementScreen;
