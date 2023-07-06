import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const TextInputCustom = ({
    containerStyle,
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
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={containerStyle}>
            {/* text input */}
            <View style={[styles.inputWrapper, inputStyle, isFocused ? styles.focusedTextInput : styles.defaultTextInput]}>
                {leftComponent}
                <TextInput
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    cursorColor={COLORS.primary}
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
    focusedTextInput: {
        borderColor: COLORS.transparentBlack7,
    },

    defaultTextInput: {
        borderColor: COLORS.lightGray1,
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

    errorMsg: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        color: COLORS.red,
        ...FONTS.body4,
    }
})