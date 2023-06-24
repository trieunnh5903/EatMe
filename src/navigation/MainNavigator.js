import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './BottomTabNavigator';
import { Home, Search } from '../screens';
import Feature from '../screens/home/Feature';

const Stack = createStackNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='Root' component={TabNavigator}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

