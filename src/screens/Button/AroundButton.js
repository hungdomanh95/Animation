import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
const WIDTH_CONTAINER = 350;
const HEIGHT_CONTAINER = 60;
const BORDER_WIDTH = 2;
const SIZE_DOT = 20;
const DURATIONX = 5000;

const AroundButton = () => {
  const aroundX = useRef(new Animated.Value(0)).current;
  const rotateAround = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(rotateAround, {
          toValue: 1,
          duration: DURATIONX,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(aroundX, {
          toValue: 1,
          duration: DURATIONX,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  }, []);

  const runAround = () => {
    const translateX = aroundX.interpolate({
      inputRange:  [0, 0.3, 0.5,0.8,1],
      outputRange: [
        0,
        WIDTH_CONTAINER - HEIGHT_CONTAINER,
        WIDTH_CONTAINER - 2 * BORDER_WIDTH - HEIGHT_CONTAINER,
        0,
        0
      ],
    });

    const rotate = rotateAround.interpolate({
      inputRange: [0, 0.3, 0.5,0.8,1],
      outputRange: ["0deg","0deg","180deg", "180deg", "360deg"],
    });
    return {
      transform: [{translateX}, {rotate:rotate}],
      // backgroundColor: 'rgba(23,23,23,0.5)',
      width:HEIGHT_CONTAINER,
      height: HEIGHT_CONTAINER,
      position: 'absolute',
      alignItems:"center",
      left:-BORDER_WIDTH,
      top:-BORDER_WIDTH
    };
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[runAround()]} >
        <View style={styles.dot} />
      </Animated.View>
      <View style={styles.content}>
        <Text style={styles.text}>BUTTON</Text>
      </View>
    </View>
  );
};

export default AroundButton;
const styles = StyleSheet.create({
  container: {
    borderWidth: BORDER_WIDTH,
    borderColor: '#18A348',
    width: WIDTH_CONTAINER,
    height: HEIGHT_CONTAINER,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 10,
    borderRadius:100,
  },
  content:{
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent:"center",
  },
  text: {
    color: '#18A348',
    fontSize: 16,
  },
  dot:{
    backgroundColor: '#18A348',
    width: SIZE_DOT,
    height:SIZE_DOT,
    top:-SIZE_DOT/2,
    borderRadius:100,
    borderWidth:5,
    borderColor:"#fff",
    shadowColor: '#18A348',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,

    elevation: 10,
  }
});
