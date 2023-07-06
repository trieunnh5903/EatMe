import {
    StyleSheet, Text, View,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native'
import React, { useRef, useState } from 'react'
import AuthLayout from './AuthLayout'
import { ButtonIcon, ButtonText, TextInputCustom } from '../../components'
import { SIZES, FONTS, COLORS, icons } from '../../constants'
import { TextInput } from 'react-native-paper'
import validate from '../../utils/validate'

const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const inputEmail = useRef(null);
    const isEnableSignIn = () => {
        return email != '' && password != '' && passwordError == '' && emailError == '';
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AuthLayout
            >
                <View style={styles.contentWrapper}>
                    <Text
                        style={{
                            color: COLORS.blackText,
                            ...FONTS.h5,
                        }}
                    >Đăng nhập</Text>
                    {/* email */}
                    <TextInputCustom
                        placeholder={"Số điện thoại di động"}
                        rightComponent={
                            <View>
                                {
                                    email != '' && (
                                        <Image style={[styles.iconCheck, {
                                            tintColor: emailError == '' ? COLORS.green : COLORS.red
                                        }]} source={
                                            emailError == '' ? icons.check_circle : icons.cancel_circle
                                        } />
                                    )
                                }
                            </View>
                        }
                        onChangeText={(value) => {
                            validate.validateEmail(value, setEmailError)
                            setEmail(value);
                        }}
                        errorMsg={emailError}
                    />
                    {/* password */}
                    <TextInputCustom
                        containerStyle={{ marginTop: emailError ? 0 : SIZES.radius}}
                        placeholder={"Mật khẩu"}
                        secureTextEntry={!showPassword}
                        rightComponent={
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Image style={[styles.iconCheck, { tintColor: COLORS.gray }]} source={showPassword ? icons.eye_off : icons.eye} />
                            </TouchableOpacity>
                        }
                        onChangeText={(value) => {
                            validate.validatePassword(value, setPasswordError)
                            setPassword(value)
                        }}
                        errorMsg={passwordError}
                    />

                    <TouchableOpacity>
                        <Text
                            style={[{
                                color: COLORS.blackText,
                                marginTop: SIZES.base
                            },
                            FONTS.body4]}>Quên mật khẩu?</Text>
                    </TouchableOpacity>

                    <ButtonText
                        label={"Đăng nhập"}
                        labelStyle={{
                            color: COLORS.white,
                            ...FONTS.button,
                            fontSize: 18

                        }}
                        containerStyle={{
                            marginTop: SIZES.spacing * 2,
                            height: 50,
                            borderRadius: SIZES.padding,
                            backgroundColor: COLORS.primary
                        }}
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
                    label={"Tạo tài khoản mới"}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.subtitle1,
                    }}
                />
            </AuthLayout>
        </SafeAreaView>
    )
}

export default Login

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
        marginTop: SIZES.padding * 2,
    }
})