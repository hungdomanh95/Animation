import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Animated,
  Easing,SafeAreaView,
  Text
} from 'react-native';
import React, { useRef, useState} from 'react';
import size from '../../utils/size';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {list_social} from '../../utils/listItems';

const WIDTH_HEADER = size.width;
const HEIGHT_HEADER = 150;
const WIDTH_SEARCH = (WIDTH_HEADER - 20) / 1.5;
const space = (WIDTH_SEARCH - 30 - 5 * 16) / 4;
const x = 16 + space;
const X_ICON1 = 15 + x;
const X_ICON2 = X_ICON1 + x;
const X_ICON3 = X_ICON2 + x;
const X_ICON4 = X_ICON3 + x;

const BG_MOMO = require('../../assets/header-momo.jpeg');
const iconScan = require('../../assets/momo/scan-circle.png');
const iconScanSmall = require('../../assets/momo/scan.png');
const iconQr = require('../../assets/momo/qr-circle.png');
const iconQrSmall = require('../../assets/momo/qr.png');
const iconDeposit = require('../../assets/momo/deposit-circle.png');
const iconDepositSmall = require('../../assets/momo/deposit.png');
const iconDrawMoney = require('../../assets/momo/withdraw-circle.png');
const iconDrawMoneySmall = require('../../assets/momo/withdraw.png');
const iconSearch = require('../../assets/momo/search.png');
const iconBell = require('../../assets/momo/bell.png');
const avatar = require('../../assets/momo/avatar.png');
const listAction = [
  {
    id: 1,
    icon: iconDeposit,
    iconSmall: iconDepositSmall,
    moveX: 25,
    title: 'NẠP TIỀN',
  },
  {
    id: 2,
    icon: iconDrawMoney,
    iconSmall: iconDrawMoneySmall,
    moveX: -16,
    title: 'NẠP TIỀN',
  },
  {
    id: 3,
    icon: iconQr,
    iconSmall: iconQrSmall,
    moveX: -56,
    title: 'NẠP TIỀN',
  },
  {
    id: 4,
    icon: iconScan,
    iconSmall: iconScanSmall,
    moveX: -98,
    title: 'NẠP TIỀN',
  },
];
const HeaderMomo = () => {
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  const nativeScrollY = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const viewIconAnimation = (value = 0) => {
    const translateY = nativeScrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, -(50 + 25)],
      extrapolate: 'clamp',
    });
    const translateX = nativeScrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, value],
      extrapolate: 'clamp',
    });
    return {
      transform: [{translateY}, {translateX}],
    };
  };
  const inforAnimation = {
    transform: [
      {
        translateY: nativeScrollY.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
  }
  const scrollAnimation = {
    transform: [
      {
        translateY: nativeScrollY.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -50],
          extrapolate: 'clamp',
        }),
      },
    ],
  }

  const iconAnimation = {
    transform: [
      {
        translateY: nativeScrollY.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -20],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: nativeScrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const iconSmallAnimation = {
    opacity: nativeScrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    position:"absolute"
  };

  const titleAnimation = {
    transform: [
      {
        scale: nativeScrollY.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: nativeScrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const inputAnimation = {
    transform: [
      {
        scaleX: nativeScrollY.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      // {
      //   translateX: nativeScrollY.interpolate({
      //     inputRange: [0, 25],
      //     outputRange: [0, -50],
      //     extrapolate: 'clamp',
      //   }),
      // },
    ],

    opacity: nativeScrollY.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <View style={{flex:1, backgroundColor:"#FFF"}}>
       <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>
      <View style={{position:'absolute'}}>
        <View style={styles.headerTop} />
        <ImageBackground source={BG_MOMO} style={styles.backgroundImage}>
          <View style={styles.bgTop}>
            <View style={[styles.searchContainer]}>
              <Image source={iconSearch} style={styles.icon16} />
              <AnimatedTextInput
                placeholder="Tìm kiếm"
                placeholderTextColor="rgba(255, 255, 255, 0.8)"
                style={[styles.searchInput, inputAnimation]}
              />
            </View>
            <Image source={iconBell} style={styles.bell} />
            <Image source={avatar} style={styles.avatar} />
          </View>
          <View style={styles.action}>
            {listAction.map((item, index) => {
              return (
                <Animated.View key={index} style={[styles.itemAction,viewIconAnimation(item.moveX)]}>
                  <Animated.Image source={item.iconSmall} style={[styles.icon16,iconSmallAnimation]} />
                  <Animated.Image source={item.icon} style={[styles.icon120, iconAnimation]} />
                  <Animated.Text style={[styles.text, titleAnimation]}>
                    {item.title}
                  </Animated.Text>
                </Animated.View>
              );
            })}
          </View>
        </ImageBackground>
      </View>
      <View style={styles.spaceForHeader} />
      <Animated.View style={[styles.containerInfor,inforAnimation]}>
        <View style={styles.flexRow}>
          <Icon name="eye-off-outline" size={20} style={styles.eye} />
          <FontAwesome name="asterisk" size={8} style={styles.asterisk} />
          <FontAwesome name="asterisk" size={8} style={styles.asterisk} />
          <FontAwesome name="asterisk" size={8} style={styles.asterisk} />
          <FontAwesome name="asterisk" size={8} style={styles.asterisk}  />
          <FontAwesome name="asterisk" size={8} style={styles.asterisk}  />
          <FontAwesome name="asterisk" size={8} style={styles.asterisk}  />
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.textInfor}>Quản lý tài khoản </Text>
          <Entypo name="chevron-right" size={20} />
        </View>
      </Animated.View>
      <Animated.View style={[{paddingBottom:160},scrollAnimation]}>
        <Animated.ScrollView
          style={[styles.scroll,scrollAnimation]}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: nativeScrollY}}}],
            {useNativeDriver: true, easing: Easing.linear},
          )}>
            <View  style={[styles.containerInfor,{borderBottomWidth:0}]}>
              <Text style={[styles.textBold,{fontSize:16}]}>Dịch vụ của bạn</Text>
              <View style={styles.btnCustom}>
                <Icon name="options-outline" size={20}  />
                <Text style={styles.textBold}>Tuỳ chỉnh</Text>
              </View>
            </View>
            <View style={styles.listContent}>
              {list_social.slice(0,8).map((item, index) => {
                return (
                  <View  key={index} style={styles.containerIcon}>
                    <Image source={item.icon} style={styles.thumbnail} />
                    <Text>{item.name}</Text>
                  </View>
                );
              })}
            </View>
            <View style={[styles.containerInfor,{borderBottomWidth:0}]}>
              <Text style={[styles.textBold,{fontSize:16}]}>MoMo đề xuất</Text>
              <View style={styles.btnCustom}>
                <FontAwesome name="th" size={12}  />
                <Text style={styles.textBold}>Tất cả</Text>
              </View>
            </View>
            <View style={styles.listContent}>
              {list_social.reverse().map((item, index) => {
                return (
                  <View  key={index} style={styles.containerIcon}>
                    <Image source={item.icon} style={styles.thumbnail} />
                    <Text>{item.name}</Text>
                  </View>
                );
              })}
            </View>
            {/* <View style={{height:844, backgroundColor:"#FFF"}} /> */}
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default HeaderMomo;

