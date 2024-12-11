import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NotchedToggle = ({ text, action, selected }) => {
  const bgcolor = selected ? "#271D1B" : "#818181";
  const color = selected ? "white" : "black";
  const width = "100%";

  return (
    <TouchableOpacity onPress={action} style={{ marginBottom: 10 }}>
      <View
        style={{
          ...styles.notchStyle,
          borderBottomWidth: 10,
          borderBottomColor: bgcolor,
          width,
        }}
      />
      <View
        style={{ ...styles.centerViewStyle, width, backgroundColor: bgcolor }}
      >
        <Text style={{ fontSize: 18, color: color, fontFamily: "Aguante" }}>
          {text}
        </Text>
      </View>
      <View
        style={{
          ...styles.notchStyle,
          borderTopWidth: 10,
          borderTopColor: bgcolor,
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
});

export default NotchedToggle;
