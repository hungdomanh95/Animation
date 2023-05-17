import {ImageBackground} from 'react-native';
import React from 'react';
import Pikachu from './Pikachu';
import Eevee from './Eevee';
import Pidgeot from './Pidgeot';
import Gengar from './Gengar';
import size from "../../utils/size"
const BG = require("../../assets/background-grass.png")
const width = size.width
const height = size.height
const Pokemon = () => {
  return (
    <ImageBackground source={BG} style={{width, height}} resizeMode="cover">
        <Pikachu/>
        <Eevee/>
        <Pidgeot/>
        <Gengar/>
    </ImageBackground>
  );
};

export default Pokemon;
