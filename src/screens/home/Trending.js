import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview'
import { COLORS, SIZES } from '../../config'
import { HorizontalFoodCard } from '../../components'

const Trending = () => {
  const _enerateArray = (n) => {
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
  }

  const createDataProvider = () => {
    return new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
  }

  const [dataProvider, setDataProvider] = useState(createDataProvider())
  const layoutProvider = new LayoutProvider(
    index => 0,
    (type, dim) => {
      dim.width = SIZES.width;
      dim.height = 150;
    }
  )

  useEffect(() => {
    setDataProvider(pre => pre.cloneWithRows(_enerateArray(100)))
  }, [])

  const renderList = (type, data, index) => {
    return (
      <HorizontalFoodCard
        imageStyle={styles.imageCard}
        onPress={() => console.log(`HorizontalFoodCard ${index}`)}
        item={data} />
    )
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white,  minHeight: 1, minWidth: 1  }}>
      <RecyclerListView
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={(type, data, index) => renderList(type, data, index)}
      />

    </SafeAreaView>
  )
}

export default Trending

const styles = StyleSheet.create({
  imageCard: {
    width: 110,
    height: 110,
    marginTop: 20
  },
})