import React, { useState,useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,Switch,Appearance,useColorScheme
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyle from '../../theme/globalStyle';
import {listItems} from '../../utils/listItems';
import size from '../../utils/size';
import assets from '../../assets';
import { Rating } from '../../components';
const icon_star = require("../../assets/rating/star.png")
const icon_heart = require("../../assets/rating/heart.png")
const gray_star = require("../../assets/rating/star_gray.png")
const yellow_star = require("../../assets/rating/star_yellow.png")
const SIZE_ICON = 60;
// theme components and the navigation container
import {ThemeContext} from '../../context-store/context';
import useTheme from "../../theme/useTheme"
const HomeScreen = () => {
  const navigation = useNavigation();
  const newLocal = 'center';

  const {theme,setTheme} = useContext(ThemeContext);

  const { colorMode} = useTheme();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
        <Text>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text>Light Mode</Text>
      </View>
      <Text style={[globalStyle.h2, {textAlign: newLocal,color:colorMode.mainColor}]}>Animations</Text>
      <Image source={assets.RNBackground} style={styles.bgHome} />
      <ScrollView style={styles.container}>
        <View style={styles.containerItem}>
          {listItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.stylesIcon}
                onPress={() => navigation.navigate(`${item.navigation}`)}>
                <Image source={item.icon} style={styles.iconHome} />
                <Text style={styles.text}>{item.nameProject}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgHome: {
    width: size.width,
    height: size.height / 4,
  },
  iconHome: {
    width: SIZE_ICON,
    height: SIZE_ICON,
  },
  containerItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 25,
  },
  stylesIcon: {
    width: size.width / 3,
    alignItems: 'center',
    padding: 20,
    // borderColor:"#ddd",
    // borderWidth:1
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
});
