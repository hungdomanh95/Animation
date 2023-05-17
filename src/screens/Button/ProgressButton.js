import {View, Text, StyleSheet, Image, Animated, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
import assets from '../../assets';
const WIDTH_CONTAINER = 350;
const HEIGHT_CONTAINER = 60;
const BORDER_WIDTH = 2;
const WIDTH_CHILD = WIDTH_CONTAINER - 2 * BORDER_WIDTH;
const HEIGHT_CHILD = HEIGHT_CONTAINER - 2 * BORDER_WIDTH;
const ProgressButton = () => {
  const animated = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(animated, {
        duration: 3000,
        toValue: 1,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ).start();
  }, []);
  const animationProgress = () => {
    var animated_width = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, WIDTH_CHILD],
    });

    const color_animation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['#FFD5D5', '#FFD5D5'],
    });

    return {
      width: animated_width,
      height: HEIGHT_CHILD,
      backgroundColor: color_animation,
      position: 'absolute',
      borderRadius: 15,
    };
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[animationProgress()]} />
      <Image source={assets.iconError} style={styles.icon} />
      <Text style={styles.text}>Error Message</Text>
    </View>
  );
};

export default ProgressButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: BORDER_WIDTH,
    borderColor: '#DA000B',
    borderRadius: 15,
    width: WIDTH_CONTAINER,
    height: HEIGHT_CONTAINER,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 10,
  },
  icon: {width: 24, height: 24, marginRight: 16},
  text: {
    color: '#DA000B',
    fontSize: 16,
  },

  containerPro: {
    height: 20,
    width: 130,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
