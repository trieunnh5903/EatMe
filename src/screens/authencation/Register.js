import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import { ButtonIcon, ButtonText, TextInputCustom } from '../../components'
import { COLORS, FONTS, SIZES, images } from '../../constants'
import validate from '../../utils/validate'

const Register = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const isEnableSignIn = () => {
        return phoneNumber != '' && password != '' && passwordError == '' && phoneNumberError == '' && fullName != '';
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AuthLayout>
                {/* logo */}
                <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                    <Image source={images.logo_03} resizeMode='contain' style={styles.logo} />
                </View>
                <View style={styles.contentWrapper}>
                    <Text
                        style={{
                            color: COLORS.blackText,
                            ...FONTS.h5,
                        }}
                    >Đăng ký</Text>
                    {/* phoneNumber */}
                    <TextInputCustom
                        placeholder={"Số điện thoại di động"}
                        rightComponent={
                            <View>
                                {
                                    phoneNumber != '' && (
                                        <Image style={[styles.iconCheck, {
                                            tintColor: phoneNumberError == '' ? COLORS.green : COLORS.red
                                        }]} source={
                                            phoneNumberError == '' ? icons.check_circle : icons.cancel_circle
                                        } />
                                    )
                                }
                            </View>
                        }
                        onChangeText={(value) => {
                            validate.validatePhoneNumber(value, setPhoneNumberError)
                            setPhoneNumber(value);
                        }}
                        errorMsg={phoneNumberError}
                    />
                    {/* password */}
                    <TextInputCustom
                        containerStyle={{ marginTop: phoneNumberError ? 0 : SIZES.radius }}
                        placeholder={"Mật khẩu"}
                        secureTextEntry={!showPassword}
                        rightComponent={
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Image style={[styles.iconCheck, { tintColor: COLORS.gray }]} source={showPassword ? icons.eye : icons.eye_off} />
                            </TouchableOpacity>
                        }
                        onChangeText={(value) => {
                            validate.validatePassword(value, setPasswordError)
                            setPassword(value)
                        }}
                        errorMsg={passwordError}
                    />
                    <TextInputCustom
                        containerStyle={{ marginTop: passwordError ? 0 : SIZES.radius }}
                        placeholder={"Tên của bạn"}
                        rightComponent={
                            <View>
                                {
                                    fullName != '' && (
                                        <Image style={[styles.iconCheck, {
                                            tintColor: fullNameError == '' ? COLORS.green : COLORS.red
                                        }]} source={
                                            fullNameError == '' ? icons.check_circle : icons.cancel_circle
                                        } />
                                    )
                                }
                            </View>
                        }
                        onChangeText={(value) => {
                            validate.validateFullName(value, setFullNameError)
                            setFullName(value);
                        }}
                        errorMsg={fullNameError}
                    />

                    <ButtonText
                        disabled={!isEnableSignIn()}
                        onPress={() => navigation.navigate("ConfirmOtp")}
                        label={"Đăng ký"}
                        labelStyle={{
                            color: COLORS.white,
                            ...FONTS.button,
                            fontSize: 18

                        }}
                        containerStyle={[{
                            marginTop: SIZES.spacing * 2,
                            height: 50,
                            borderRadius: SIZES.padding,
                            backgroundColor: COLORS.primary
                        }, !isEnableSignIn() && { opacity: 0.5 }]}
                    />

                    <View style={{ alignItems: 'center' }}>
                        <Text style={[{
                            color: COLORS.blackText,
                            marginTop: SIZES.padding
                        },
                        FONTS.body4]}>Hoặc đăng nhập bằng</Text>
                        <View style={{ flexDirection: 'row', gap: 10, marginVertical: SIZES.padding, }}>
                            <ButtonIcon
                                containerStyle={{
                                    padding: SIZES.base,
                                    backgroundColor: COLORS.lightGray2,
                                    borderRadius: 100
                                }}
                                iconStyle={styles.iconSocial}
                                icon={icons.google} />
                            <ButtonIcon
                                containerStyle={{
                                    padding: SIZES.base,
                                    backgroundColor: COLORS.lightGray2,
                                    borderRadius: 100
                                }}
                                iconStyle={styles.iconSocial}
                                icon={icons.facebook} />
                        </View>
                    </View>
                </View>

                <ButtonText
                    label={"Đăng nhập"}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.subtitle1,
                    }}
                    onPress={() => navigation.goBack()}
                />
            </AuthLayout>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    iconSocial: {
        width: 32,
        height: 32
    },

    iconCheck: {
        width: 20,
        height: 20,
    },
    contentWrapper: {
        marginTop: SIZES.padding * 2
    },
    logo: {
        height: 70,
        width: 70
    },
})