import {View, StyleSheet, Animated, Dimensions, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
const Plane = () => {
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translatePlane = [
    {
      translateY: animated.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, -30, 0, 30, 0],
      }),
    },
    {
      rotateX: animated.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: ['0deg', '40deg', '0deg', '-40deg', '0deg'],
      }),
    },
  ];

  return (
    <Animated.View style={{top: 120, left: -10, transform: translatePlane}}>
      <View style={styles.wingRight} />
      <View style={styles.wingLeft} />
      <View style={styles.bottom} />
      <View style={styles.top} />
      <View style={styles.middle} />
    </Animated.View>
  );
};

export default Plane;
const styles = StyleSheet.create({
  wingLeft: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderBottomWidth: 135,
    borderBottomColor: '#FFF',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '78deg'}, {skewY: '-35deg'}],
    top: -40,
    zIndex: 3,
  },
  middle: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 135,
    borderBottomColor: '#c1c7c9',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '72deg'}],
    top: -23,
    left: 10,
    zIndex: 2,
  },
  top: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 30,
    borderBottomColor: '#c1c7c9',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '-33deg'}],
    top: 52,
    left: -42,
    zIndex: 1,
  },
  wingRight: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 22.5,
    borderRightWidth: 12.5,
    borderBottomWidth: 115,
    borderBottomColor: '#FFF',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '61deg'}],
    top: -10,
    left: 20,
    zIndex: 4,
  },
  bottom: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 12.5,
    borderRightWidth: 12.5,
    borderBottomWidth: 25.5,
    borderBottomColor: '#676d70',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '-5deg'}],
    top: 59,
    left: -32,
    zIndex: 3,
  },
});
