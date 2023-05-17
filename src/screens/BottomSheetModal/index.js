import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import SheetModal from './SheetModal'
import { COLOR, SIZE, TEXT } from '../../theme'

const BottomSheetModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleModal}>
        <Text style={[{color:COLOR.white},{...TEXT.fz14, ...TEXT.bold}]}>OPEN MODAL</Text>
      </TouchableOpacity>

      {openModal && <SheetModal handleModal={handleModal} /> }
    </View>
  )
}

export default BottomSheetModal

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    height:SIZE.height_btn,
    width:SIZE.btn2,
    backgroundColor:COLOR.orange,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16
  }
})