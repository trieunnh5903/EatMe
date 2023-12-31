import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonText,
  ButtonTextIcon,
  HorizontalFoodCard,
  VerticalFoodCard,
  ButtonIcon,
} from '../../components';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SortBottomSheet from './SortBottomSheet';

const SearchInput = ({keyword, setKeyword, onDeletePress}) => {
  return (
    <View style={styles.searchContainer}>
      {/* icon */}
      <Image source={icons.search} style={styles.icon} />
      {/* text input */}
      <TextInput
        value={keyword}
        onChangeText={value => setKeyword(value)}
        cursorColor={COLORS.black}
        placeholder="Tìm kiếm món ăn"
        style={styles.searchInput}
      />
      {/* filter */}
      {keyword && (
        <TouchableOpacity onPress={onDeletePress}>
          <Image source={icons.close} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const Chips = ({label, onPress}) => (
  <ButtonText
    onPress={onPress}
    label={label}
    labelStyle={{
      color: COLORS.gray,
      ...FONTS.label_large,
    }}
    containerStyle={styles.chipContainer}
  />
);

const PopularSection = ({popular, navigation}) => {
  return (
    <View>
      <View style={styles.popularHeader}>
        <Text
          style={{
            ...FONTS.title_medium,
            color: COLORS.blackText,
          }}>
          Phổ biến
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.title_small,
            }}>
            Tất cả
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={popular}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          const marginLeft = index === 0 ? SIZES.padding : 18;
          const marginRight = index === popular.length - 1 ? SIZES.padding : 0;
          return (
            <VerticalFoodCard
              onPress={() => navigation.navigate('DetailFood', item)}
              item={item}
              containerStyle={[
                styles.foodItemContainer,
                {
                  marginLeft: marginLeft,
                  marginRight: marginRight,
                },
              ]}
              imageStyle={styles.foodItemImage}
            />
          );
        }}
      />
    </View>
  );
};

const Search = () => {
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
          'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png',
      };
    }
    return arr;
  }, []);
  const [popular, setPopular] = useState(_enerateArray(20));
  const [keyword, setKeyword] = useState('');
  const navigation = useNavigation();
  const [menuList, setMenuList] = useState(_enerateArray(15));

  // ref
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheetModalProvider>
        {/* header */}
        <View style={styles.headerWrapper}>
          <SearchInput
            keyword={keyword}
            setKeyword={setKeyword}
            onDeletePress={() => setKeyword('')}
          />
        </View>
        {/* list */}
        {!keyword ? (
          // before search
          <TouchableWithoutFeedback
            style={{flex: 1}}
            onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  paddingVertical: SIZES.radius,
                }}>
                <Text
                  style={{
                    color: COLORS.blackText,
                    ...FONTS.title_medium,
                    marginBottom: SIZES.radius,
                  }}>
                  Tìm kiếm nhiều
                </Text>
                <View style={styles.chipGroup}>
                  <Chips
                    label={'Cơm'}
                    onPress={() => console.log('Chips press')}
                  />
                  <Chips
                    label={'Bún'}
                    onPress={() => console.log('Chips press')}
                  />
                  <Chips
                    label={'Bánh mì'}
                    onPress={() => console.log('Chips press')}
                  />
                  <Chips
                    label={'Pizza'}
                    onPress={() => console.log('Chips press')}
                  />
                  <Chips
                    label={'Hamburger'}
                    onPress={() => console.log('Chips press')}
                  />
                  <Chips
                    label={'Bánh ngọt'}
                    onPress={() => console.log('Chips press')}
                  />
                  <Chips
                    label={'Coca'}
                    onPress={() => console.log('Chips press')}
                  />
                </View>
              </View>
              <PopularSection popular={popular} navigation={navigation} />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          // after search
          <>
            <View style={styles.filterContainer}>
              <Text style={{color: COLORS.gray, ...FONTS.body_medium}}>
                Tìm thấy 13+ sản phẩm
              </Text>
              <ButtonTextIcon
                containerStyle={styles.buttonFilterContainer}
                onPress={handlePresentModalPress}
                labelStyle={{color: COLORS.gray, ...FONTS.label_large}}
                iconLeft={icons.sort}
                iconStyle={styles.buttonFilterIcon}
                label={'Lọc'}
              />
            </View>
            <FlatList
              data={menuList}
              keyExtractor={(item, index) => `${index}`}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <HorizontalFoodCard
                    imageStyle={styles.imageCard}
                    onPress={() => navigation.navigate('DetailFood', item)}
                    item={item}
                    containerStyle={styles.horizontalFoodCard}
                  />
                );
              }}
            />
            <SortBottomSheet bottomSheetModalRef={bottomSheetModalRef} />
          </>
        )}
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  buttonFilterContainer: {
    borderRadius: SIZES.padding,
    borderColor: COLORS.gray3,
    height: 30,
    paddingHorizontal: SIZES.spacing,
    borderWidth: 1,
    marginTop: -SIZES.base,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  foodItemImage: {
    width: 120,
    height: 120,
    marginTop: SIZES.radius,
  },

  buttonFilterIcon: {
    width: 16,
    height: 16,
    marginRight: SIZES.base,
    tintColor: COLORS.gray,
  },
  foodItemContainer: {
    padding: SIZES.radius,
    width: 210,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.radius,
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

  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
  },
  searchInput: {
    ...FONTS.body_medium,
    flex: 1,
    marginLeft: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 46,
    backgroundColor: COLORS.lightGray2,
    paddingHorizontal: 12,
    borderRadius: SIZES.padding,
    alignItems: 'center',
  },

  chipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 40,
    marginRight: SIZES.spacing,
    marginBottom: SIZES.spacing,
    borderRadius: SIZES.padding,
    backgroundColor: COLORS.lightGray2,
    paddingHorizontal: SIZES.padding,
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
  },
});
