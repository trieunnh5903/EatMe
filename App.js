import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { MainNavigator } from './src/navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from "react-redux";
import store from './src/redux/store'
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MainNavigator />
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})