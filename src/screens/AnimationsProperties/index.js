import React from 'react';
import { Fragment } from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { listAnimation } from './listAnimation';
const SPACING = 10;

const AnimationsProperties = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerRow}>
          {listAnimation.map((item, index)=>{
            return <Fragment key={index}>{item.component}</Fragment>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimationsProperties;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: SPACING,
  },
});
