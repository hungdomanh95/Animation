import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Item from './item';

const Rating = props => {
  const [arr, setArr] = useState([]);
  const {
    icon,
    secondIcon,
    ratingCount,
    iconSize,
    ratingBackgroundColor,
    style,
    value
  } = props;

  useEffect(() => {
      const  newArr = Array(ratingCount)
        .fill({icon, secondIcon: secondIcon && secondIcon})
        .map((e, idx) => {
          return {...e, id: idx + 1};
        });
      setArr(newArr);
  }, [icon]);

  const [valueRating, setValueRating] = useState(null);

  const chooseRating = index => {
    setValueRating(index);
  };

  return (
    <View style={[styles.container, style]}>
      {arr.length > 0 &&
        arr.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              chooseRating={chooseRating}
              color={
                (value ? value : valueRating) >= item.id ? ratingBackgroundColor : 'transparent'
              }
              icon={ (value ? value : valueRating) >= item.id ? secondIcon : icon}
              iconSize={iconSize}
              disabled={value}
              value={value}
            />
          );
        })}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 10,
  },
});
