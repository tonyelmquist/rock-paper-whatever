import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

const FloatingButton = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
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

export default FloatingButton; 