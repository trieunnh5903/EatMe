import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const CardItem = ({ item, isSelected, onPress, containerStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 100,
                flexDirection: 'row',
                alignItems: 'center',
                padding: SIZES.padding,
                borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
                borderWidth: 2,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}>
            {/* card image */}
            <View
                style={{
                    width: 60,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    borderRadius: SIZES.radius
                }}>
                <Image
                    source={item.icon}
                    style={{
                        width: 36,
                        height: 36
                    }}
                    resizeMode='contain'
                />
            </View>
            {/* name */}
            <Text
                style={{
                    marginLeft: SIZES.base,
                    flex: 1,
                    color: COLORS.blackText,
                    ...FONTS.h3
                }}>{item.name}</Text>
            {/* radio button */}
            <Image
                resizeMode='contain'
                source={isSelected ? icons.radio_button_checked : icons.radio_button_unchecked}
                style={{
                    width: 24,
                    height: 24,
                    tintColor: isSelected ? COLORS.primary : COLORS.lightGray2
                }} />
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({})