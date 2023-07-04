import {
  StyleSheet, Text, View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import { ButtonIcon, Header } from '../../components'
import { SwipeListView } from 'react-native-swipe-list-view'

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
  const [menuList, setMenuList] = useState(_enerateArray(3));

  const renderItem = (data, rowMap) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZES.radius,
        borderBottomWidth: 1,
        borderColor: COLORS.lightGray2,
        backgroundColor: COLORS.white
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
            data.item.image
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
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
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

  const closeRow = (rowMap, rowId) => {
    if (rowMap[rowId]) {
      rowMap[rowId].closeRow();
    }
  };
  const deleteRow = (rowMap, rowId) => {
    closeRow(rowMap, rowId);
    setTimeout(() => {
      const newData = [...menuList];
      const prevIndex = menuList.findIndex(item => item.id === rowId);
      newData.splice(prevIndex, 1);
      setMenuList(newData);
    }, 0)
  };

  const renderHiddenItem = (data, rowMap) => (
    <View
      style={[styles.rowFront,
      {
        height: 100,
        width: SIZES.width,
        alignItems: 'flex-end',
      }]}>
      <ButtonIcon
        icon={icons.delete}
        iconStyle={{
          width: 48,
          height: 48,
          tintColor: COLORS.white
        }}
        containerStyle={{
          width: 100,
          height: 100,
          backgroundColor: COLORS.primary
        }}
        onPress={() => {
          deleteRow(rowMap, data.item.id)
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={"Favorite"}
      />
      <FlatList
        data={menuList}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />

      {/* <SwipeListView
        data={menuList}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-100}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        previewRepeat={true}
        useNativeDriver={true}
      /> */}
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