import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const WIDTH_CONTAINER = 350;
const HEIGHT_CONTAINER = 100;
const WIDTH_BTN = 200;
const HEIGHT_BTN = 50;
const duration = 500;
const ShareButton = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const iconAnimated = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 1,
        duration,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      Animated.timing(iconAnimated, {
        toValue: 1,
        duration,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ]).start()
  };
  const animatedOverlay = () => {
    const translateY = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50],
    });
    return {
      transform: [{translateY}],
    };
  };
  const translateIcon = () => {
    const translateX = iconAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, - WIDTH_BTN - 5],
    });
    return {
      transform: [{translateX}],
    };
  }
  const animatedIcon = () => {
    const rotate = iconAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: ["40deg", "0deg"],
    });
    return {
      transform: [{rotate}],
    };
  };


  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Animated.View style={[styles.overlay, animatedOverlay()]}>
          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={styles.text}>Share</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.iconContainer,translateIcon()]} >
          <Animated.View style={[styles.icon,animatedIcon()]}>
            <Icon name="facebook" size={24} color="#368B8B" />
          </Animated.View>
          <Animated.View style={[styles.icon,animatedIcon()]}>
            <Icon name="twitter" size={24} color="#368B8B" />
          </Animated.View>
          <Animated.View style={[styles.icon,animatedIcon()]}>
            <Icon name="gitlab" size={24} color="#368B8B" />
          </Animated.View>
          <Animated.View style={[styles.icon,animatedIcon()]}>
            <Icon name="instagram" size={24} color="#368B8B" />
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default ShareButton;

const styles = StyleSheet.create({
  container: {
    width: WIDTH_CONTAINER,
    height: HEIGHT_CONTAINER,
    backgroundColor: '#36BFA6',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  containerButton: {
    width: WIDTH_BTN,
    height: HEIGHT_BTN,
    backgroundColor: '#368B8B',
    borderRadius: 50,
    // padding:5,
    overflow:'hidden'
  },
  text: {
    fontSize: 18,
    color: '#AEAEAE',
  },
  overlay: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  iconContainer:{
    flexDirection:"row",
    width: WIDTH_BTN - 10,
    justifyContent:"space-between",
    position:"absolute",
    bottom:5,
    left:WIDTH_BTN + 10
  },
  icon:{
    width:40,
    height:40,
    backgroundColor:"#FFF",
    borderRadius:40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
