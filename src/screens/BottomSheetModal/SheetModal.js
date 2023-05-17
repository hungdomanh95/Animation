import { StyleSheet, Text, View,Animated,Easing,TouchableOpacity,PanResponder } from 'react-native'
import React,{useEffect,useRef} from 'react'
import { COLOR, SIZE, TEXT } from '../../theme';
const HEIGHT_MODAL = 500
const duration = 500
const SheetModal = (props) => {
  const animated = useRef(new Animated.Value(0)).current;
  const scrollOffset = useRef(0);
  useEffect(()=>{
    Animated.timing(animated,{
      duration,
      toValue: 1,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start()

  },[])

  const handleModal = () => {
    // console.log("handleModal");
    Animated.timing(animated,{
      duration,
      toValue: 0,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => props.handleModal())
  }

  const transformModal = {
    bottom: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-HEIGHT_MODAL, 0],
      extrapolate: 'clamp',
    }),
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animated.setOffset(scrollOffset.current);
        animated.setValue(0);
      },
      onPanResponderMove: (evt, gesture) => {
        // console.log('gesture: ', gesture.dy);
        animated.setValue(gesture.dy);
      },
      onPanResponderRelease: (evt, gesture) => {
        animated.flattenOffset();
        console.log('scrollOffset.current: ', scrollOffset.current);
        if (gesture.dy > 0) {
          // is dragging down
          if (scrollOffset.current !== 0 && gesture.dy <= 100) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          // is dragging up
          if (scrollOffset.current !== -300 && gesture.dy >= -100) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction) => {
    scrollOffset.current = direction === 'down' ? 0 : -300;
    Animated.timing(animated, {
      toValue: direction === 'down' ? 50 : -300,
      useNativeDriver: false,
    }).start();
  };


  const popoverAnimation = () => {
    const height = animated.interpolate({
      inputRange: [-300, 0, 50],
      outputRange: [HEIGHT_MODAL, HEIGHT_MODAL/2, HEIGHT_MODAL/2],
      extrapolate: 'clamp',
    })
    return { height }
  };


  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.container,transformModal,popoverAnimation()]}>
        <View
          style={styles.containerDrag}
          {...panResponder.panHandlers}
        >
          <View style={styles.dragHandle} pointerEvents={'none'} />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleModal}>
          <Text style={[{color:COLOR.white},{...TEXT.fz14, ...TEXT.bold}]}>CLOSE MODAL</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default SheetModal

const styles = StyleSheet.create({
  overlay:{
    flex:1,
    backgroundColor:"rgba(0, 0, 0, 0.5)",
    position:"absolute",
    width:"100%",
    height:"100%",
    // justifyContent:"flex-end"
  },
  container:{
    backgroundColor:COLOR.white,
    width:SIZE.width,
    height:HEIGHT_MODAL,
    justifyContent:'center',
    alignItems:'center',
    // bottom:0,
    position: 'absolute',
    // transform:[{
    //   translateY: HEIGHT_MODAL
    // }]
  },
  btn:{
    height:SIZE.height_btn,
    width:SIZE.btn3,
    backgroundColor:COLOR.orange,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16
  },
  containerDrag:{
    width:SIZE.width,
    // backgroundColor:COLOR.orange40,
    top:0,
    position:'absolute',
    justifyContent:"flex-end",
    alignItems:'center',
    paddingVertical:10
  },
dragHandle: {
  width: 100,
  height: 6,
  backgroundColor: '#d3d3d3',
  borderRadius: 10,
},
})
