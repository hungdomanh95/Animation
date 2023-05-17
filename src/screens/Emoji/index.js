import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import size from '../../utils/size';
import Love from './Love';
import Wow from './Wow';
const Emoji = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Love />
      <Wow />
    </SafeAreaView>
  );
};

export default Emoji;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: size.heightHeader,
  },
});
