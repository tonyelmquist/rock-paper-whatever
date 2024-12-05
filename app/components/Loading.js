import React, { useEffect } from "react";
import { View, Text, Image, Animated, useAnimatedValue } from "react-native";

import { Easing } from "react-native";

const Loading = () => {

 const spinValue = new Animated.Value(0);
 const fadeInValue = new Animated.Value(0);
 const fadeInDelay = 1000;

 Animated.sequence([
   Animated.delay(fadeInDelay),
   Animated.timing(fadeInValue, {
     toValue: 1,
     duration: 1500,
     easing: Easing.linear,
     useNativeDriver: true,
   }),
 ]).start();

 Animated.loop(
   Animated.timing(spinValue, {
     toValue: 360,
     duration: 300000,
     easing: Easing.linear,
     useNativeDriver: true,
   })
 ).start();


    return (
      <Animated.Image
        source={require("../../assets/images/handahand.png")}
        style={{
          transform: [
            {
              rotate: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      />
    );
};

export default Loading;
