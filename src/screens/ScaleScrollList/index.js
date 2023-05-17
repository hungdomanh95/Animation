import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions, StatusBar,Animated,FlatList,ImageBackground,SafeAreaView } from 'react-native'
import {listAvatar} from '../../utils/listItems'
import size from "../../utils/size"
const BG = require("../../assets/background-grass.png")

const width = size.width
const height = size.height
const SPACING = 20
const AVATAR_SIZE = 70
const MARGIN_BOTTOM = 20
const ITEM_SIZE = AVATAR_SIZE + SPACING*2 + MARGIN_BOTTOM
// Tổng kích thước của item = chiều cao của avatar + khoảng cách padding top và bottom + marginBottom giữa 2 item
const ScaleScrollList = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current

  const renderItem = ({item, index}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange:opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return(
        <Animated.View style={[styles.styleItem,{
          transform:[{scale}],
          opacity
        }]}>
          <Image source={item.avatar} style={styles.styleAvatar} />
          <View>
            <Text style={{fontSize:16, fontWeight:"700"}} >{item.name}</Text>
            <Text style={{fontSize:16, opacity:0.7}}>{item.jobTitle}</Text>
            <Text style={{fontSize:14, color:"#0099cc", opacity:0.8}}>{item.email}</Text>
          </View>
        </Animated.View>
    )
  }

  return (
    <ImageBackground source={BG} style={{width, height}} resizeMode="cover">
      <SafeAreaView>
        <Animated.FlatList
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          data={listAvatar}
          keyExtractor={(item, index) => `${item.name}_${index}`}
          renderItem={renderItem}
          contentContainerStyle={styles.containerStyleFlatList}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default ScaleScrollList
const styles = StyleSheet.create({
  containerStyleFlatList: {
    padding: SPACING,
    paddingHorizontal:SPACING+20,
    // paddingTop: StatusBar.currentHeight || 100,
  },
  styleItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: SPACING,
    marginBottom: MARGIN_BOTTOM,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    alignItems:"center"
  },
  styleAvatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
});