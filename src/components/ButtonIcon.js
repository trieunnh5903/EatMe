import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ButtonIcon = ({ containerStyle, icon, iconStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={[containerStyle, {justifyContent: 'center', alignItems: 'center'}]}
            onPress={onPress}>
            <Image source={icon} style={iconStyle} />
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({})