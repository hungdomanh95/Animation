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

const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const Scale = () => {
  const animatedIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    handleAnimatedInOut();
  });
  const handleAnimatedInOut = () => {
    animatedIn.setValue(0);
    Animated.timing(animatedIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View style={styles.containerBox}>
        <Text style={[globalStyle.h3]}> scale </Text>
        <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
          <Animated.View
            resizeMode="contain"
            style={[styles.box, {transform: [{scale: animatedIn}]}]}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.containerBox}>
        <Text style={[globalStyle.h3]}> scale X </Text>
        <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
          <Animated.View
            resizeMode="contain"
            style={[styles.box, {transform: [{scaleX: animatedIn}]}]}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.containerBox}>
        <Text style={[globalStyle.h3]}> scale Y </Text>
        <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
          <Animated.View
            resizeMode="contain"
            style={[styles.box, {transform: [{scaleY: animatedIn}]}]}
          />
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default Scale;
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
