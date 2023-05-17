import {View, StyleSheet, Animated, Dimensions, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
const {width} = Dimensions.get('window');
const SIZE_BG = width * 0.8;
const Cloud = ({top, left, duration}) => {
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translate = [
    {
      translateX: animated.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZE_BG, -220],
      }),
    },
  ];
  return (
    <Animated.View style={[styles.clound, {top, left, transform: translate}]}>
      <View style={styles.childCloudOne} />
      <View style={styles.childCloud} />
      <View style={styles.childCloudTwo} />
    </Animated.View>
  );
};

export default Cloud;
const styles = StyleSheet.create({
  clound: {
    width: 100,
    height: 25,
    top: 30,
    alignItems: 'center',
  },
  childCloud: {
    overflow: 'hidden',
    width: '50%',
    height: '100%',
    position: 'absolute',
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    backgroundColor: '#FFFFFF',
    top: 0,
  },
  childCloudOne: {
    overflow: 'hidden',
    width: '30%',
    height: '60%',
    position: 'absolute',
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    backgroundColor: '#FFFFFF',
    bottom: 0,
    left: 0,
  },
  childCloudTwo: {
    overflow: 'hidden',
    width: '30%',
    height: '60%',
    position: 'absolute',
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    backgroundColor: '#FFFFFF',
    bottom: 0,
    right: 0,
  },
});
