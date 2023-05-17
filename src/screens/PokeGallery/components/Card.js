import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import React,{useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import size from '../../../utils/size';
const Card = props => {

  const {name, pic} = props.item;

  const scaleAnimated = useRef(new Animated.Value(0)).current;

  const scaleButtom = {
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
      onPressIn={() => {
        scaleAnimated.setValue(0);
        Animated.timing(scaleAnimated, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
      }}
      onPressOut={() => {
        Animated.timing(scaleAnimated, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
      }}>
      <View style={styles.container}>
        <Animated.Image source={pic} style={[styles.thumbnail,scaleButtom]} />
        <Text style={styles.name}>{name}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={()=>console.log("------")} >
            <Icon style={styles.icon} name="search" size={15} color="#586069" />
          </TouchableOpacity>
          <Icon style={styles.icon} name="bookmark" size={15} color="#586069" />
          <Icon style={styles.icon} name="share" size={15} color="#586069" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // width: '50%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginVertical:10
    // // backgroundColor: '#fafbfc',
    // // padding: 10,
    // // margin: 10,
    width: size.width / 2 - 20,
    backgroundColor: '#fafbfc',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  card: {
    width: 120,
    height: 140,
    backgroundColor: '#fafbfc',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  thumbnail: {
    width: 75,
    height: 75,
  },
  name: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  iconContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 8,
  },
});
