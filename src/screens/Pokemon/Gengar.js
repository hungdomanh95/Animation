import {View, Text, Image} from 'react-native';
import React from 'react';
import size from "../../utils/size"
const gengar = require('../../assets/gif/gengar_fight.gif');
const width = size.width / 2;
const height = width * 262/500;
const top = size.height/3
const Gengar = () => {
  return (
    <Image
      source={gengar}
      style={{width, height, top, position:'absolute', left:30}}
    />
  );
};

export default Gengar;
