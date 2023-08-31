import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import AuthLayout from './AuthLayout'
import { CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor } from 'react-native-confirmation-code-field'
import { COLORS, SIZES, FONTS, images } from '../../config'
import { ButtonText } from '../../components'
const CELL_COUNT = 4;
const ConfirmOtp = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [timer, setTimer] = useState(60)
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(preValue => {
                if (preValue > 0) {
                    return (
                        preValue - 1
                    )
                }
                return preValue
            })
            return () => clearInterval(interval)
        }, 1000)
    }, [])

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const isEnableButton = () => {
        return value.length == CELL_COUNT
    }
    return (
        <AuthLayout>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {/* logo */}
                <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                    <Image source={images.logo_03} resizeMode='contain' style={styles.logo} />
                </View>
                <Text
                    style={{
                        marginTop: 30,
                        color: COLORS.blackText,
                        ...FONTS.headline_medium,
                    }}
                >Xác thực OTP</Text>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.body_large
                    }}
                >Mã xác thực đã được gửi tới trieu@gmail.com</Text>
                {/* otp */}
                <CodeField
                    ref={ref}
                    {...props}
                    caretHidden={false}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            <Text style={styles.textCell}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>

                    )}
                />

                {/* resend otp */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: SIZES.padding
                }}>
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body_large }}>Didn't receive the code? </Text>
                    <ButtonText
                        label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body_large
                        }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>
            {/* Footer */}
            <View>
                <ButtonText
                    disabled={!isEnableButton()}
                    labelStyle={{
                        color: COLORS.white,
                    }}
                    label={"Continue"}
                    containerStyle={[{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }, !isEnableButton() && { opacity: 0.5 }]}
                    onPress={() => navigation.navigate('Root')} />
                <View
                    style={{
                        marginVertical: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body_medium
                        }}>
                        By signing up, you agree to our
                    </Text>
                    <ButtonText
                        label={"Terms and Conditions"}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.title_small
                        }}
                        onPress={() => console.log("Terms and Conditions")} />
                </View>
            </View>

        </AuthLayout>
    )
}

export default ConfirmOtp

const styles = StyleSheet.create({
    logo: {
        height: 70,
        width: 70
    },
    codeFieldRoot: { marginTop: SIZES.padding },
    cell: {
        width: 65,
        height: 65,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        borderWidth: 1,
        borderColor: COLORS.gray3,
        justifyContent: "center",
        alignContent: 'center'
    },
    focusCell: {
        borderColor: COLORS.black,
    },
    textCell: {
        color: COLORS.blackText,
        textAlign: 'center',
        ...FONTS.headline_small
    }
})