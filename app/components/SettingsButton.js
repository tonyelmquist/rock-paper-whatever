import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsButton = () => {
  const navigation = useNavigation();
  const navigateToSettings = () => {
    navigation.navigate("Settings");
  };

  const imageSource = require("../../assets/images/gearsm.png");

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={navigateToSettings}
    >
      <ImageBackground
        source={imageSource}
        style={styles.floatingButtonImage}
        imageStyle={{ borderRadius: 25 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default SettingsButton;
