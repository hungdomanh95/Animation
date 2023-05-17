import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Svg, {Circle, Rect, Path} from 'react-native-svg';
const SIZE = 100;
const duration = 1500;
const SIZE_EYE = 15
const SIZE_MOUTH = 15
const patchEyebrows =
  'M8,3.43a1,1,0,0,1-.7-.29,4,4,0,0,0-5.6,0,1,1,0,0,1-1.4-1.4,5.94,5.94,0,0,1,8.4,0A1,1,0,0,1,8,3.43Z';
const Wow = () => {
  // const heart = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(heart, {
  //       toValue: 6,
  //       duration,
  //       useNativeDriver: true,
  //       easing: Easing.linear,
  //     }),
  //   ).start();
  // }, []);

  // const scale = {
  //   transform: [
  //     {
  //       scale: heart.interpolate({
  //         inputRange: [0, 1, 2, 3, 4, 5, 6],
  //         outputRange: [1, 1.3, 1, 0.6, 1, 1.3, 1],
  //       }),
  //     },
  //   ],
  // };

  return (
    <View style={styles.container}>
      <View style={styles.eyebrows}>
        <Svg height="24" width="20" viewBox="0 0 8.98 3.43">
          <Path d={patchEyebrows} fill="#3c3c3b" />
        </Svg>
        <Svg height="24" width="20" viewBox="0 0 8.98 3.43">
          <Path d={patchEyebrows} fill="#3c3c3b" />
        </Svg>
      </View>
        <View style={styles.containerEyes}>
          <View style={styles.eye} />
          <View style={styles.eye} />
        </View>
        <View style={styles.mouth} />
    </View>
  );
};

export default Wow;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#FFDA6A',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  eyebrows: {
    flexDirection: 'row',
    width: SIZE,
    justifyContent: 'space-around',
    position:"absolute",
    top:0
  },
  containerEyes:{
    flexDirection: 'row',
    width: SIZE,
    justifyContent: 'space-around',
    position:"absolute",
  },
  eye: {
    width: SIZE_EYE,
    height: SIZE_EYE,
    borderRadius: SIZE_EYE / 2,
    backgroundColor: '#3c3c3b',
    transform: [{ scaleX: 1.2 }, { scaleY: 1.6 }],
  },
  mouth:{
    width: SIZE_MOUTH,
    height: SIZE_MOUTH,
    borderRadius: SIZE_MOUTH / 2,
    backgroundColor: '#3c3c3b',
    transform: [{ scaleX: 1.6 }, { scaleY: 2.5 }],
    position:"absolute",
    bottom:0 - SIZE_MOUTH/2 ,
  }
});
