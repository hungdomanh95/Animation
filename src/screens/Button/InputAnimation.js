import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import { Easing } from 'react-native';
const InputAnimation = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  const animated = useRef(new Animated.Value(0)).current;
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  const onFocus = () => {
    console.log('onFocus: ');
    Animated.timing(animated, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };
  const onBlur  = () => {
    console.log('onBlur: ');
    Animated.timing(animated, {
      duration: 1000,
      toValue: 0,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }
  const animationProgress = () => {
    var animated_width = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200],
    });

    const color_animation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', 'red'],
    });

    return {
      width: animated_width,
      height: 50,
      borderColor:"red",
      borderRadius: 15,
      borderWidth:2,
      position: "absolute",
      borderRightWidth:0
    };
  };
  return (
    <SafeAreaView>
      <AnimatedTextInput onFocus={onFocus} onBlur={onBlur} style={{
          width: 200,
          height: 50,
          borderColor:"#000",
          borderRadius: 15,
          borderWidth:2,

      }} />

      <Animated.View  style={[animationProgress()]}  />


    </SafeAreaView>
  );
};

export default InputAnimation;

const styles = StyleSheet.create({
  a:{
    borderRightWidth:0
  }
});
