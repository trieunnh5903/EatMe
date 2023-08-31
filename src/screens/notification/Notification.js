import PropTypes from 'prop-types';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect, useRef, memo, useMemo, useCallback } from 'react'
import { RecyclerListView, DataProvider, LayoutProvider, BaseScrollView } from 'recyclerlistview'
import { COLORS, SIZES } from '../../config'
import { HorizontalFoodCard } from '../../components'

const Header = () => <View style={styles.header} />

const ScrollViewWithHeader = React.forwardRef(({ children, ...props }, ref) => {
  return <ScrollView
    ref={ref}
    {...props}
  >

    {children}
  </ScrollView>;
});

RecyclerListView.propTypes.externalScrollView = PropTypes.object;

const Notification = memo(() => {
  const [data, setData] = useState([]);
  const _enerateArray = useCallback(
    (n) => {
      let arr = new Array(n);
      for (let i = 0; i < n; i++) {
        arr[i] = {
          id: i,
          name: "Hamburger",
          description: "Chicken patty hamburger",
          categories: [1, 2],
          price: 15.99,
          calories: 78,
          isFavourite: true,
          image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png'
        };
      }
      return arr;
    }, []
  )
  useEffect(() => {
    setData(_enerateArray(100))
  }, []);

  const createDataProvider = (data) =>
    new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);
  const dataProvider = useMemo(() => createDataProvider(data), [data]);

  const layoutProvider = useRef(new LayoutProvider(
    index => 0,
    (type, dim) => {
      dim.width = SIZES.width;
      dim.height = 150;
    }
  )).current;

  const renderList = (type, data, index) => {
    return (
      <HorizontalFoodCard
        imageStyle={styles.imageCard}
        onPress={() => console.log(`HorizontalFoodCard ${index}`)}
        item={data} />
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <RecyclerListView
        scrollViewProps={
          <Header/>
        }
        externalScrollView={ScrollViewWithHeader}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={(type, data, index) => renderList(type, data, index)}
      />

    </SafeAreaView>
  )
}
)

export default Notification

const styles = StyleSheet.create({
  header: {
    height: 900,
    backgroundColor: 'blue'
  },
  imageCard: {
    width: 110,
    height: 110,
    marginTop: 20
  },
})