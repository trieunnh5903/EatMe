import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { MainNavigator } from './src/navigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <MainNavigator />
  )
}

export default App

const styles = StyleSheet.create({})