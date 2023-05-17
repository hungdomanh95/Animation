import {SafeAreaView, StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import size, {HEADER_MAX_HEIGHT} from '../../utils/size';

const PokeGallery = () => {
  return (
    <View style={styles.container}>
      <Header title={'Poke-Gallery'} />
      <CardList />
    </View>
  );
};

export default PokeGallery;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // paddingBottom: HEADER_MAX_HEIGHT + HEADER_MAX_HEIGHT/2 + 25, // 25 : padding bottom ios
    // justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
