import {View, Text, Image} from 'react-native';
import React from 'react';
const pidgeot = require('../../assets/gif/Pidgeot.gif');
import size from "../../utils/size"
const width = size.width / 4;
const height = width * 706/500;
const top = size.height/4 - height
const Pidgeot = () => {
  return (
    <Image
      source={pidgeot}
      style={{width, height, top, position:'absolute', right:width/2}}
    />
  );
};

export default Pidgeot;
