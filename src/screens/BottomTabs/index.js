import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import size from '../../utils/size';
import Example1 from"./Example1"
const BottomTabs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Example1/>
    </SafeAreaView>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#2980b9",
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: size.heightHeader
  }
})