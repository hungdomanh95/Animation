import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import globalStyle from '../../theme/globalStyle';

import {
  interpolateCircularMotionOverY,
  interpolateCircularMotionOverX,
} from '../../utils/position';
const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = 50;
let SIZE_CIRCLE = 300;

const Circle = () => {
  const circle = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(circle, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      {iterations: 1000},
    ).start();
  }, []);

  const snapshot = SIZE_BOX;
  const radius = SIZE_CIRCLE / 2;

  const inOutX = interpolateCircularMotionOverX(snapshot, radius);
  const translateCircleX = circle.interpolate(inOutX);

  const inOutY = interpolateCircularMotionOverY(snapshot, radius);
  const translateCircleY = circle.interpolate(inOutY);

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.h3, {marginBottom: SIZE_BOX}]}>
        {' '}
        Around Circle
      </Text>
      <View style={[styles.containerCircle]}>
        <Animated.View
          resizeMode="contain"
          style={[
            styles.box,
            {
              transform: [
                {translateX: translateCircleX},
                {translateY: translateCircleY},
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Circle;
const styles = StyleSheet.create({
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
    backgroundColor: globalStyle.mainColor,
    borderRadius: 100,
  },
  container: {
    width,
    height: width,
    marginHorizontal: -SPACING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCircle: {
    position: 'relative',
    width: SIZE_CIRCLE,
    height: SIZE_CIRCLE,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
});
