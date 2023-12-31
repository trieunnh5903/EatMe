import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonIcon from './button/ButtonIcon';
import {icons} from '../config';

const QuantityInput = ({
  containerStyle,
  iconContainerStyle,
  onAddPress,
  onRemovePress,
  quantity = 1,
  iconStyle,
  labelStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ButtonIcon
        icon={icons.remove}
        iconStyle={iconStyle}
        containerStyle={iconContainerStyle}
        onPress={onRemovePress}
      />
      <Text style={labelStyle}>{`${quantity}`}</Text>
      <ButtonIcon
        icon={icons.add}
        iconStyle={iconStyle}
        containerStyle={iconContainerStyle}
        onPress={onAddPress}
      />
    </View>
  );
};

export default QuantityInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
