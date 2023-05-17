import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Slide = ({children, ...props}) => {
  const {from, to, opacity, loop, reverse} = props;
  const direction = props.direction || 'horizontal';
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(loop){
      Animated.loop(
        Animated.timing(animated, {
          toValue: 1,
          duration: props.duration || 500,
          useNativeDriver: true,
          easing: Easing.linear,
        })
      ).start();
    }else{
      Animated.timing(animated, {
        toValue: 1,
        duration: props.duration || 500,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    }
  }, []);

  const translate = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [from || 15, to || 0],
  });

  if (direction === 'horizontal') {
    return (
      <Animated.View style={[{transform: [{translateX: translate}]},opacity && { opacity: animated}]}>
        {children}
      </Animated.View>
    );
  } else if (direction === 'vertical') {
    return (
      <Animated.View style={[{transform: [{translateY: translate}]},opacity && { opacity: animated}]}>
        {children}
      </Animated.View>
    );
  }
};

export default Slide;