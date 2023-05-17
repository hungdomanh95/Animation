import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import globalStyle from '../../theme/globalStyle';

const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const SIZE_TWO_CONTAINER = 2 * SIZE_CONTAINER + 2 * SPACING;
const Square = () => {
  const aroundX = useRef(new Animated.Value(0)).current;
  const aroundY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(aroundX, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(aroundY, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(aroundX, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(aroundY, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
      {iterations: 500},
    ).start();
  }, []);

  const translateAroundX = aroundX.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 2 * SIZE_CONTAINER - 6 * SPACING, 0],
  });
  const translateAroundY = aroundY.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, SIZE_TWO_CONTAINER - SIZE_BOX, 0],
  });
  return (
    <View style={[styles.container2Box]}>
      <Text style={[globalStyle.h3]}> Around</Text>
      <View style={styles.containerSquare}>
        <Animated.View
          resizeMode="contain"
          style={[
            styles.box,
            {
              transform: [
                {translateX: translateAroundX},
                {translateY: translateAroundY},
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Square;
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
  containerSquare: {
    width: SIZE_TWO_CONTAINER,
    height: SIZE_TWO_CONTAINER,
    margin: 0,
    borderStyle: 'dashed',
    borderWidth: 2,
  },
});
