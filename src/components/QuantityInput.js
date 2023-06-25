import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonIcon from './ButtonIcon';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const QuantityInput = ({ containerStyle, iconContainerStyle, onAddPress, onRemovePress, quantity = 1, iconStyle, labelStyle }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                ...containerStyle
            }}>
            <ButtonIcon
                icon={icons.remove}
                iconStyle={iconStyle}
                containerStyle={iconContainerStyle}
                onPress={onRemovePress}
            />
            <Text
                style={labelStyle}>{`${quantity}`}</Text>
            <ButtonIcon
                icon={icons.add}
                iconStyle={iconStyle}
                containerStyle={iconContainerStyle}
                onPress={onAddPress}
            />
        </View>
    )
}

export default QuantityInput

const styles = StyleSheet.create({})