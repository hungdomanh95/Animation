import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import Svg, {Circle,G, Rect, Path} from 'react-native-svg';
import size from '../../utils/size';
const SvgScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Svg  height={size.width} width={size.width} viewBox={`0 0 ${size.width} ${size.width}`} color="green" >
        <Path
          d="M50 150 l290 0 c30,30 30,30 30,210"
          fill="none"
          stroke="red"
        />
        <Path
          d={"M50,500 C50,50 500,610 50,500"}
          fill="none"
          stroke="red"
        />

        <Rect x="20" y="50" width="350" height="60" rx="30" fill="#D9D9D9"/>
        <Circle cx="340" cy="80" r="30" fill="pink" />
      </Svg> */}

<Svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "0 0"
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      // display="block"
      shapeRendering="auto"
      {...props}
    >
      <G transform="translate(80 50)">
        <Circle r={6} fill="#fff"></Circle>
      </G>
      <G transform="translate(71.213 71.213) rotate(45)">
        <Circle r={6} fill="#fff" fillOpacity={0.875}></Circle>
      </G>
      <G transform="translate(50 80) rotate(90)">
        <Circle r={6} fill="#fff" fillOpacity={0.75}></Circle>
      </G>
      <G transform="translate(28.787 71.213) rotate(135)">
        <Circle r={6} fill="#fff" fillOpacity={0.625}></Circle>
      </G>
      <G transform="translate(20 50) rotate(180)">
        <Circle r={6} fill="#fff" fillOpacity={0.5}></Circle>
      </G>
      <G transform="translate(28.787 28.787) rotate(225)">
        <Circle r={6} fill="#fff" fillOpacity={0.375}></Circle>
      </G>
      <G transform="translate(50 20) rotate(270)">
        <Circle r={6} fill="#fff" fillOpacity={0.25}></Circle>
      </G>
      <G transform="translate(71.213 28.787) rotate(315)">
        <Circle r={6} fill="#fff" fillOpacity={0.125}></Circle>
      </G>
    </Svg>


    </SafeAreaView>
  );
};

export default SvgScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
});
