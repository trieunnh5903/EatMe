import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { DetailFood, Home } from '../screens';

const Stack = createSharedElementStackNavigator();
const sharedElements = (route, otherRoute, showing) => {
    const item = route.params;
    return [
        {
            id: `item.${item.id}.image`,
            animation: 'move',
            resize: 'auto',
        },
    ];
}
const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='DetailFood' component={DetailFood}
                options={{
                    tabBarVisible: false,
                    gestureEnabled: true,
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 200 } },
                        close: { animation: 'timing', config: { duration: 200 } },
                    },
                    cardStyleInterpolator: ({ current: { progress } }) => {
                        return {
                            cardStyle: {
                                opacity: progress
                            }
                        }
                    }
                }}
                sharedElements={sharedElements} />
        </Stack.Navigator>
    )
}

export default HomeNavigator

const styles = StyleSheet.create({})