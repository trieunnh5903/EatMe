import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './BottomTabNavigator';
import {
  ConfirmOtp,
  DetailFood,
  EnterAddress,
  ForgotPassword,
  Login,
  Notification,
  OnBoarding,
  Register,
} from '../screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const MainNavigator = () => {
  const options = {
    tabBarVisible: false,
    gestureEnabled: true,
    transitionSpec: {
      open: {animation: 'timing', config: {duration: 200}},
      close: {animation: 'timing', config: {duration: 200}},
    },
    cardStyleInterpolator: ({current: {progress}}) => {
      return {
        cardStyle: {
          opacity: progress,
        },
      };
    },
  };

  const sharedElements = (route, otherRoute, showing) => {
    const item = route.params;
    return [
      {
        id: `item.${item.id}.image`,
        animation: 'move',
        resize: 'auto',
      },
    ];
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Root" component={TabNavigator} />
        <Stack.Screen
          name="DetailFood"
          component={DetailFood}
          options={options}
          sharedElements={sharedElements}
        />
        <Stack.Screen name="EnterAddress" component={EnterAddress} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
