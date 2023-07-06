import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const TextInputCustom = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    leftComponent,
    rightComponent,
    onChangeText,
    secureTextEntry,
    keyboardType = 'default',
    autoCapitalize = 'none',
    errorMsg,
}) => {
    return (
        <View style={containerStyle}>
            {/* text input */}
            <View style={[styles.inputWrapper, inputStyle]}>
                {leftComponent}
                <TextInput
                    style={[styles.input]}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(value) => onChangeText(value)}
                />
                {rightComponent}
            </View>
            {/*  error msg */}
            {
                errorMsg.length > 0 && <Text style={styles.errorMsg}>{errorMsg}</Text>
            }
        </View>
    )
}

export default TextInputCustom

const styles = StyleSheet.create({
    input: {
        flex: 1,
    },

    inputWrapper: {
        flexDirection: 'row',
        height: 55,
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.base,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        borderColor: COLORS.lightGray1,
        alignItems: 'center'
    },

    label: {
        color: COLORS.gray,
        ...FONTS.body4
    },
    errorMsg: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        color: COLORS.red,
        ...FONTS.body4,
    }
})