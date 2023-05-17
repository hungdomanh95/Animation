import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
const WIDTH_CONTAINER = 350;
const HEIGHT_CONTAINER = 60;
const BORDER_WIDTH = 2;
const DURATIONX = 3000;
const DURATIONY = (DURATIONX * HEIGHT_CONTAINER) / WIDTH_CONTAINER + 100;
const SIZE_DOT = 20;
const DURATION_DOT = DURATIONX*2

const LineButton = () => {

  const widthBefore = useRef(new Animated.Value(0)).current;
  const heightBefore = useRef(new Animated.Value(0)).current;
  const widthAfter = useRef(new Animated.Value(0)).current;
  const heightAfter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    runAnimated()
  }, []);

  const runAnimated = () => {
    Animated.sequence([
      Animated.timing(widthBefore, {
        toValue: 1,
        duration: DURATIONX,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      Animated.timing(heightBefore, {
        toValue: 1,
        duration: DURATIONY,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      Animated.timing(widthAfter, {
        toValue: 1,
        duration: DURATIONX,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      Animated.timing(heightAfter, {
        toValue: 1,
        duration: DURATIONY,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ]).start(event => {
      if(event.finished) {
        widthBefore.setValue(0)
        heightBefore.setValue(0)
        widthAfter.setValue(0)
        heightAfter.setValue(0)
        runAnimated();
      }
    })
  }

  const borderWidthBefore = () => {
    const width = widthBefore.interpolate({
      inputRange:  [0,1],
      outputRange: [0,WIDTH_CONTAINER],
    });
    return {
      width,
      height:BORDER_WIDTH,
      backgroundColor:"#18A348",
    };
  };
  const borderHeightBefore = () => {
    const height = heightBefore.interpolate({
      inputRange:  [0,1],
      outputRange: [0,HEIGHT_CONTAINER],
    });
    return {
      width:BORDER_WIDTH,
      height,
      backgroundColor:"#18A348",
    };
  };
  const borderWidthAfter = () => {
    const width = widthAfter.interpolate({
      inputRange:  [0,1],
      outputRange: [0,WIDTH_CONTAINER],
    });
    return {
      width,
      height:BORDER_WIDTH,
      backgroundColor:"#18A348",
    };
  };
  const borderHeightAfter = () => {
    const height = heightAfter.interpolate({
      inputRange:  [0,1],
      outputRange: [0,HEIGHT_CONTAINER],
    });
    return {
      width:BORDER_WIDTH,
      height,
      backgroundColor:"#18A348",
    };
  };

  const aroundX = useRef(new Animated.Value(0)).current;
  const aroundY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(aroundX, {
          toValue: 1,
          duration: DURATIONX,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(aroundY, {
          toValue: 1,
          duration: DURATIONY,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(aroundX, {
          toValue: 2,
          duration: DURATIONX,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(aroundY, {
          toValue: 2,
          duration: DURATIONY,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ])
    ).start();
  }, []);

  const runAround = () => {
    const translateX = aroundX.interpolate({
      inputRange:  [0,1,2],
      outputRange: [-SIZE_DOT/2,WIDTH_CONTAINER -SIZE_DOT/2 - BORDER_WIDTH/2 ,-SIZE_DOT/2]
    });
    const translateY = aroundY.interpolate({
      inputRange:  [0,1,2],
      outputRange:  [0, HEIGHT_CONTAINER - BORDER_WIDTH/2, 0 ],
    });

    return {
      transform: [{translateX}, {translateY}],
      backgroundColor: 'rgba(23,23,23,0.5)',
      backgroundColor:'red',
      position: 'absolute',
      alignItems:"center",
      zIndex: 999,
      // left:-BORDER_WIDTH,
      // top:-BORDER_WIDTH
    };
  };


  return (
    <View style={styles.container}>
      <Animated.View style={[runAround(),styles.dot]} />

      <View style={styles.content}>
        <Text style={styles.text}>BUTTON</Text>
        <View style={{position:'absolute', left:-BORDER_WIDTH, top:-BORDER_WIDTH}}>
          <Animated.View style={borderWidthBefore()} />
        </View>
        <View style={{position:'absolute', right:-BORDER_WIDTH, top:-BORDER_WIDTH}}>
          <Animated.View style={borderHeightBefore()} />
        </View>
        <View style={{position:'absolute', right:-BORDER_WIDTH, bottom:-BORDER_WIDTH,direction:"rtl"}}>
          <Animated.View style={borderWidthAfter()} />
        </View>
        <View style={{position:'absolute', left:-BORDER_WIDTH, bottom:-BORDER_WIDTH,flexDirection: "column-reverse",}}>
          <Animated.View style={borderHeightAfter()} />
        </View>
      </View>
    </View>
  )
}

export default LineButton

const styles = StyleSheet.create({
  container:{
    width: WIDTH_CONTAINER,
    height: HEIGHT_CONTAINER,
    marginVertical: 10,
    // borderRadius:100,
    borderColor:"#f45e61",
    borderWidth:BORDER_WIDTH
    // overflow:"hidden"
  },
  content:{
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent:"center",
  },
  text:{
    fontSize:18,
    color:"#18A348",
    fontWeight:"bold"
  },
  dot:{
    backgroundColor: '#18A348',
    width: SIZE_DOT,
    height:SIZE_DOT,
    top:-SIZE_DOT/2,
    borderRadius:100,
    borderWidth:5,
    borderColor:"#fff",
    shadowColor: '#18A348',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,

    elevation: 10,
  }
})
// $background: #fefefe;
// $text: #4b507a;

// $cyan: #60daaa;
// $yellow: #fbca67;
// $orange: #ff8a30;
// $red: #f45e61;
// $purple: #6477b9;
// $blue: #0eb7da;
