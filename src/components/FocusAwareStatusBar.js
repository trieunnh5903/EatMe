import {StyleSheet, StatusBar, View} from 'react-native';
import React from 'react';
import {COLORS} from '../config';

function FocusAwareStatusBar() {
  return (
    <StatusBar
      animated
      backgroundColor={COLORS.white}
      barStyle={'dark-content'}
    />
  );
}

export default FocusAwareStatusBar;

const styles = StyleSheet.create({});
