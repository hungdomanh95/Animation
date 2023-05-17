import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';
import React, {useEffect} from 'react';
import size from '../../utils/size';
const ScrollChangeColor = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {}, []);

  const backgroundInterpolate = scrollY.interpolate({
    inputRange: [0, size.height*3/2],
    outputRange: ['red', 'blue'],
  });

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <View style={styles.container}>
    <ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: false},
      )}
    >
      <Animated.View style={[styles.content, backgroundStyle]} />
    </ScrollView>
  </View>
  );
};

export default ScrollChangeColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: size.height*3,
  }
});
