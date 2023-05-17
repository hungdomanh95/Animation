import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Dimensions} from 'react-native';
import globalStyle from '../../theme/globalStyle';

const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const SIZE_TWO_CONTAINER = 2 * SIZE_CONTAINER + 2 * SPACING;
const Translate = () => {
  const loop = useRef(new Animated.Value(0)).current;
  const translateX = [
    {
      translateX: loop.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 2 * SIZE_CONTAINER - 6 * SPACING, 0],
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
    <View style={[styles.container2Box]}>
      <Text style={[globalStyle.h3]}> Translate X </Text>
      <Animated.View
        resizeMode="contain"
        style={[styles.box, {transform: translateX}]}
      />
    </View>
  );
};

export default Translate;
const styles = StyleSheet.create({
  container2Box: {
    width: SIZE_TWO_CONTAINER,
    margin: SPACING,
  },
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
    backgroundColor: globalStyle.mainColor,
    borderRadius: 100,
  },
});
