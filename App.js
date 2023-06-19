import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import SplashScreen from 'react-native-splash-screen';


const FirstRoute = () => (
  <View style={{ flex: 1, }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, }} />
);

const SecondRouteSecondRoute = () => (
  <View style={{ flex: 1, }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, }} />
);

const SecondRouteSecond = () => (
  <View style={{ flex: 1, }} />
);

const SixRoute = () => (
  <View style={{ flex: 1, }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: SecondRouteSecondRoute,
  fourth: ThirdRoute,
  fifth: SecondRouteSecond,
  sixth: SixRoute,
});

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First Route' },
    { key: 'second', title: 'Second Route' },
    { key: 'third', title: 'Second Route SecondRoute' },
    { key: 'fourth', title: 'Second Route Second' },
    { key: 'fifth', title: 'Fifth' },
    { key: 'sixth', title: 'Six Route' },
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      tabStyle={{ width: 'auto' }}
      pressColor={'transparent'}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, color: 'black' }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: 'orange' }}
      style={{ backgroundColor: 'white' }}
    />
  );
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 26 }}>App</Text>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})