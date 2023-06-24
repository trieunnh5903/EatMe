import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/sizes'
import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts'
import icons from '../constants/icons'

const HorizontalFoodCard = ({ containerStyle, item, imageStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <Image source={{ uri: `${item.image}` }} style={[imageStyle]} />
            <View style={{ flex: 1, marginTop: SIZES.radius }}>
                <Text numberOfLines={1} style={[FONTS.h6, { color: COLORS.blackText, fontWeight: 'bold' }]}>{item.name}</Text>
                <Text numberOfLines={1} style={[FONTS.subtitle2, { color: COLORS.darkGray2 }]}>{item.description}</Text>
                <Text numberOfLines={1} style={[FONTS.h5, { color: COLORS.blackText, fontWeight: 'bold' },]}>${item.price}</Text>
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