import {StyleSheet} from 'react-native';
import React from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import {ThemeProvider} from './src/context-store/context';
const App = () => {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={{flex: 1}}>
    //   <SafeAreaView style={{flex: 1}}>
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //       <View style={{flex: 1}}>
    //         <View style={styles.header} />
    //         <View
    //           style={{
    //             justifyContent: 'space-between',
    //             paddingBottom: 100 + 50,
    //           }}>
    //           <FlatList
    //             style={{backgroundColor: 'rgba(234,234,23,0.5)'}}
    //             data={arr}
    //             renderItem={({item}) => {
    //               return (
    //                 <View
    //                   style={{
    //                     width: '100%',
    //                     height: 50,
    //                     alignSelf: 'center',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                   }}>
    //                   <Text style={{position: 'absolute'}}>{item.id}</Text>
    //                   <TextInput
    //                     style={{height: '80%', borderWidth: 1, width: '50%'}}
    //                   />
    //                 </View>
    //               );
    //             }}
    //           />

    //           <View
    //             style={{height: 100, width: '100%', backgroundColor: 'green'}}
    //           />
    //         </View>
    //       </View>
    //     </TouchableWithoutFeedback>
    //   </SafeAreaView>
    // </KeyboardAvoidingView>
  );
};

export default App;
