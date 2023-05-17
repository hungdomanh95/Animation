import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import globalStyle from '../../theme/globalStyle';

const {width} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = 50;
let SIZE_CIRCLE = 300;
let RADIUS = SIZE_CIRCLE / 2;

const arrImg = [
  {
    id: 1,
    image: assets.Pikachu,
    name: 'Pikachu',
  },
  {
    id: 2,
    image: assets.Bulbasaur,
    name: 'Bulbasaur',
  },
  {
    id: 3,
    image: assets.Squirtle,
    name: 'Squirtle',
  },
  {
    id: 4,
    image: assets.Charizard,
    name: 'Charizard',
  },
  {
    id: 5,
    image: assets.Treecko,
    name: 'Treecko',
  },
  {
    id: 6,
    image: assets.Dragonite,
    name: 'Dragonite',
  },
];
const CircleItems = () => {
  const [newArray, setNewArray] = useState(undefined);
  const rotate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const newArr = arrImg.map((item, index) => {
      var offsetAngle = 360 / arrImg.length; // góc chung
      var rotateAngle = offsetAngle * index; // góc của từng item
      // 1 rad  = (180/ Math.PI) => 1 độ = Math.PI / 180 * rad
      var degToRad = (rotateAngle * Math.PI) / 180; // đổi từ góc sang radian

      return {
        ...item,
        left: RADIUS * Math.cos(degToRad) + RADIUS,
        top: RADIUS * Math.sin(degToRad) + RADIUS,
      };
    });
    setNewArray(newArr);
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 7000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  animatedRotate = rotate.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  rotateOpposit = rotate.interpolate({inputRange, outputRange});
  const transform = [{rotate: animatedRotate}];
  const transform1 = [{rotate: rotateOpposit}];

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.h3, {marginBottom: SIZE_BOX}]}>
        {' '}
        Around Circle
      </Text>
      <Animated.View style={[styles.containerCircle, {transform}]}>
        {newArray &&
          newArray.map((item, index) => {
            return (
              <Animated.View
                key={index}
                resizeMode="contain"
                source={item.image}
                style={[
                  styles.box,
                  {left: item.left, top: item.top, transform: transform1},
                ]}
              />
            );
          })}
      </Animated.View>
    </View>
  );
};

export default CircleItems;
const styles = StyleSheet.create({
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
    position: 'absolute',
    margin: -0.5 * SIZE_BOX,
    // top:SIZE_CIRCLE/2,
    // left:SIZE_CIRCLE/2
  },
  container: {
    width,
    height: width,
    marginHorizontal: -SPACING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCircle: {
    position: 'relative',
    width: SIZE_CIRCLE,
    height: SIZE_CIRCLE,
    borderRadius: 1000,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
});
