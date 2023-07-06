import { Keyboard, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../constants'
import { FocusAwareStatusBar } from '../../components'

const AuthLayout = ({ children }) => {
    return (
        <>
            <FocusAwareStatusBar />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
                <TouchableWithoutFeedback
                    touchSoundDisabled={true}
                    onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        {/* children */}
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
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
        backgroundColor: COLORS.white,
    },

    inner: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding,
    },
})