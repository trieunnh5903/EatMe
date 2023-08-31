import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../config'
import Divider from './Divider'
import ButtonText from './button/ButtonText'

const TotalFooter = ({ subtotal = 0, delivery = 0, total = 0, onPress }) => {
    return (
        // subtotal
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.h3,
                    }}>Subtotal</Text>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.h3
                    }}>${subtotal}</Text>
            </View>
            {/* delivery */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.h3,
                    }}>Delivery</Text>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.h3
                    }}>${delivery}</Text>
            </View>
            {/* divider */}
            <Divider />
            {/* total */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.h2,
                    }}>Total</Text>
                <Text
                    style={{
                        color: COLORS.blackText,
                        ...FONTS.h2
                    }}>${total}</Text>
            </View>
            <ButtonText
                onPress={onPress}
                labelStyle={{
                    color: COLORS.white
                }}
                label={"Place your order"}
                containerStyle={{
                    marginTop: SIZES.padding,
                    height: 60,
                    borderRadius: SIZES.radius,
                    width: SIZES.width - 2 * SIZES.padding,
                    backgroundColor: COLORS.primary
                }}
            />
        </View>
    )
}

export default TotalFooter

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        padding: SIZES.padding,
        borderTopLeftRadius: SIZES.padding,
        borderTopEndRadius: SIZES.padding,
    }
})