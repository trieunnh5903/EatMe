import {
  StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, Keyboard, TouchableWithoutFeedback,
  FlatList
} from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { COLORS, SIZES, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { Header, HorizontalFoodCard } from '../../components'

const SearchInput = ({ keyword, setKeyword, onDeletePress }) => {
  return (
    <View style={styles.searchContainer}>
      {/* icon */}
      <Image source={icons.search} style={styles.icon} />
      {/* text input */}
      <TextInput
        value={keyword}
        onChangeText={(value) => setKeyword(value)}
        cursorColor={COLORS.black}
        placeholder='search food'
        style={styles.searchInput}></TextInput>
      {/* filter */}
      {
        keyword && (
          <TouchableOpacity onPress={onDeletePress}>
            <Image source={icons.close} style={styles.icon} />
          </TouchableOpacity>
        )
      }

    </View>
  )
}

const Search = () => {
  const _enerateArray = useCallback(
    (n) => {
      let arr = new Array(n);
      for (let i = 0; i < n; i++) {
        arr[i] = {
          id: Math.random(),
          name: "Hamburger",
          description: "Chicken patty hamburger",
          categories: [1, 2],
          price: 15.99,
          calories: 78,
          isFavourite: i % 2 == 0 ? true : false,
          image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png'
        }
      }
      return arr;
    }, [])
  const [keyword, setKeyword] = useState('')
  const navigation = useNavigation();
  const [menuList, setMenuList] = useState(_enerateArray(15));

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingStart: SIZES.padding,
          marginTop: SIZES.radius
        }}>
        <SearchInput
          keyword={keyword}
          setKeyword={setKeyword}
          onDeletePress={() => setKeyword("")} />
        <TouchableOpacity
          style={{ paddingHorizontal: SIZES.radius }}
        >
          <Image
            source={icons.filter}
            style={styles.icon} />
        </TouchableOpacity>
      </View>
      {/* list */}
      {
        !keyword ? (
          <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius
              }}>
              <Text>Not found</Text>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <>
            <Text style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.padding, marginBottom: SIZES.radius }}>Found 13+ products</Text>
            <FlatList
              data={menuList}
              keyExtractor={(item, index) => `${index}`}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <HorizontalFoodCard
                    imageStyle={styles.imageCard}
                    onPress={() => navigation.navigate('DetailFood', item)}
                    item={item}
                    containerStyle={styles.horizontalFoodCard}
                  />
                )
              }}
            />
          </>
        )
      }
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  imageCard: {
    width: 110,
    height: 110,
    marginTop: 20
  },

  horizontalFoodCard: {
    height: 150,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    paddingHorizontal: 12,
    borderRadius: SIZES.padding,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.radius,
  }
})