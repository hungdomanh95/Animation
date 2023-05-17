import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
const {width, height} = Dimensions.get('window');
const SIZE_BG = width * 0.8;
const SIZE_WATER = 100;
const SIZE_MOON = SIZE_BG * 0.22;
const SIZE_STAR = '0.4%';

const DayNightTransition = () => {
  const [day, setDay] = useState(false);
  const animated = useRef(new Animated.Value(0)).current;

  const onHandlePress = () => {
    setDay(!day);
    Animated.timing(animated, {
      toValue: !day ? 1 : 0,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };
  const transitionBG = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['#2a3741', '#e9786b'],
  });
  const transitionWater = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['#7fa1bb', '#71baf2'],
  });

  const translateMoon = [
    {
      translateX: animated.interpolate({
        inputRange: [0, 1],
        outputRange: [20, SIZE_BG + 2 * SIZE_WATER],
      }),
    },
    {
      translateY: animated.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZE_BG - SIZE_WATER - SIZE_MOON - 20, -SIZE_BG / 2],
      }),
    },
  ];
  const translateSun = [
    {
      translateX: animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0],
      }),
    },
    {
      translateY: animated.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZE_BG, SIZE_BG - SIZE_WATER - SIZE_MOON / 3],
      }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Day Night Transition</Text> */}
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onHandlePress}>
          <Animated.View
            style={[styles.background, {backgroundColor: transitionBG}]}>
            <Animated.View
              style={[styles.water, {backgroundColor: transitionWater}]}
            />

            <Animated.View style={[styles.moon, {transform: translateMoon}]}>
              <View style={styles.shadowMoon} />
              <View style={styles.childMoon1}>
                <View style={styles.shadowChild} />
              </View>
              <View style={styles.childMoon2}>
                <View style={styles.shadowChild} />
              </View>
              <View style={styles.childMoon3}>
                <View style={styles.shadowChild} />
              </View>
            </Animated.View>

            <Animated.View style={[styles.sun, {transform: translateSun}]} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default DayNightTransition;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  background: {
    width: SIZE_BG,
    height: SIZE_BG,
    borderRadius: SIZE_BG,
    overflow: 'hidden',
    alignItems: 'center',
  },
  water: {
    position: 'absolute',
    width: '100%',
    height: SIZE_WATER,
    bottom: 0,
    zIndex: 1,
  },
  moon: {
    backgroundColor: '#899098',
    width: SIZE_MOON,
    height: SIZE_MOON,
    borderRadius: 50,
    position: 'absolute',
    overflow: 'hidden',
  },
  sun: {
    backgroundColor: '#f2ef88',
    width: SIZE_MOON,
    height: SIZE_MOON,
    borderRadius: 50,
    // backgroundColor: 'white', // bắt buộc phải có
    shadowColor: '#FFF',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  shadowMoon: {
    backgroundColor: '#d9d8d0',
    width: '100%',
    height: '100%',
    borderRadius: 100,
    top: 5,
    left: -15,
  },
  childMoon1: {
    position: 'absolute',
    backgroundColor: '#535457',
    width: '27%',
    height: '27%',
    borderRadius: 100,
    top: '25%',
    left: '12%',
    overflow: 'hidden',
  },
  childMoon2: {
    position: 'absolute',
    backgroundColor: '#535457',
    width: '12%',
    height: '12%',
    borderRadius: 100,
    bottom: '10%',
    left: '45%',
    overflow: 'hidden',
  },
  childMoon3: {
    position: 'absolute',
    backgroundColor: '#535457',
    width: '14%',
    height: '14%',
    borderRadius: 100,
    top: '11%',
    left: '50%',
    overflow: 'hidden',
  },
  shadowChild: {
    backgroundColor: '#b9b8b0',
    width: '100%',
    height: '100%',
    borderRadius: 100,
    bottom: 3,
    left: 5,
  },
});
