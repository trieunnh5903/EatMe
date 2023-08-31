import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import data from '../../data'
import { HorizontalFoodCard } from '../../components'
import { COLORS, FONTS, SIZES, icons } from '../../config'

const LIST = [
  {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png'
  },
  {
    id: 22,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png'
  },
  {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hot_tacos.png'
  },
  {
    id: 23,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hot_tacos.png'
  },
  {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/veg_biryani.png'
  },
  {
    id: 33,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/veg_biryani.png'
  },
  {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/wrap_sandwich.png'
  },
  {
    id: 44,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/wrap_sandwich.png'
  }
]
const Feature = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageCurrent, setPageCurrent] = useState(0)
  useEffect(() => {
    getData()
  }, [pageCurrent])

  const getData = async () => {
    setLoading(true)
    const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${pageCurrent}`
    fetch(apiURL).then((res) => res.json())
      .then((resJson) => {
        setData([...data, ...resJson])
        setLoading(false)
      })
  }

  const renderFooter = () => {
    return (
      loading ?
        <ActivityIndicator size={"large"} /> : null
    )
  }

  const handleLoadMore = () => {
    setPageCurrent(pageCurrent + 1)
    setLoading(true)
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        ItemSeparatorComponent={(
          <View style={{ height: SIZES.radius }}></View>
        )}
        contentContainerStyle={{
          padding: SIZES.padding
        }}
        data={data}
        keyExtractor={(item) => `${item.id}`}
        ListFooterComponent={renderFooter}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={[styles.container]}>
              <Image source={{ uri: item.url }} style={[styles.itemImage]} />
              <View style={{ flex: 1, marginTop: SIZES.radius }}>
                <Text numberOfLines={1} style={[FONTS.h6, { color: COLORS.blackText, fontWeight: 'bold' }]}>{item.title}</Text>
                <Text numberOfLines={1} style={[FONTS.subtitle2, { color: COLORS.darkGray2 }]}>{item.thumbnailUrl}</Text>
                <Text numberOfLines={1} style={[FONTS.h5, { color: COLORS.blackText, fontWeight: 'bold' },]}>${item.albumId}</Text>
              </View>
              {/* calories */}
              <View style={styles.icon}>
                <Image style={{ width: 24, height: 24 }} source={icons.calories} />
                <Text style={{ color: COLORS.darkGray2, ...FONTS.subtitle2 }}>{item.calories} Calories</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

export default Feature

const styles = StyleSheet.create({
  itemImage: {
    width: 110,
    height: 110,
    marginTop: 20
  },
  icon: {
    flexDirection: 'row',
    position: 'absolute', top: SIZES.radius, right: SIZES.radius,
  },

  container: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    // padding: SIZES.radius,
  }
})