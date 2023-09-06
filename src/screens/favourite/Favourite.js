import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../config';
import {ButtonIcon, Header} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromFavorite} from '../../redux/slice/userSlice';

const Favourite = () => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(state => state.user.favorite);
  const _enerateArray = useCallback(n => {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = {
        id: Math.random(),
        name: 'Hamburger',
        description: 'Chicken patty hamburger',
        categories: [1, 2],
        price: 15.99,
        calories: 78,
        isFavourite: i % 2 == 0 ? true : false,
        image:
          'https://cdn.tgdd.vn/Products/Images/2565/85959/bhx/-202306190956004561_300x300.jpg',
      };
    }
    return arr;
  }, []);
  // const [menuList, setMenuList] = useState(_enerateArray(3));
  const onRemovePress = itemToRemove => {
    dispatch(removeFromFavorite(itemToRemove));
  };
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      {/* image */}
      <Image
        style={styles.itemImage}
        source={{
          uri: item.image,
        }}
      />
      {/* content */}
      <View style={{flex: 1}}>
        <Text
          style={{
            color: COLORS.blackText,
            ...FONTS.label_large,
          }}>
          Thùng 30 gói mì Hảo Hảo tôm chua cay 75g
        </Text>
        <TouchableOpacity style={styles.btnDetail}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.label_medium,
            }}>
            Xem chi tiết
          </Text>
          <Image
            source={icons.down_arrow}
            style={{width: 18, height: 18, tintColor: COLORS.black}}
          />
        </TouchableOpacity>
      </View>
      {/* btn favourite */}
      <TouchableOpacity
        onPress={() => onRemovePress(item)}
        style={styles.btnFavorite}>
        <Image source={icons.favourite_fill} style={styles.btnFavoriteRemove} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Yêu thích'} />
      {favoriteList.length ? (
        <FlatList
          data={favoriteList}
          keyExtractor={(item, index) => `${index}`}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.emptyText}>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.headline_small,
            }}>
            Danh sách của bạn trống
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  itemImage: {
    marginHorizontal: SIZES.radius,
    width: 70,
    height: 70,
  },

  emptyText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDetail: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnFavorite: {
    padding: SIZES.base,
    backgroundColor: COLORS.lightGray2,
    marginRight: SIZES.radius,
    borderRadius: 100,
  },
  btnFavoriteRemove: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.radius,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray2,
    backgroundColor: COLORS.white,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
