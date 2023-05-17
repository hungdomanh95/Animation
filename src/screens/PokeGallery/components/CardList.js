import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Card from './Card';
import {pokemon_data} from '../../../utils/listItems';
import size, {
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  HEADER_SCROLL_DISTANCE,
} from '../../../utils/size';

const CardList = () => {
  const nativeScrollY = useRef(new Animated.Value(0)).current;

  const headerStyles = () => {
    const translateY = nativeScrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT / 2],
      outputRange: [0, -HEADER_MAX_HEIGHT / 2],
      extrapolate: 'clamp',
    });

    return {
      transform: [{translateY}],
    };
  };

  return (
    <Animated.View style={[headerStyles(),{paddingBottom: HEADER_MAX_HEIGHT + HEADER_MAX_HEIGHT/2 + 25}]}>
      <Animated.ScrollView
        style={[styles.scroll]}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: nativeScrollY}}}],
          {useNativeDriver: true}
        )}>
        <Animated.View
          style={[{flexDirection: 'row', flexWrap: 'wrap'}]}>
          {pokemon_data.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </Animated.View>
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  scroll: {
    // height:size.height - 2*HEADER_MAX_HEIGHT,
    //  height:4000,
    // width: '100%',
    // flex: 1,
    backgroundColor: '#FFF',
    // paddingBottom: HEADER_MAX_HEIGHT + HEADER_MAX_HEIGHT/2 + 25, // 25 : padding bottom ios
    // backgroundColor: 'red',
    // paddingBottom:HEADER_MAX_HEIGHT
  },
});
