import { StyleSheet, TouchableWithoutFeedback, Image, Animated,Easing,View } from 'react-native'
import React, { useRef, useState } from 'react'
const iconHalf = require("../../assets/rating/star_half.png")
const Item = (props) => {

  const styles = styleWithProps(props)
  const {value,disabled,icon,chooseRating} = props
  const {id} = props.item
  const scaleAnimated = useRef(new Animated.Value(0)).current;

  const scale = {
    transform: [
      {
        scale: scaleAnimated.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.1, 1.2]
        })
      },
    ],
  };

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPressIn={() => {
        scaleAnimated.setValue(0);
        Animated.timing(scaleAnimated, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
        chooseRating(id)
      }}
      onPressOut={() => {
        Animated.timing(scaleAnimated, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
      }}
    >
      <View>
        {(id === Math.floor(value) + 1) && !!(value - Math.floor(value)) &&
          <Animated.Image source={iconHalf} style={[styles.itemHalf]} />
        }
        <Animated.Image source={icon} style={[styles.item, scale]} />
      </View>
    </TouchableWithoutFeedback>
  )


}
const styleWithProps = (props) =>(
  StyleSheet.create({
      item:{
        width:props.iconSize,
        height:props.iconSize,
        marginHorizontal:3,
        backgroundColor:props.color
      },
      itemHalf:{
        position:"absolute",
        top:0,
        left:5,
        width:props.iconSize/2,
        height:props.iconSize,
        zIndex:999
      }
  }))
export default Item
