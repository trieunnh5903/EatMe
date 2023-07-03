import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native'
import React, { useCallback, useState } from 'react'
import { Header, QuantityInput } from '../../components'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import { Shadow } from 'react-native-shadow-2'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateItemQuantity } from '../../redux/slice/cartSlice'

const Cart = ({ navigation }) => {
  const cartList = useSelector(state => state.cart.cartList);
  const totalCartPrice = useSelector(state => state.cart.totalCartPrice);

  const dispatch = useDispatch();
  // const [cartList, setCartList] = useState();

  const onIncreasePress = (itemId, previousQuantity) => {
    const quantity = previousQuantity + 1;
    dispatch(updateItemQuantity({ itemId, quantity }));

  }

  const showAlertDelete = (itemIdToRemove) => {
    Alert.alert(
      "Notification",
      "Do you want to delete this product?",
      [
        {
          text: 'Cancel',
          style: 'default',
        },
        {
          text: 'OK',
          onPress: () => dispatch(removeItem(itemIdToRemove)),
          style: 'default',
        },
      ],
      {
        cancelable: true,
      }
    )
  }

  const onDecreasePress = (item) => {
    const itemId = item.id;
    if (item.quantity > 1) {
      const quantity = item.quantity - 1;
      dispatch(updateItemQuantity({ itemId, quantity }));
    } else {
      showAlertDelete(itemId);
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={styles.itemContainer}
      >
        {/* image */}
        <Image
          style={{
            margin: SIZES.base,
            width: 70,
            height: 80,
            resizeMode: 'contain'
          }}
          source={{
            uri: item.image
          }}></Image>
        {/* content */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: COLORS.blackText,
              ...FONTS.subtitle1
            }}
          >{item.name}</Text>
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
        <View style={{ alignItems: 'flex-end', marginHorizontal: SIZES.radius }}>
          {/* total price */}
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.subtitle1,
              fontWeight: 'bold',
            }}
          >${item.priceTotal}</Text>
          {/* quantity input */}
          <QuantityInput
            onAddPress={() => onIncreasePress(item.id, item.quantity)}
            onRemovePress={() => onDecreasePress(item)}
            labelStyle={{
              color: COLORS.blackText,
              ...FONTS.subtitle1,
              fontWeight: 'bold',
              marginHorizontal: SIZES.radius,
            }}

            iconContainerStyle={{
              borderColor: COLORS.primary,
              borderWidth: 1,
              height: 40,
              borderRadius: SIZES.base,
              paddingHorizontal: SIZES.base
            }}
            quantity={item.quantity}
            iconStyle={{
              width: 24,
              height: 24,
              tintColor: COLORS.black,
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
            ${item.price}/product</Text>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* navigation */}
      <Header
        leftComponent={(
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginLeft: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              backgroundColor: COLORS.lightGray2,
              borderRadius: 100,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center'
            }}
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
      {/* list */}
      <FlatList
        data={cartList}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
      {/* footer */}
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
            <Text style={styles.textTitle}>{cartList?.length || 0} products</Text>
            <Text style={styles.textTitle}>Go to checkout</Text>
            <Text style={styles.textTitle}>${totalCartPrice}</Text>
          </TouchableOpacity>
        </View>
      </Shadow>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderRadius: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.radius,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray2
  },

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