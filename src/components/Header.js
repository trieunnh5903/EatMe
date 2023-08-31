import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../config/colors'
import { FONTS, SIZES } from '../config'

const Header = ({ title, containerStyle, leftComponent, rightComponent }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
                ...containerStyle
            }}>
            {/* left */}
            {leftComponent}
            {/* title */}
            <Text style={styles.title}>{title}</Text>
            {/* right */}
            {rightComponent}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        textTransform: 'capitalize',
        flex: 1,
        textAlign: 'center',
        color: COLORS.blackText,
        ...FONTS.title_large, fontWeight: 'bold'
    }
})