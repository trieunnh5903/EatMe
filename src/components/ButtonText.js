import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'

const ButtonText = ({ label, labelStyle, containerStyle, onPress, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.container, containerStyle]}>
            <Text style={[FONTS.h3, labelStyle]}>{label}</Text>
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