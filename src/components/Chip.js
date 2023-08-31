import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {COLORS, SIZES} from '../config';

const Chip = ({label, onPress, selected}) => {
  const chipStyle = selected ? styles.selectedChip : styles.chip;
  const labelStyle = selected ? styles.labelSelected : styles.label;
  return (
    <TouchableOpacity style={chipStyle} onPress={onPress}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    borderColor: COLORS.gray3,
    borderWidth: 1,
    borderRadius: SIZES.padding,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
  },
  selectedChip: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
  },
  label: {
    color: COLORS.gray3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelSelected: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
