import { StyleSheet, Text, View, Image,Animated } from 'react-native'
import React from 'react'
import size, { HEADER_MAX_HEIGHT, HEADER_SCROLL_DISTANCE } from '../../../utils/size'

const Header = ({title,nativeScrollY}) => {
  if(nativeScrollY){
    const headerTranslate = nativeScrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });
    const BGImageOpacity = nativeScrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.3, 0.3],
      extrapolate: "clamp"
    });

    const BGImageTranslate = nativeScrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });
    const headerStyles = { transform: [{ translateY: headerTranslate }] };
    const BGImageStyles = {
      opacity: BGImageOpacity,
      transform: [{ translateY: BGImageTranslate }]
    };
  }
  return (
    <Animated.View style={[styles.header]}>
      <Animated.Image source={require("../../../assets/pokemon/team-instinct.jpg")} style={[styles.header_bg]} resizeMode="contain" />
    </Animated.View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: HEADER_MAX_HEIGHT,
    // position:'absolute',
    // top:0,
    // left:0,
    // zIndex:1
    // width:size.width,
    // width:"100%",
    // backgroundColor: "#3e3e",
  },
  header_bg: {
    height: HEADER_MAX_HEIGHT,
  },
  header_text: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 17,
    textAlign: "center",
    padding: 10,
    zIndex: 1
  },
})