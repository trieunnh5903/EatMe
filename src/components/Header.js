import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { FONTS } from '../constants'

const Header = React.memo(({ title, containerStyle, leftComponent, rightComponent }) => {
    return (
        <View style={{ flexDirection: 'row', height: 50, ...containerStyle }}>
            {/* left */}
            {leftComponent}
            {/* title */}
            <Text style={styles.title}>{title}</Text>
            {/* right */}
            {rightComponent}
        </View>
    )
})

export default Header

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        flex: 1,
        textAlign: 'center',
        color: COLORS.blackText,
        ...FONTS.subtitle1, fontWeight: 'bold'
    }
})