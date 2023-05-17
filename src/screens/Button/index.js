import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProgressButton from './ProgressButton';
import LineButton from './LineButton';
import AroundButton from './AroundButton';
import UploadButton from './UploadButton';
import size from '../../utils/size';
import ShareButton from './ShareButton';
import InputAnimation from './InputAnimation';
const ButtonContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressButton />
      <LineButton />
      <AroundButton />
      {/* <UploadButton />
      <ShareButton /> */}
      <InputAnimation/>
    </SafeAreaView>
  );
};

export default ButtonContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FF',
    alignItems: 'center',
    paddingTop: size.heightHeader
  },
});
