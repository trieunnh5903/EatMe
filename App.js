import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { MainNavigator } from './src/navigation'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainNavigator />
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})