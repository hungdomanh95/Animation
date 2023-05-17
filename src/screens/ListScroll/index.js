import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import {COLOR, SHADOWS, SIZE, TEXT} from '../../theme';
import Rating from '../../components/Rating';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
const arr = Array(5)
  .fill(0)
  .map((e, idx) => {
    return {id: idx + 1, title: 'metime'};
  });
const startGray = require('../../assets/rating/star_gray.png');
const ListScroll = () => {
  return (
    <View style={styles.containerContent}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerList}>
          <KeyboardAwareFlatList
          // extraScrollHeight={-150}
            // style={styles.container}
            // keyExtractor={item => item.id}
            data={arr}
            renderItem={({item}) => {
              return (
                <View style={styles.containerItemList}>
                  <Text
                    style={[{color: '#011E32'}, {...TEXT.fz14, ...TEXT.bold}]}>
                    {item.title}
                  </Text>
                  <View style={styles.containerRate}>
                    <View style={styles.headerRate}>
                      <Text>Rate it</Text>
                      <Rating icon={startGray} ratingCount={5} iconSize={20} />
                    </View>
                  </View>
                  <View style={styles.containerCost}>
                    <Text
                      style={[
                        {color: '#000'},
                        {...TEXT.fz14, ...TEXT.regular},
                      ]}>
                      Cost
                    </Text>
                    <TextInput style={styles.inputCost} />
                    <Text
                      style={[
                        {color: COLOR.secondary},
                        {...TEXT.fz14, ...TEXT.bold},
                      ]}>
                      VND
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
      <View style={styles.containerBottom}>
        <View style={styles.btn}>
          <Text style={[{color: COLOR.white}, {...TEXT.fz16, ...TEXT.bold}]}>
            Submit
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListScroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    // justifyContent:"space-between"
  },
  containerList: {
    ...SHADOWS.sh,
    width: '95%',
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 15,
    height: SIZE.height / 1.5,
    padding: 16,
    // flex:1,
  },
  containerBottom: {
    height: 100,
    ...SHADOWS.sh,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLOR.primary,
    height: SIZE.height_btn,
    width: SIZE.btn1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerItemList: {
    borderBottomColor: COLOR.primary24,
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingBottom: 16,
  },
  containerRate: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLOR.primary8,
    height: 100,
    marginTop: 10,
  },
  headerRate: {
    flexDirection: 'row',
    backgroundColor: 'rgb(228, 241, 255)',
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerCost: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inputCost: {
    borderWidth: 1,
    borderColor: COLOR.primary8,
    backgroundColor: COLOR.primary4,
    borderRadius: 8,
    width: 120,
    height: SIZE.height_btnInput,
    marginLeft: 'auto',
    marginRight: 5,
  },
});
