import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
export default size = {
  width,
  height,
  heightHeader: Platform.OS === 'ios' ? 91 : 56, // 91 = 56 + 35, 35 is padding of Ios, safeareaview,
  heightMenu: height < 700 ? 50 : 65,
};

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 40 : 53;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE };

