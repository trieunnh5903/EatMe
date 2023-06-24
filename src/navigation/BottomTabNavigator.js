import React, { useEffect } from 'react'
import { Image, StyleSheet, Text } from "react-native";
import { COLORS, FONTS, SIZES, bottom_tabs } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: COLORS.white2,
            }}
            keyboardHidesNavigationBar={true}
            activeColor={COLORS.primary}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    justifyContent: 'center',
                }
            }}>
            {
                bottom_tabs.map((item) => {
                    return (
                        <Tab.Screen
                            name={item.name}
                            component={item.component}
                            key={`bottom_tabs-${item.id}`}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return <Image
                                        style={[styles.iconBottomTab, { tintColor: focused ? COLORS.primary : COLORS.black }]}
                                        source={focused ? item.icon_fill : item.icon} />
                                },
                                tabBarLabel: ({ focused }) => {
                                    return (
                                        <Text style={[FONTS.caption, { color: focused ? COLORS.primary : COLORS.blackText, marginBottom: 4 }]}>{item.name}</Text>
                                    )
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
    iconBottomTab: {
        width: 26,
        height: 26,
        tintColor: COLORS.black,
        resizeMode: 'contain',
        marginTop: 4
    },
})

export default BottomTabNavigator