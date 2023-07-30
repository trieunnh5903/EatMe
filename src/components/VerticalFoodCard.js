import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons'
import { SIZES } from '../constants/sizes'
import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts'
import { SharedElement } from 'react-navigation-shared-element'

const VerticalFoodCard = ({ containerStyle, item, imageStyle, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, containerStyle]}>
            {/* calories */}
            {/* <View
                style={styles.calories}>
                <Image
                    style={styles.iconCalories}
                    source={icons.calories} />
                <Text
                    style={styles.textCalories}>{item.calories} Calories</Text>
            </View> */}
            {/* image */}
            <SharedElement id={`item.${item.id}.image`}>
                <Image style={imageStyle} source={{ uri: item.image }}></Image>
            </SharedElement>
            {/* info */}
            <View
                style={styles.info}>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.title_large,
                        fontWeight: 'bold'
                    }}>{item.name}</Text>
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        ...FONTS.body_medium
                    }}>{item.description}</Text>
                <Text
                    style={[{
                        color: COLORS.blackText,
                        marginTop: SIZES.base,
                        ...FONTS.title_large,
                        fontWeight: 'bold'
                    },
                    FONTS.h5]}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard

const styles = StyleSheet.create({
    textCalories: {
        flex: 1, ...FONTS.label_large, color: COLORS.darkGray2
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