import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'
import React, { useCallback, useState } from 'react'
import { ButtonText, Header, HorizontalFoodCard, QuantityInput } from '../../components'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import { LinearGradient } from 'react-native-svg'
import { Shadow } from 'react-native-shadow-2'

const Cart = ({ navigation }) => {
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
  const [menuList, setMenuList] = useState(_enerateArray(15));
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderRadius: SIZES.base,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: SIZES.radius,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: COLORS.lightGray2
        }}
      >
        {/* image */}
        <Image
          style={{
            margin: SIZES.base,
            backgroundColor: 'red',
            width: 70,
            height: 70,
          }}
          source={{
            uri:
              "https://cdn.tgdd.vn/Products/Images/2565/85959/bhx/-202306190956004561_300x300.jpg"
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
        {/* quantity input */}
        <View style={{ alignItems: 'flex-end', marginHorizontal: SIZES.radius, }}>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.subtitle1,
              fontWeight: 'bold',
            }}
          >$225</Text>
          <QuantityInput
            labelStyle={{
              color: COLORS.blackText,
              ...FONTS.subtitle1,
              fontWeight: 'bold',
              marginHorizontal: SIZES.radius,
            }}

            iconContainerStyle={{
              backgroundColor: COLORS.primary,
              height: 40,
              borderRadius: SIZES.base,
              paddingHorizontal: SIZES.base
            }}
            quantity={1}
            iconStyle={{
              width: 24,
              height: 24,
              tintColor: COLORS.white,
            }}

            containerStyle={{
              justifyContent: 'space-between',
              height: 40,
              marginVertical: 6
            }}
          />
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.caption
            }}
          >
            $225/product</Text>
        </View>
        {/* <TouchableOpacity
          style={{
            zIndex: 10,
            elevation: 3,
            position: 'absolute',
            top: 5,
            right: 10,
            padding: 2,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 100,
          }}>
          <Image
            source={icons.close}
            style={{
              width: 24,
              height: 24,
              tintColor: COLORS.black
            }}
          />
        </TouchableOpacity> */}
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftComponent={(
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingHorizontal: SIZES.radius }}
          >
            <Image
              source={icons.arrow_back}
              style={styles.icon} />
          </TouchableOpacity>
        )}
        rightComponent={(
          <View
            style={{
              paddingHorizontal: SIZES.radius,
              width: 24,
              height: 24
            }}
          />
        )}
        title={"My Cart"}
        containerStyle={{
          paddingHorizontal: SIZES.radius
        }}
      />
      <FlatList
        data={menuList}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
      <Shadow>
        <View style={{
          backgroundColor: COLORS.white,
          width: SIZES.width
        }}>
          <TouchableOpacity
            style={{
              margin: SIZES.radius,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary
            }}
          >
            <Text style={styles.textTitle}>3 products</Text>
            <Text style={styles.textTitle}>Checkout</Text>
            <Text style={styles.textTitle}>$400</Text>
          </TouchableOpacity>
        </View>
      </Shadow>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  textTitle: {
    color: COLORS.white2,
    ...FONTS.subtitle1,
    fontWeight: 'bold'
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
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

  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
})