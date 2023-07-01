import {
  StyleSheet, Text, View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'

const Favourite = () => {
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
          image: "https://cdn.tgdd.vn/Products/Images/2565/85959/bhx/-202306190956004561_300x300.jpg"
        }
      }
      return arr;
    }, [])
  const [menuList, setMenuList] = useState(_enerateArray(15));
  const renderItem = ({ item, index }) => {
    if (item.isFavourite) {
      return (
        <View
          style={{
            flexDirection: 'row',
            borderRadius: SIZES.base,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: SIZES.radius,
            borderBottomWidth: 1,
            borderColor: COLORS.lightGray2
          }}
        >
          {/* image */}
          <Image
            style={{
              marginHorizontal: SIZES.radius,
              width: 70,
              height: 70,
            }}
            source={{
              uri:
                item.image
            }}></Image>
          {/* content */}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: COLORS.blackText,
                ...FONTS.subtitle1
              }}
            >Thùng 30 gói mì Hảo Hảo tôm chua cay 75g</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  color: COLORS.darkGray,
                  ...FONTS.caption
                }}
              >Xem chi tiết</Text>
              <Image source={icons.down_arrow}
                style={{ width: 18, height: 18, tintColor: COLORS.black }} />
            </TouchableOpacity>
          </View>
          {/* btn favourite */}
          <TouchableOpacity
            onPress={() => item.isFavourite = false}
            style={{
              padding: SIZES.radius,
            }}>
            <Image
              source={icons.favourite_fill}
              style={{
                width: 24,
                height: 24,
                tintColor: COLORS.primary
              }}
            />
          </TouchableOpacity>
        </View>
      )
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuList}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
})