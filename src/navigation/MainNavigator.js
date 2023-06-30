import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './BottomTabNavigator';
import { DetailFood, EnterAddress, Home, Notification, Search } from '../screens';
import Feature from '../screens/home/Feature';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const MainNavigator = () => {
    const options = {
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
    }

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
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='Root' component={TabNavigator}></Stack.Screen>
                <Stack.Screen name='DetailFood' component={DetailFood}
                    options={options}
                    sharedElements={sharedElements} />
                <Stack.Screen name='EnterAddress' component={EnterAddress}></Stack.Screen>
                <Stack.Screen name='Notification' component={Notification}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

