import {Image, StyleSheet, Text, View, Animated,Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import size from '../../utils/size';

const SIZE_SMALL = 60;
const SIZE_BIG = (size.height - 200 - 4*SIZE_SMALL) - 10;
const WIDTH_CONTAINER = size.width - 100;
const SIZE_ICON = 20;
const duration = 100
const CardItem = props => {

  const {
    item: {name, img, icon},
    nameActive,
  } = props;

  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(nameActive === name){
      Animated.timing(animated, {
        toValue: 1,
        duration,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start()
    }else{
      Animated.timing(animated, {
        toValue: 0,
        duration:duration,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start()
    }
  }, [nameActive]);

  var animatedActive = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZE_SMALL, SIZE_BIG],
  });

  return (
    <Animated.View style={[styles.container, nameActive === name && styles.activeContainer,{height:animatedActive}]}>
      <Image source={img} style={{width: '100%', height: '100%'}}
      // resizeMode={nameActive === name ? "stretch" : "cover"}
      />
      <View style={[styles.icon, nameActive === name && styles.iconActive]}>
        <Text>{icon}</Text>
      </View>
    </Animated.View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: WIDTH_CONTAINER,
    // height: SIZE_SMALL,
    marginVertical: 5,
    borderRadius: 30,
    overflow:"hidden"
  },
  activeContainer: {
    // height: SIZE_BIG,
    borderRadius: 40,
  },
  icon: {
    backgroundColor: '#FFFFFF',
    width: 2 * SIZE_ICON,
    height: 2 * SIZE_ICON,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: SIZE_SMALL / 2 - SIZE_ICON,
  },
  iconActive: {
    bottom: 20,
    left: 20,
  },
});
