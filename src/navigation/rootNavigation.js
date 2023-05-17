import * as React from 'react';
import {DarkTheme,DefaultTheme,NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AnimationsProperties,
  HomeScreen,
  PokemonScreen,
  DayNightTransition,
  PaperPlane,
  ButtonScreen,
  GestureHandler,
  ScaleScrollList,
  GalleryView,
  ScrollChangeColor,
  ToastScreen,
  SvgScreen,
  FlexCard,
  BottomTabs,
  Emoji,
  PokeGallery,
  HeaderMomo,
  ListScroll,
  BottomSheetModal,
} from '../screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const screenOptions = {
    headerTransparent: true,
    headerShown: false,
  };
  const stackOption = {
    gestureEnabled: false,
    headerShown: true,
    headerTitle: true,
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#16a085',
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="PokemonScreen"
            component={PokemonScreen}
            options={stackOption}
          />
          <Stack.Screen
            name="DayNightTransition"
            component={DayNightTransition}
            options={stackOption}
          />
          <Stack.Screen
            name="PaperPlane"
            component={PaperPlane}
            options={stackOption}
          />
          <Stack.Screen
            name="AnimationsProperties"
            component={AnimationsProperties}
            options={stackOption}
          />
          <Stack.Screen
            name="ButtonScreen"
            component={ButtonScreen}
            options={{
              gestureEnabled: false,
              headerShown: true,
              headerTitle: true,
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="GestureHandler"
            component={GestureHandler}
            options={stackOption}
          />
          <Stack.Screen
            name="ScaleScrollList"
            component={ScaleScrollList}
            options={stackOption}
          />
          <Stack.Screen
            name="GalleryView"
            component={GalleryView}
            options={stackOption}
          />
          <Stack.Screen
            name="ScrollChangeColor"
            component={ScrollChangeColor}
            options={stackOption}
          />
          {/* <Stack.Screen
            name="ToastScreen"
            component={ToastScreen}
            options={stackOption}
          /> */}
          <Stack.Screen
            name="SvgScreen"
            component={SvgScreen}
            options={stackOption}
          />
          <Stack.Screen
            name="FlexCard"
            component={FlexCard}
            options={stackOption}
          />
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={stackOption}
          />
          <Stack.Screen name="Emoji" component={Emoji} options={stackOption} />
          <Stack.Screen
            name="PokeGallery"
            component={PokeGallery}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="HeaderMomo"
            component={HeaderMomo}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="ListScroll"
            component={ListScroll}
            options={stackOption}
          />
          <Stack.Screen
            name="BottomSheetModal"
            component={BottomSheetModal}
            options={stackOption}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
