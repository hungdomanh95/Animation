import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import globalStyle from '../../theme/globalStyle';

const {width} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const Fade = () => {
  const animatedIn = useRef(new Animated.Value(0)).current;
  const animatedOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    handleAnimatedInOut();
  });

  const handleAnimatedInOut = () => {
    animatedIn.setValue(0);
    animatedOut.setValue(1);
    Animated.timing(animatedIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedOut, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View style={styles.containerBox}>
        <Text style={[globalStyle.h3]}> fadeIn </Text>
        <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
          <Animated.View
            resizeMode="contain"
            style={[styles.box, {opacity: animatedIn}]}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.containerBox}>
        <Text style={[globalStyle.h3]}> fadeOut </Text>
        <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
          <Animated.View
            resizeMode="contain"
            style={[styles.box, {opacity: animatedOut}]}
          />
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default Fade;
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
