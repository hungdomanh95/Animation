import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import Plane from './Plane';
import Cloud from './Cloud';
import size from '../../utils/size';
const SIZE_BG = size.width * 0.8;
const PaperPlane = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Paper Plane Transition</Text> */}
      <View style={styles.container}>
        <View style={styles.background}>
          <Plane />
          <Cloud top={10} left={20} duration={2500} />
          <Cloud top={50} left={-100} duration={3000} />
          <Cloud top={200} left={50} duration={2800} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaperPlane;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  background: {
    width: SIZE_BG,
    height: SIZE_BG,
    borderRadius: SIZE_BG,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#50befa',
  },
});
