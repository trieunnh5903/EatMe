import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './BottomTabNavigator';
import { DetailFood, Home, Search } from '../screens';
import Feature from '../screens/home/Feature';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='Root' component={TabNavigator}></Stack.Screen>
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
                    sharedElements={(route, otherRoute, showing) => {
                        const item = route.params;
                        return [
                            {
                                id: `item.${item.id}.image`,
                                animation: 'move',
                                resize: 'auto',
                            },
                        ];
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

