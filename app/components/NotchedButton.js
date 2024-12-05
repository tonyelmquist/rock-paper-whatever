import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NotchedButton = ({  text, action }) => {
  const color = "#271D1B";
  const width = "100%";

  return (
    <TouchableOpacity onPress={action} style={{ marginBottom: 10 }}>
      <View
        style={{
          ...styles.notchStyle,
          borderBottomWidth: 10,
          borderBottomColor: color,
          width,
        }}
      />
      <View
        style={{ ...styles.centerViewStyle, width, backgroundColor: color }}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View
        style={{
          ...styles.notchStyle,
          borderTopWidth: 10,
          borderTopColor: color,
          width,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  notchStyle: {
    height: 10,
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderStyle: "solid",
  },
  centerViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  textStyle: { fontSize: 18, color: "white", fontFamily: "Aguante" },
});

export default NotchedButton;
