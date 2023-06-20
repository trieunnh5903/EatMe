import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons'
import { SIZES } from '../constants/sizes'
import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts'

const VerticalFoodCard = ({ containerStyle, item, imageStyle }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]}>
            {/* calories */}
            <View style={styles.calories}>
                <Image style={styles.iconCalories} source={icons.calories} />
                <Text style={styles.textCalories}>{item.calories} Calories</Text>
                <TouchableOpacity>
                    <Image style={{ tintColor: item.isFavourite ? COLORS.primary : COLORS.gray2 }} source={icons.favouriteFilled} />
                </TouchableOpacity>
            </View>
            {/* image */}
            <Image style={imageStyle} source={{ uri: item.image }}></Image>
            {/* info */}
            <View style={styles.info}>
                <Text numberOfLines={1} style={{ color: COLORS.blackText, ...FONTS.h6, fontWeight: 'bold' }}>{item.name}</Text>
                <Text numberOfLines={1} style={{ color: COLORS.darkGray2, ...FONTS.subtitle2}}>{item.description}</Text>
                <Text numberOfLines={1} style={[{ color: COLORS.blackText, marginTop: SIZES.base, fontWeight: 'bold' }, FONTS.h5]}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard

const styles = StyleSheet.create({
    textCalories: {
        flex: 1, ...FONTS.bodyText2, color: COLORS.darkGray2
    },
    iconCalories: { width: 24, height: 24 },
    container: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        alignItems: 'center'
    },

    info: {
        alignItems: 'center'
    },
    calories: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})