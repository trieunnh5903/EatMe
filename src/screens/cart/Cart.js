import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {ButtonIcon, Header, QuantityInput} from '../../components';
import {COLORS, FONTS, SIZES, icons} from '../../config';
import {Shadow} from 'react-native-shadow-2';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearCart,
  removeItem,
  updateItemQuantity,
} from '../../redux/slice/cartSlice';
import {SwipeListView} from 'react-native-swipe-list-view';
const Cart = ({navigation}) => {
  const cartList = useSelector(state => state.cart.cartList);
  const totalCartPrice = useSelector(state => state.cart.totalCartPrice);
  const dispatch = useDispatch();

  const onIncreasePress = (itemId, previousQuantity) => {
    const quantity = previousQuantity + 1;
    dispatch(updateItemQuantity({itemId, quantity}));
  };

  const showAlertDelete = itemIdToRemove => {
    Alert.alert(
      'Thông báo',
      'Bạn muốn xóa sản phẩm này không?',
      [
        {
          text: 'Hủy',
          style: 'default',
        },
        {
          text: 'Đồng ý',
          onPress: () => dispatch(removeItem(itemIdToRemove)),
          style: 'default',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const onDecreasePress = item => {
    const itemId = item.id;
    if (item.quantity > 1) {
      const quantity = item.quantity - 1;
      dispatch(updateItemQuantity({itemId, quantity}));
    } else {
      showAlertDelete(itemId);
    }
  };

  const closeRow = (rowMap, rowId) => {
    if (rowMap[rowId]) {
      rowMap[rowId].closeRow();
    }
  };
  const deleteRow = (rowMap, rowId) => {
    closeRow(rowMap, rowId);
    dispatch(removeItem(rowId));
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={[styles.rowFront, styles.hiddenLayoutWrapper]}>
      <ButtonIcon
        icon={icons.delete}
        iconStyle={styles.hiddenLayoutIcon}
        containerStyle={styles.hiddenLayoutContainer}
        onPress={() => {
          deleteRow(rowMap, data.item.id);
        }}
      />
    </View>
  );

  const renderItem = (data, rowMap) => {
    return (
      <View style={styles.itemContainer}>
        {/* image */}
        <Image
          style={styles.itemImage}
          source={{
            uri: data.item.image,
          }}
        />
        {/* content */}
        <View style={{flex: 1}}>
          <Text style={styles.itemName}>{data.item.name}</Text>
          <TouchableOpacity style={styles.itemBtnDetail}>
            <Text
              style={{
                color: COLORS.darkGray,
                ...FONTS.title_small,
              }}>
              Xem chi tiết
            </Text>
            <Image source={icons.down_arrow} style={styles.down_arrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.paymentWrapper}>
          {/* total price */}
          <Text style={styles.totalPrice}>${data.item.priceTotal}</Text>
          {/* quantity input */}
          <QuantityInput
            onAddPress={() => onIncreasePress(data.item.id, data.item.quantity)}
            onRemovePress={() => onDecreasePress(data.item)}
            labelStyle={styles.labelQuantityInput}
            iconContainerStyle={styles.iconQuantityInputContainer}
            quantity={data.item.quantity}
            iconStyle={styles.iconQuantityInput}
            containerStyle={styles.quantityInputContainer}
          />
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.label_medium,
            }}>
            ${data.item.price}/sản phẩm
          </Text>
        </View>
      </View>
    );
  };

  const onDeleteAll = () => {
    Alert.alert(
      'Thông báo',
      'Bạn muốn xóa tất cả sản phẩm không?',
      [
        {
          text: 'Hủy',
          style: 'default',
        },
        {
          text: 'Đồng ý',
          onPress: () => dispatch(clearCart()),
          style: 'default',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* navigation */}
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.btnBack}>
            <Image source={icons.arrow_back} style={styles.icon} />
          </TouchableOpacity>
        }
        rightComponent={
          cartList.length > 0 ? (
            <TouchableOpacity onPress={() => onDeleteAll()}>
              <Text
                style={{
                  color: COLORS.red,
                  ...FONTS.title_small,
                }}>
                Xóa tất cả
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.transparent} />
          )
        }
        title={'Giỏ hàng'}
        containerStyle={{
          paddingHorizontal: SIZES.radius,
        }}
      />

      {cartList.length > 0 ? (
        <>
          {/* list */}
          <SwipeListView
            data={cartList}
            keyExtractor={(item, index) => `${item.id}`}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-100}
            previewRowKey={'0'}
            previewOpenValue={-5}
            previewOpenDelay={8000}
            previewRepeat={true}
            useNativeDriver={true}
          />
          {/* footer */}
          <Shadow>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: SIZES.width,
              }}>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.textTitle}>
                  {cartList?.length || 0} sản phẩm
                </Text>
                <Text style={styles.textTitle}>Thanh toán</Text>
                <Text style={styles.textTitle}>${totalCartPrice}</Text>
              </TouchableOpacity>
            </View>
          </Shadow>
        </>
      ) : (
        <>
          <View style={styles.emptyWrapper}>
            <Image style={styles.imageEmty} source={icons.cart_weight400} />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.headline_small,
              }}>
              Giỏ hàng của bạn trống!
            </Text>
          </View>
          <Shadow>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: SIZES.width,
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.buttonStartShopping}>
                <Text style={styles.textTitle}>Bắt đầu mua sắm</Text>
              </TouchableOpacity>
            </View>
          </Shadow>
        </>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  quantityInputContainer: {
    justifyContent: 'space-between',
    height: 40,
    marginVertical: 6,
  },

  imageEmty: {
    tintColor: COLORS.primary,
    width: 70,
    height: 70,
  },

  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonStartShopping: {
    margin: SIZES.radius,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },

  paymentWrapper: {alignItems: 'flex-end', marginHorizontal: SIZES.radius},
  btnBack: {
    paddingHorizontal: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  transparent: {
    paddingHorizontal: SIZES.radius,
    width: 24,
    height: 24,
  },

  iconQuantityInputContainer: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    height: 40,
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.base,
  },

  checkoutButton: {
    margin: SIZES.radius,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  iconQuantityInput: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
  },

  down_arrow: {width: 18, height: 18, tintColor: COLORS.black},

  labelQuantityInput: {
    color: COLORS.blackText,
    ...FONTS.title_medium,
    fontWeight: 'bold',
    marginHorizontal: SIZES.radius,
  },

  totalPrice: {
    color: COLORS.black,
    ...FONTS.title_medium,
    fontWeight: 'bold',
  },
  hiddenLayoutContainer: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.primary,
  },
  hiddenLayoutIcon: {
    width: 48,
    height: 48,
    tintColor: COLORS.white,
  },
  hiddenLayoutWrapper: {
    height: 100,
    width: SIZES.width,
    alignItems: 'flex-end',
  },
  itemBtnDetail: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemName: {
    color: COLORS.blackText,
    ...FONTS.title_medium,
  },

  itemImage: {
    margin: SIZES.base,
    width: 70,
    height: 80,
    resizeMode: 'contain',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.radius,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray2,
  },

  textTitle: {
    color: COLORS.white2,
    ...FONTS.title_medium,
    fontWeight: 'bold',
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
  },

  imageCard: {
    width: 110,
    height: 110,
    marginTop: 20,
  },

  horizontalFoodCard: {
    height: 150,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
