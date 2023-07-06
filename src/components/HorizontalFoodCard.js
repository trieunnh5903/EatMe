import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/sizes'
import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts'
import icons from '../constants/icons'
import { SharedElement } from 'react-navigation-shared-element'

const HorizontalFoodCard = ({ containerStyle, item, imageStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <SharedElement id={`item.${item.id}.image`}>
                <Image style={imageStyle} source={{ uri: item.image }}></Image>
            </SharedElement>
            <View style={{ flex: 1, marginTop: SIZES.radius }}>
                <Text numberOfLines={1} style={[FONTS.title_large, { color: COLORS.blackText, fontWeight: 'bold' }]}>{item.name}</Text>
                <Text numberOfLines={1} style={[FONTS.body_medium, { color: COLORS.darkGray2 }]}>{item.description}</Text>
                <Text numberOfLines={1} style={[FONTS.title_large, { color: COLORS.blackText, fontWeight: 'bold' },]}>${item.price}</Text>
            </View>
            {/* calories */}
            <View style={styles.icon}>
                <Image style={{ width: 24, height: 24 }} source={icons.calories} />
                <Text style={{ color: COLORS.darkGray2, ...FONTS.subtitle2 }}>{item.calories} Calories</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalFoodCard

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        position: 'absolute', top: SIZES.radius, right: SIZES.radius,
    },

    container: {
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        alignItems: 'center',
        // padding: SIZES.radius,
    }
})