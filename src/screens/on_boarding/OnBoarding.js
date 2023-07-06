import {
    StyleSheet, Text, View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar
} from 'react-native'
import React, { useRef, useState, useCallback } from 'react'
import { COLORS, SIZES, images, FONTS } from '../../constants'
import data from '../../data'
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { ButtonText } from '../../components'


const Logo = () => (
    <View style={styles.headerLogo}>
        <Image
            style={styles.logo}
            source={images.logo_02}
            resizeMode='contain' />
    </View>
)


const renderItem = ({ item, index }) => {
    return (
        <View style={{ flex: 1, width: SIZES.width }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={item.backgroundImage}>
                <View style={[styles.bannerImageWrapper]} >
                    <Image
                        resizeMode='contain'
                        style={[styles.bannerImage, { marginBottom: -SIZES.padding }]}
                        source={item.bannerImage}></Image>
                </View>
            </ImageBackground>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: SIZES.radius,
                marginTop: 30,
                marginBottom: index == 1 ? 21 : 0
            }}>
                <Text style={{
                    color: COLORS.blackText,
                    textAlign: 'center',
                    ...FONTS.h5,
                    fontWeight: 'bold'
                }}>{item.title}</Text>
                <Text
                    style={{
                        color: COLORS.gray,
                        textAlign: 'center',
                        paddingHorizontal: SIZES.padding,
                        marginTop: SIZES.radius,
                        ...FONTS.bodyText2
                    }}>{item.description}</Text>
            </View>
        </View>
    )
}
const OnBoarding = () => {
    const scrollX = useRef(useSharedValue(0)).current
    const flastListRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const onViewChangeRef = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    })
    const onScroll = useAnimatedScrollHandler((event) => {
        scrollX.value = event.contentOffset.x
    })
    const Dots = () => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {
                    data.onboarding_screens.map((item, index) => {
                        const reanimatedStyle = useAnimatedStyle(() => {
                            const inputRange = [(index - 1) * SIZES.width, index * SIZES.width, (index + 1) * SIZES.width];
                            const backgroundColor = interpolateColor(
                                scrollX.value,
                                inputRange,
                                [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange]);
                            const width = interpolate(
                                scrollX.value,
                                inputRange,
                                [10, 30, 10],
                                Extrapolate.CLAMP)
                            return {
                                backgroundColor,
                                width
                            }
                        })
                        return (
                            <Animated.View
                                key={`${item.id}`}
                                style={[{
                                    borderRadius: 10,
                                    marginHorizontal: SIZES.base,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: COLORS.primary
                                }, reanimatedStyle]}>

                            </Animated.View>
                        )
                    })
                }
            </View>
        )
    }
    const Footer = () => {
        const onPress = useCallback(
            () => {
                console.log("onPress");
                flastListRef?.current.scrollToIndex({
                    index: currentIndex + 1,
                    animated: true
                })
            }, [currentIndex])
        return (
            <View style={{

            }}>
                {/* dots */}
                <View style={{
                    justifyContent: 'center'
                }}>
                    <Dots />
                </View>
                {/* button */}
                {currentIndex < data.onboarding_screens.length - 1 ?
                    <View
                        style={{
                            width: SIZES.width,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: SIZES.padding,
                            paddingHorizontal: SIZES.padding
                        }}>
                        <ButtonText
                            // onPress={() => navigation.navigate("SignIn")}
                            label={"Skip"}
                            labelStyle={[FONTS.subtitle1, { color: COLORS.gray, fontWeight: 'bold' }]} />
                        <ButtonText
                            onPress={onPress}
                            label={"Next"}
                            labelStyle={[FONTS.subtitle1, { color: COLORS.white, fontWeight: 'bold' }]}
                            containerStyle={{
                                backgroundColor: COLORS.primary,
                                height: 60,
                                width: SIZES.width * 0.5,
                                borderRadius: SIZES.radius
                            }}
                        />
                    </View> :
                    <View style={{
                        paddingHorizontal: SIZES.padding,
                        marginVertical: SIZES.padding,
                    }}>
                        <ButtonText
                            label={"Let's Get Started"}
                            labelStyle={{
                                color: COLORS.white,
                                ...FONTS.subtitle1,
                                fontWeight: 'bold'
                            }}
                            containerStyle={{
                                height: 60,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.primary,
                                width: SIZES.width - 2 * SIZES.padding
                            }}
                        />
                    </View>
                }
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* logo */}
            <StatusBar animated translucent backgroundColor={COLORS.transparent} barStyle={"dark-content"} />
            <Logo />
            {/* content */}
            <Animated.FlatList
                ref={flastListRef}
                onViewableItemsChanged={onViewChangeRef.current}
                pagingEnabled
                horizontal
                onScroll={onScroll}
                showsHorizontalScrollIndicator={false}
                data={data.onboarding_screens}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem} />
            <Footer />
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    bannerImage: {
        width: SIZES.width * 0.8,
        height: SIZES.width * 0.8,
        // marginBottom: -SIZES.padding
    },
    bannerImageWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // backgroundColor: COLORS.red
    },

    logo: {
        width: SIZES.width * 0.5,
        height: 100
    },

    headerLogo: {
        zIndex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})