import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const SPACING = 10;

const Rotate = () => {
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  animatedRotate = rotate.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  rotateOpposit = rotate.interpolate({inputRange, outputRange});
  const transform = [{rotate: animatedRotate}];
  const transform1 = [{rotate: rotateOpposit}];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.item, {transform}]}>
        <Animated.View style={[styles.dot, {transform: transform1}]}>
          <Text style={styles.text}>Text</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Rotate;
const styles = StyleSheet.create({
  container:{
      width,
      height: width,
      marginHorizontal: -SPACING,
      justifyContent: 'center',
      alignItems: 'center',
  },
  item: {
    position: 'absolute',
    width: 200,
    height: 200, // this is the diameter of circle
    borderRadius: 100,
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
  dot: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: -25,
    borderRadius: 100,
  },
  text: {
    color: '#fff',
  },
});
