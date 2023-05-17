import React, { useState, useEffect, useRef } from 'react';
import { Image, Animated,Easing } from 'react-native';
import size from "../../utils/size"
const eevee = require('../../assets/gif/eevee.gif');
const width = size.width / 4;
const height = width;
const top = size.height / 1.05;
const duration = 3000
const Eevee = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
      Animated.loop(
        Animated.sequence([
         Animated.timing(animated, {
           toValue: 1,
           duration,
           useNativeDriver: true,
           easing: Easing.linear,
         }),
         Animated.timing(rotate, {
          toValue: 1,
          duration:100,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(animated, {
          toValue: 0,
          duration,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
         Animated.timing(rotate, {
           toValue: 0,
           duration:100,
           useNativeDriver: true,
           easing: Easing.linear,
         }),
        ])
      ).start();
  }, []);

  const translateX = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [size.width + 1.5 * width , -1.5 * width],
  });
  const rotateY = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg" , "180deg"],
  });

  return (
    <Animated.Image
      source={eevee}
      style={[{width, height, top: top - 3 * height},{transform: [{translateX},{rotateY}]}]}
    />
  );
};

export default Eevee;
