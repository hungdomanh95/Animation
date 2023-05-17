import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Dimensions} from 'react-native';
import globalStyle from '../../theme/globalStyle';
const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const Blink = () => {
  const loop = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(loop, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},// số lần lặp lại,  Default -1 (infinite).
    ).start();
  });

  const blink = loop.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });
  return (
    <View style={styles.containerBox}>
      <Text style={[globalStyle.h3]}> blink </Text>
      <Animated.View
        resizeMode="contain"
        style={[styles.box, {opacity: blink}]}
      />
    </View>
  );
};

export default Blink;
const styles = StyleSheet.create({
  containerBox: {
    width: SIZE_CONTAINER,
    alignItems: 'center',
    margin: SPACING,
  },
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
    backgroundColor: globalStyle.mainColor,
    borderRadius: 100,
  },
});
