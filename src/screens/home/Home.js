import { Image, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import { icons, COLORS, SIZES, FONTS } from '../../constants'
import data from '../../data'
import { Header, HorizontalFoodCard, VerticalFoodCard } from '../../components'
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
const Section = ({ title, onPress, children }) => {
  return (
    <View>
      <View style={styles.section}>
        <Text style={{ ...FONTS.h5, color: COLORS.blackText, fontWeight: 'bold' }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.subtitle2 }}>Show All</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>

  )
}

const Home = () => {
  const [categoryId, setCategoryId] = useState(1);
  const [menuTypeId, setMenuTypeId] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([])
  const [showFilterModal, setShowFilterModal] = useState(false);
  const tabMenuList = useRef();
  const scrollX = useRef(useSharedValue(0)).current;
  const currentIndex = useRef(0);
  const onViewChangeRef = React.useRef(({ viewableItems }) => {
    currentIndex.current = viewableItems[0].index
  })
  useEffect(() => {
    handlerChangeCategory
  }, [])

  const handlerChangeCategory = useMemo(() => {
    let selectedPopular = data.menu.find(a => a.name == "Popular");
    let selectedRecommend = data.menu.find(a => a.name == 'Recommended');
    let menu = data.menu.filter(a => a.id == menuTypeId);
    setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))
    setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
    setMenuList(menu[0]?.list.filter(a => a.categories.includes(categoryId)))
  }, [categoryId, menuTypeId]);

  const onTabPress = useCallback((tabId) => {
    setMenuTypeId(tabId);
    handlerChangeCategory
  }, [])

  const SearchInput = () => {
    return (
      <View style={styles.searchContainer}>
        {/* icon */}
        <Image source={icons.search} style={styles.icon} />
        {/* text input */}
        <TextInput placeholder='search food' style={styles.searchInput} />
        {/* filter */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image source={icons.filter} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }

  const HeaderMenuType = () => {
    return (
      <FlatList
        ref={tabMenuList}
        horizontal
        data={data.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                marginRight: index == data.menu.length - 1 ? SIZES.padding : 0
              }}
              onPress={() => onTabPress(item.id)}>
              <Text
                style={[
                  FONTS.h6,
                  {
                    color: menuTypeId == item.id
                      ? COLORS.primary
                      : COLORS.blackText,
                    fontWeight: 'bold'
                  },
                ]}>{item.name}</Text>
            </TouchableOpacity>
          )
        }} />
    )
  }

  const RecommendedSection = () => {
    return (
      <Section
        title={"Recomended"}
        onPress={() => console.log("show all recommended")}
      >
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          decelerationRate="fast"
          snapToInterval={SIZES.width * 0.85 + 18}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                imageStyle={{
                  marginTop: 35,
                  height: 150,
                  width: 150
                }}
                item={item}
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                  paddingRight: SIZES.radius,
                  alignItems: 'center'
                }} />
            )
          }} />
      </Section>
    )
  }

  const PopularSection = () => {
    return (
      <Section
        onPress={() => console.log("Popular section")}
        title={"Popular"}>
        <FlatList
          data={popular}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <VerticalFoodCard
                item={item}
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                  padding: SIZES.radius,
                  width: 250
                }}
                imageStyle={{
                  width: 150,
                  height: 150,
                  marginTop: 30
                }}
              />
            )
          }} />
      </Section>
    )
  }
  const onListCategoryPress = useCallback(
    (categoryId) => {
      setCategoryId(categoryId)
      handlerChangeCategory
    }, [categoryId]
  )
  const ListCategory = () => {
    return (
      <FlatList
        data={data.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => onListCategoryPress(item.id)}
              style={[
                styles.categoriesItem,
                {
                  backgroundColor: item.id == categoryId ? COLORS.primary : COLORS.lightGray2,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == data.categories.length - 1 ? SIZES.padding : 0
                }]}>
              <Image style={{ width: 32, height: 32, }} source={{ uri: item.icon }} />
              <Text
                style={{
                  color: item.id == categoryId ? COLORS.white : COLORS.darkGray,
                  marginLeft: SIZES.base,
                  ...FONTS.button
                }}>{item.name}</Text>
            </TouchableOpacity>
          )
        }} />
    )
  }

  const DeliveryTo = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding
        }}>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.subtitle1
          }}>
          DELIVERY TO
        </Text>

        <TouchableOpacity
          style={styles.deliveryTo}>
          <Text
            style={{ ...FONTS.h6, color: COLORS.blackText, fontWeight: 'bold' }}
          >{data?.myProfile?.address}</Text>
          <Image source={icons.down_arrow} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
    )
  }

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x
  })
  const Dots = ({ containerStyle }) => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle
      }}>
        {
          data.carousel.map((item, index) => {
            const reanimatedStyle = useAnimatedStyle(() => {
              const inputRange = [(index - 1) * SIZES.width, index * SIZES.width, (index + 1) * SIZES.width];
              const backgroundColor = interpolateColor(scrollX.value,
                inputRange,
                [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange]);
              const width = interpolate(scrollX.value,
                inputRange,
                [10, 30, 10],
                Extrapolate.CLAMP)
              return {
                backgroundColor,
                width
              }
            })
            return (
              <Animated.View
                key={`${item.id}`}
                style={[{
                  borderRadius: 10,
                  marginHorizontal: SIZES.base,
                  width: 10,
                  height: 10,
                  backgroundColor: COLORS.primary
                }, reanimatedStyle]}>

              </Animated.View>
            )
          })
        }
      </View>
    )
  }

  const Carousel = () => {
    return (
      <View></View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        {/* header */}
        <Header
          containerStyle={styles.headerContainerStyle}
          title={'HOME'}
          rightComponent={
            <View>
              <Image style={styles.profile} source={{ uri: data.myProfile.profile_image }}></Image>
            </View>
          }
          leftComponent={
            <TouchableOpacity
              style={styles.headerLeftComponent}>
              <Image source={icons.menu} style={styles.iconMenu} />
            </TouchableOpacity>
          }
        />
        {/* search */}
        <SearchInput />
        {/* filter modal */}
        {/* delivery to */}
        <DeliveryTo />
        {/* carousel */}
        <Carousel />
        <Dots />
        {/* list category */}
        {/* <ListCategory /> */}
        {/* list popular */}
        {/* <PopularSection /> */}
        {/* list recommended */}
        {/* <RecommendedSection /> */}
        {/* menu type */}
        {/* <HeaderMenuType /> */}
        {/* list */}
        {/* <FlatList
          data={menuList}
          scrollEnabled={false}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                imageStyle={styles.imageCard}
                onPress={() => console.log("HorizontalFoodCard")}
                item={item}
                containerStyle={styles.horizontalFoodCard} />
            )
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  headerContainerStyle: {
    height: 50,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius
  },
  deliveryTo: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    alignItems: 'center'
  },
  iconBottomTab: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
  },
  iconMenu: {
    width: 24,
    height: 24,
    tintColor: COLORS.gray2,
  },
  categoriesItem: {
    alignItems: 'center',
    minHeight: 50,
    borderRadius: SIZES.radius,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginTop: SIZES.padding
  },

  section: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
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

  headerLeftComponent: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2
  },

  icon: {
    width: 24,
    height: 24
  },

  searchInput: {
    flex: 1,
    marginLeft: 16,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  searchContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.base,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: 12,
    borderRadius: SIZES.radius,
    alignItems: 'center'
  }
})