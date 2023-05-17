import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {Fragment, useRef} from 'react';
import {listMenu} from '../../utils/listItems';
import size from '../../utils/size';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
const WIDTH_MENU = size.width;
const SIZE_CENTER = 72
const SIZE_SECONDARY = 48
const duration = 200;
const Example1 = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const mode = useRef(new Animated.Value(0)).current;
  const clock = useRef(new Animated.Value(0)).current;
  const bell = useRef(new Animated.Value(0)).current;
  const heart = useRef(new Animated.Value(0)).current;

  const centerPress = () => {
    mode.addListener(({value}) => {});
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(mode, {
          toValue: mode.__getValue() === 0 ? 1 : 0,
          duration,
          useNativeDriver: true,
          easing: Easing.linear,
        }),

        Animated.timing(bell, {
          toValue: mode.__getValue() === 0 ? 1 : 0,
          duration:300,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(clock, {
          toValue: mode.__getValue() === 0 ? 1 : 0,
          duration:250,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(heart, {
          toValue: mode.__getValue() === 0 ? 1 : 0,
          duration:200,
          useNativeDriver: true,
          easing: Easing.linear,
        }),

      ])

    ]).start();
  };
  const scaleButtom = {transform: [{scale}]};

  const rotate = {
    transform: [
      {
        rotate: mode.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };


  transformBell = {
    transform: [
      {
        translateX: bell.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -SIZE_CENTER]
        }),
      },
      {
        translateY: bell.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -SIZE_CENTER/2]
        }),
      },
      {
        scale:bell.interpolate({
          inputRange: [0, 1],
          outputRange: [0,1]
        }),
      }
    ],
  }

  transformClock = {
    transform: [
      {
        translateY: clock.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -SIZE_CENTER]
        }),
      },
      {
        scale:clock.interpolate({
          inputRange: [0, 1],
          outputRange: [0,1]
        }),
      }
    ],
  }

  transformHeart = {
    transform: [
      {
        translateX: heart.interpolate({
          inputRange: [0, 1],
          outputRange: [0, SIZE_CENTER]
        }),
      },
      {
        translateY: heart.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -SIZE_CENTER/2]
        }),
      },
      {
        scale:heart.interpolate({
          inputRange: [0, 1],
          outputRange: [0,1]
        }),
      }
    ],
  }

  const centerButtom = () => {
    return (
      <TouchableOpacity style={styles.itemMenu} activeOpacity={1} onPress={centerPress}>
        <Animated.View style={[styles.secondaryButton,transformClock]}>
          <Feather name="clock" size={24} color="#FFF" />
        </Animated.View>
        <Animated.View style={[styles.secondaryButton,transformBell]}>
          <Feather name="bell" size={24} color="#FFF" />
        </Animated.View>
        <Animated.View style={[styles.secondaryButton,transformHeart]}>
          <Feather name="heart" size={24} color="#FFF" />
        </Animated.View>


        <Animated.View style={[styles.centerButtom, scaleButtom]} >
          <Animated.View style={rotate}>
            <Icon name="plus" size={24} color="#FFFFFF" />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      {listMenu.map((item, index) => (
        <Fragment key={index}>
          {item.id === 3 ? (
            centerButtom()
          ) : (
            <TouchableOpacity style={styles.itemMenu} onPress={handlePress}>
              <Text>{item.icon}</Text>
            </TouchableOpacity>
          )}
        </Fragment>
      ))}
    </View>
  );
};

export default Example1;

const styles = StyleSheet.create({
  container: {
    width: WIDTH_MENU,
    height: size.heightMenu,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemMenu: {
    width: WIDTH_MENU / listMenu.length,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#CDCCCE',
  },
  centerButtom: {
    backgroundColor: '#7F58FF',
    width: SIZE_CENTER,
    height: SIZE_CENTER,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: -size.heightMenu/2,
    shadowColor: '#7F58FF',
    shadowRadius: 5,
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    elevation: 15,
  },
  secondaryButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: SIZE_SECONDARY,
    height: SIZE_SECONDARY,
    borderRadius: 24,
    backgroundColor: "#7F58FF",
    top:-SIZE_SECONDARY/2,
}
});
