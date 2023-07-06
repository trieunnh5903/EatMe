import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../constants'

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback
                touchSoundDisabled={true}
                onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    {/* logo */}
                    <View style={{ alignItems: 'center', alignSelf: 'center'}}>
                    <Image source={images.logo_03} resizeMode='contain' style={styles.logo} />
                    </View>
                    {/* title, subtitle */}
                    {/* <View style={[titleContainerStyle, styles.titleWrapper]}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View> */}
                    {/* children */}
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default AuthLayout

const styles = StyleSheet.create({
    titleWrapper: { alignItems: 'center' },

    title: {
        color: COLORS.blackText,
        ...FONTS.h5,
        textAlign: 'center'
    },

    subtitle: {
        textAlign: 'center',
        color: COLORS.darkGray,
        marginTop: SIZES.base,
        ...FONTS.body3
    },

    logo: {
        height: 70,
        width: 70
    },

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    inner: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding,
    },
})