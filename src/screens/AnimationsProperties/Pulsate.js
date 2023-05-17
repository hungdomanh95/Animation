import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Dimensions} from 'react-native';
import globalStyle from '../../theme/globalStyle';

const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const Pulsate = () => {
  const loop = useRef(new Animated.Value(0)).current;

  const pulsate = [
    {
      scale: loop.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [1, 0.5, 0, 0.5, 1],
      }),
    },
  ];

  useEffect(() => {
    Animated.loop(
      Animated.timing(loop, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
  }, []);
  return (
    <View style={styles.containerBox}>
      <Text style={[globalStyle.h3]}> pulsate </Text>
      <Animated.View
        resizeMode="contain"
        style={[styles.box, {transform: pulsate}]}
      />
    </View>
  );
};

export default Pulsate;
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
