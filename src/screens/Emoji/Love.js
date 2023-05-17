import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const SIZE = 100;
const duration = 1500;
const Love = () => {
  const heart = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(heart, {
        toValue: 6,
        duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  const scale = {
    transform: [
      {
        scale: heart.interpolate({
          inputRange: [0, 1, 2, 3, 4, 5, 6],
          outputRange: [1, 1.3, 1, 0.6, 1, 1.3, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={scale}>
        <Icon name="heart" color="#FFFFFF" size={50} />
      </Animated.Text>
    </View>
  );
};

export default Love;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#F55064',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10
  },
});
