import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {COLORS, FONTS, SIZES, bottom_tabs} from '../config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const cartList = useSelector(state => state.cart.cartList);
  const cartListLength = cartList.length;
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
        },
      }}>
      <Tab.Screen
        name={'HomeNavigator'}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={[
                  styles.iconBottomTab,
                  {tintColor: focused ? COLORS.primary : COLORS.black},
                ]}
                source={
                  focused ? bottom_tabs[0].icon_fill : bottom_tabs[0].icon
                }
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  FONTS.label_medium,
                  {
                    color: focused ? COLORS.primary : COLORS.blackText,
                    marginBottom: 8,
                  },
                ]}>
                {bottom_tabs[0].name}
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={bottom_tabs[1].name}
        component={bottom_tabs[1].component}
        key={`bottom_tabs-${bottom_tabs[1].id}`}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={[
                  styles.iconBottomTab,
                  {tintColor: focused ? COLORS.primary : COLORS.black},
                ]}
                source={
                  focused ? bottom_tabs[1].icon_fill : bottom_tabs[1].icon
                }
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  FONTS.label_medium,
                  {
                    color: focused ? COLORS.primary : COLORS.blackText,
                    marginBottom: 8,
                  },
                ]}>
                {bottom_tabs[1].name}
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={bottom_tabs[2].name}
        component={bottom_tabs[2].component}
        key={`bottom_tabs-${bottom_tabs[2].id}`}
        options={{
          tabBarStyle: {
            display: 'none',
          },

          tabBarBadge: cartListLength > 0 ? cartListLength : null,

          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={[
                  styles.iconBottomTab,
                  {tintColor: focused ? COLORS.primary : COLORS.black},
                ]}
                source={
                  focused ? bottom_tabs[2].icon_fill : bottom_tabs[2].icon
                }
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  FONTS.label_medium,
                  {
                    color: focused ? COLORS.primary : COLORS.blackText,
                    marginBottom: 8,
                  },
                ]}>
                {bottom_tabs[2].name}
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={bottom_tabs[3].name}
        component={bottom_tabs[3].component}
        key={`bottom_tabs-${bottom_tabs[3].id}`}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={[
                  styles.iconBottomTab,
                  {tintColor: focused ? COLORS.primary : COLORS.black},
                ]}
                source={
                  focused ? bottom_tabs[3].icon_fill : bottom_tabs[3].icon
                }
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  FONTS.label_medium,
                  {
                    color: focused ? COLORS.primary : COLORS.blackText,
                    marginBottom: 8,
                  },
                ]}>
                {bottom_tabs[3].name}
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={bottom_tabs[4].name}
        component={bottom_tabs[4].component}
        key={`bottom_tabs-${bottom_tabs[4].id}`}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={[
                  styles.iconBottomTab,
                  {tintColor: focused ? COLORS.primary : COLORS.black},
                ]}
                source={
                  focused ? bottom_tabs[4].icon_fill : bottom_tabs[4].icon
                }
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  FONTS.label_medium,
                  {
                    color: focused ? COLORS.primary : COLORS.blackText,
                    marginBottom: 8,
                  },
                ]}>
                {bottom_tabs[4].name}
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconBottomTab: {
    width: 26,
    height: 26,
    tintColor: COLORS.black,
    resizeMode: 'contain',
    marginTop: 8,
  },
});

export default BottomTabNavigator;
