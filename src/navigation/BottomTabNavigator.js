import React, { useEffect } from 'react'
import { Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, bottom_tabs } from '../constants';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"
    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: COLORS.white2,
                borderTopColor: 'rgba(220,220,222,.6)',
                borderTopWidth: 1,
            }}
            sceneAnimationEnabled={false}
            sceneAnimationType='opacity'
            shifting={true}
            keyboardHidesNavigationBar={true}
            activeColor={COLORS.primary}
            screenOptions={{
                headerShown: false,
            }}>
            {
                bottom_tabs.map((item) => {
                    return (
                        <Tab.Screen
                            name={item.name}
                            component={item.component}
                            key={`bottom_tabs-${item.id}`}
                            options={{
                                tabBarColor: 'blue',
                                tabBarIcon: ({ focused }) => {
                                    return <Image
                                        style={[styles.iconBottomTab, { tintColor: focused ? COLORS.primary : COLORS.black }]}
                                        source={item.icon} />
                                }
                            }}
                        />
                    )
                })
            }
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabButtonContent: {
        width: '80%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },

    tabButtonLabel: {
        marginLeft: SIZES.base,
        color: COLORS.blackText,
        ...FONTS.h3
    },

    iconBottomTab: {
        width: 26,
        height: 26,
        tintColor: COLORS.black,
        resizeMode: 'contain',
        marginTop: 6
    },

    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    tabButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: SIZES.radius,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: COLORS.white,
        zIndex: 2
    },
})

export default BottomTabNavigator