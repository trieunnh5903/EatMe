import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SIZES} from '../config/sizes';
import {COLORS} from '../config/colors';
import {FONTS} from '../config/fonts';
import {SharedElement} from 'react-navigation-shared-element';

const VerticalFoodCard = ({containerStyle, item, imageStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {/* image */}
      <SharedElement id={`item.${item.id}.image`}>
        <Image style={imageStyle} source={{uri: item.image}} />
      </SharedElement>
      {/* info */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            ...FONTS.body_medium,
          }}>
          {item.description}
        </Text>
        <Text style={[styles.price, FONTS.h5]}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;

const styles = StyleSheet.create({
  price: {
    color: COLORS.blackText,
    marginTop: SIZES.base,
    ...FONTS.title_large,
    fontWeight: 'bold',
  },
  name: {
    color: COLORS.blackText,
    ...FONTS.title_large,
    fontWeight: 'bold',
  },
  textCalories: {
    flex: 1,
    ...FONTS.label_large,
    color: COLORS.darkGray2,
  },
  iconCalories: {width: 24, height: 24},
  container: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
  },

  info: {
    alignItems: 'center',
  },
  calories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
