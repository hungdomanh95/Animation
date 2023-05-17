import {SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import size from '../../utils/size';
import CardItem from './CardItem';
const SIZE_ICON = 20
const listImg = [
  {
    id: 1,
    name: 'walking',
    img: require('../../assets/flexCard/1.jpeg'),
    icon: <Icon name="walking" size={SIZE_ICON} color="#ED5565" />,
  },
  {
    id: 2,
    name: 'snowflake',
    img: require('../../assets/flexCard/2.jpeg'),
    icon: <Icon name="snowflake" size={SIZE_ICON} color="#FC6E51" />,
  },
  {
    id: 3,
    name: 'tree',
    img: require('../../assets/flexCard/3.jpeg'),
    icon: <Icon name="tree" size={SIZE_ICON} color="#FFCE54" />,
  },
  {
    id: 4,
    name: 'tint',
    img: require('../../assets/flexCard/4.jpeg'),
    icon: <Icon name="tint" size={SIZE_ICON} color="#2ECC71" />,
  },
  {
    id: 5,
    name: 'sun',
    img: require('../../assets/flexCard/5.jpeg'),
    icon: <Icon name="sun" size={SIZE_ICON} color="#5D9CEC" />,
  },
];

const FlexCard = () => {
  const [nameActive, setNameActive] = useState("walking")

  const changeContainer = (item) => {
    setNameActive(item.name)
  }

  return (
    <SafeAreaView style={styles.container}>
      {listImg.map((item, index) => {
        return <TouchableOpacity onPress={()=>changeContainer(item)} key={index} >
          <CardItem item={item} nameActive={nameActive} />
        </TouchableOpacity>
      })}
    </SafeAreaView>
  );
};

export default FlexCard;

const styles = StyleSheet.create({
  container: {
    // justifyContent:"center",
    alignItems: 'center',
   flex:1,
    // flexDirection: 'row',
    // marginVertical:40,
    backgroundColor:'#2c3e50',
  },
});
