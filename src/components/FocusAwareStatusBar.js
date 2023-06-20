import { StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

export default FocusAwareStatusBar

const styles = StyleSheet.create({})