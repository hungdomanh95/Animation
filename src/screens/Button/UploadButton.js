import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import size from '../../utils/size';
const WIDTH_CONTAINER = 200;
const HEIGHT_CONTAINER = 50;
const DURATION = 500;
import Icon from 'react-native-vector-icons/FontAwesome5';
const UploadButton = () => {
  const heightAnimated = useRef(new Animated.Value(0)).current;
  const widthAnimated = useRef(new Animated.Value(0)).current;
  const progressAnimated = useRef(new Animated.Value(0)).current;
  const textAnimated = useRef(new Animated.Value(0)).current;
  const iconAnimated = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(heightAnimated, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      Animated.parallel([
        Animated.timing(textAnimated, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(widthAnimated, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
          easing: Easing.linear,
        })
      ]),
      Animated.timing(progressAnimated, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      Animated.parallel([
        Animated.timing(progressAnimated, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(heightAnimated, {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(widthAnimated, {
          toValue: 2,
          duration: DURATION,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
      Animated.timing(iconAnimated, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ]).start();
  };

  const changeBtn = () => {
    const width = widthAnimated.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [WIDTH_CONTAINER, 350, 50],
    });
    const height = heightAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [HEIGHT_CONTAINER, 10],
    });
    const backgroundColor = heightAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: ['#9b59b6', '#cccccc'],
    });
    return {
      width,
      height,
      backgroundColor,
    };
  };
  const runProgress = () => {
    const width = progressAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 350],
    });
    return { width }
  };
  const hideText = () => {
    const opacity = textAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
    return { opacity }
  };
  const showIcon = () => {
    const opacity = iconAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return { opacity }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View style={[styles.container, changeBtn()]}>
        <Animated.View style={[styles.progress, runProgress()]} />
        <Animated.Text style={[styles.text,hideText()]}>Upload Something</Animated.Text>
        <Animated.Text style={[styles.icon,showIcon()]}><Icon name="check" size={24} color="#FFFFFF" /></Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  container: {
    // width: WIDTH_CONTAINER,
    // height: HEIGHT_CONTAINER,
    marginVertical: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 50,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  progress: {
    height: 10,
    backgroundColor: '#9b59b6',
    position: 'absolute',
    alignSelf: 'flex-start',
    borderRadius: 50,
  },
  icon:{
    position:'absolute'
  }
});
