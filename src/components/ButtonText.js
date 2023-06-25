import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'
import { color } from 'react-native-reanimated'

const ButtonText = ({ label, labelStyle, containerStyle, onPress, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.container, containerStyle]}>
            <Text style={[FONTS.button, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonText

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})