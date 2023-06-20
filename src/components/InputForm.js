import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const InputForm = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    leftComponent,
    rightComponent,
    onChangeText,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = 'off',
    autoCapitalize = 'none',
    errorMsg = "",
}) => {
    return (
        <View style={containerStyle}>
            {/* label & error msg */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            </View>
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
                    autoComplete={autoCompleteType}
                    onChangeText={(value) => onChangeText(value)}
                />
                {rightComponent}
            </View>
        </View>
    )
}

export default InputForm

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
        backgroundColor: COLORS.lightGray2,
        alignItems: 'center'
    },

    label: {
        color: COLORS.gray,
        ...FONTS.body4
    },
    errorMsg: {
        color: COLORS.red,
        ...FONTS.body4
    }
})