const styles = StyleSheet.create({
  textBold:{
    fontWeight:"bold",
    marginLeft:5,

  },
  containerInfor:{
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:20,
    height:60,
    borderBottomColor:"#CCC",
    borderBottomWidth:1,
    backgroundColor:"#FFF"
  },
  flexRow:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    height:"100%"
  },
  backgroundImage: {
    width: WIDTH_HEADER,
    height: HEIGHT_HEADER,
    // position:'absolute',
    // marginTop:HEIGHT_HEADER / 3,
  },
  headerTop: {
    width: WIDTH_HEADER,
    height: HEIGHT_HEADER / 3,
    backgroundColor: 'rgb(49,83,64)',
  },
  bgTop: {
    width: WIDTH_HEADER,
    height: HEIGHT_HEADER / 3,
    backgroundColor: 'rgba(49,83,64, 0.8)',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemAction:{justifyContent: 'center', alignItems: 'center'},
  searchContainer: {
    width: WIDTH_SEARCH,
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  searchInput: {
    position: 'absolute',
    width: WIDTH_SEARCH,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 5,
    paddingLeft: 15 + 16 + 10,
    paddingRight: 10,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  icon120: {
    width: 45,
    height: 45,
  },
  bell: {
    width: 28,
    height: 28,
  },
  avatar: {
    width: 28,
    height: 28,
  },
  action: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: (2 * HEIGHT_HEADER) / 3,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  scroll: {
    // paddingTop:HEIGHT_HEADER +
    // flex: 1,
    // backgroundColor:"#FFFFFF"
  },
  thumbnail: {
    width: 20,
    height: 20,
    marginBottom:10
  },
  spaceForHeader: {
    height: 2*HEIGHT_HEADER/3,
    // backgroundColor:"red"
  },
  upperHeaderPlaceholder: {
    height:  HEIGHT_HEADER / 3 ,
    // paddingTop: HEIGHT_HEADER / 3,
  },
  containerIcon:{
    width: size.width / 4,
    height: size.width / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent:{
    flexDirection: 'row', flexWrap: 'wrap', backgroundColor:"#FFF"
  },eye:{
    marginRight:10
  },
  asterisk:{
    marginRight:2
  },
  textInfor:{
    fontSize:16,
    fontWeight:'300',
    letterSpacing:0.5
  },
  btnCustom:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center',
    borderRadius:5,
    borderWidth:1,
    borderColor:"#C9C8CD",
    paddingVertical:5,
    paddingHorizontal:15
  }
});
