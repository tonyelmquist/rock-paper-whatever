import React from 'react';
import { useFonts } from "expo-font";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';



const HomeScreen = ({navigation}) => {

   const [loaded, error] = useFonts({
     "Fixedsys62": require("../../assets/fonts/Fixedsys62.ttf"),
   });

   const backgroundImage = require('../../assets/images/bg.png');

  if (loaded) return (

    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Rock!</Text>
      <Text style={styles.title}>Paper!</Text>
      <Text style={styles.title}>Whatever!</Text>
      <Text style={styles.subtitle}>A twist on the classic game</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Category')}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HowToPlay')}>
        <Text style={styles.buttonText}>How to Play</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
  return <Text>Loading...</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Fixedsys62",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Fixedsys62",
  },
  background: {
    flex: 1,
    resizeMode: "cover", // Cover the entire screen
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
    fontFamily: "Fixedsys62", // Must match the font's internal name
    fontSize: 18,
  },
});

export default HomeScreen;
