import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SIZES } from '../../constants';
import Feature from './Feature';
import NearbyYou from './NearbyYou';
import Newest from './Newest';
import Recommend from './Recommend';
import Trending from './Trending';
const Tab = createMaterialTopTabNavigator();

const TabMenu = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    elevation: 1
                },
                tabBarPressColor: 'white',
                tabBarIndicatorStyle: {
                    height: 3,
                    backgroundColor: '#FF5E00',
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    textTransform: 'capitalize',
                    color: '#804F1E'
                },
                tabBarItemStyle: { width: 'auto' },
                tabBarScrollEnabled: true,
            }}

            initialLayout={SIZES.width}>
            <Tab.Screen name="Feature" component={Feature} />
            <Tab.Screen name="Nearby You" component={NearbyYou} />
            <Tab.Screen name="Newest" component={Newest} />
            <Tab.Screen name="Recommend" component={Recommend} />
            <Tab.Screen name="Trending" component={Trending} />
        </Tab.Navigator>
    )
}

export default TabMenu

const styles = StyleSheet.create({})