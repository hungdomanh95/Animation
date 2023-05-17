import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  Easing,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Pie from 'react-native-pie';
const {width, height} = Dimensions.get('window');
const SIZE_BG = width * 0.8;
const COLOR = 'rgba(38, 121, 241, 0.25)';
const COLOR_COUNT = 'rgba(38, 121, 241,1)';
const SIZE_CHART = (width / 2 - 50) / 1.5;
const COUNT_GET_WALK = 24;
const PERCENT = 100 / 24;
const BG_BTN = 2 * SIZE_CHART - 60;
const SIZE_WALK_ICON = SIZE_CHART;
export const iconWalk = require('../../assets/icon-walk.png');
const SpreadButton = () => {
  const animated1 = useRef(new Animated.Value(0)).current;
  const animated2 = useRef(new Animated.Value(0)).current;
  const animated3 = useRef(new Animated.Value(0)).current;
  const opacity = animated1.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });
  const scale1 = animated2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.78, 1, 0.78],
  });
  const scale2 = animated3.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1],
  });

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(animated1, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animated2, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Button Animatios</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Animated.View style={[{opacity}, {transform: [{scale: scale1}]}]}>
            <Pie
              radius={SIZE_CHART}
              innerRadius={SIZE_CHART - 30}
              sections={Array(COUNT_GET_WALK).fill({
                percentage: PERCENT,
                color: COLOR,
              })}
              dividerSize={1}
              strokeCap={'butt'}
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.containerImgChart,
              {backgroundColor: COLOR_COUNT, width: BG_BTN, height: BG_BTN},
              {transform: [{scale: scale2}]},
            ]}>
            <Image source={iconWalk} style={styles.imgBtn} />
            <Text style={[styles.styleText, {color: 'white'}]}>Earn 1τ</Text>
          </Animated.View>
        </TouchableOpacity>
        <Text style={{fontWeight: '700'}}>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default SpreadButton;
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
    backgroundColor: '#0A121E',
  },
  containerImgChart: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  styleText: {
    color: '#2679F1',
    lineHeight: 22,
    fontSize: 18,
    fontWeight: '700',
  },
  imgBtn: {
    width: SIZE_WALK_ICON,
    height: SIZE_WALK_ICON,
  },
});
