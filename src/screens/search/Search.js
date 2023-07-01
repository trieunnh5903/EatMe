import {
  StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, Keyboard, TouchableWithoutFeedback,
  FlatList,
  Alert
} from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { ButtonText, ButtonTextIcon, HorizontalFoodCard, VerticalFoodCard } from '../../components'

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

const Chips = ({ label, onPress }) => (
  <ButtonText
    onPress={onPress}
    label={label}
    labelStyle={{
      color: COLORS.gray,
      ...FONTS.subtitle1
    }}
    containerStyle={{
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      height: 40,
      marginRight: SIZES.spacing,
      marginBottom: SIZES.spacing,
      borderRadius: SIZES.padding,
      backgroundColor: COLORS.lightGray2,
      paddingHorizontal: SIZES.padding,
    }}
  />
)

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
  const [popular, setPopular] = useState(_enerateArray(20))
  const [keyword, setKeyword] = useState('')
  const navigation = useNavigation();
  const [menuList, setMenuList] = useState(_enerateArray(15));
  const PopularSection = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.padding,
            marginBottom: SIZES.radius
          }
          }>
          <Text
            style={{
              ...FONTS.subtitle1,
              color: COLORS.blackText,

            }}>
            Popular
          </Text>
          <TouchableOpacity >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.subtitle2
              }}>Show All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popular}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <VerticalFoodCard
                onPress={() => navigation.navigate('DetailFood', item)}
                item={item}
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                  padding: SIZES.radius,
                  width: 210
                }}
                imageStyle={{
                  width: 120,
                  height: 120,
                  marginTop: SIZES.radius
                }}
              />
            )
          }} />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View
        style={styles.headerWrapper}>
        <SearchInput
          keyword={keyword}
          setKeyword={setKeyword}
          onDeletePress={() => setKeyword("")} />
      </View>
      {/* list */}
      {
        !keyword ? (
          <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  paddingVertical: SIZES.radius
                }}>
                <Text
                  style={{
                    color: COLORS.blackText,
                    ...FONTS.subtitle1,
                    marginBottom: SIZES.radius
                  }}>Hot search</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                  }}
                >
                  <Chips label={"Rice"} onPress={() => console.log("Chips press")} />
                  <Chips label={"Noodle"} onPress={() => console.log("Chips press")} />
                  <Chips label={"Bread"} onPress={() => console.log("Chips press")} />
                  <Chips label={"Pizza"} onPress={() => console.log("Chips press")} />
                  <Chips label={"Hamburger"} onPress={() => console.log("Chips press")} />
                  <Chips label={"Cookies"} onPress={() => console.log("Chips press")} />
                  <Chips label={"Coca"} onPress={() => console.log("Chips press")} />
                </View>
              </View>
              <PopularSection />
            </View>
          </TouchableWithoutFeedback>
        ) :
          (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: SIZES.padding, marginTop: SIZES.padding, marginBottom: SIZES.radius }}>
                <Text>Found 13+ products</Text>
                <ButtonTextIcon
                  containerStyle={{
                    borderRadius: SIZES.padding,
                    borderColor: COLORS.gray3,
                    height: 30,
                    paddingHorizontal: SIZES.spacing,
                    borderWidth: 1,
                    marginTop: -SIZES.base,
                  }}
                  labelStyle={{ color: COLORS.gray }}
                  iconLeft={icons.filter}
                  iconStyle={{ width: 16, height: 16, marginRight: SIZES.base, tintColor: COLORS.gray }}
                  label={"Filter"} />
              </View>
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
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.radius
  },

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