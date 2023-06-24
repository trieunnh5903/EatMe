import { Image, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import { icons, COLORS, SIZES, FONTS, images } from '../../constants'
import data from '../../data'
import { Header, HorizontalFoodCard, VerticalFoodCard } from '../../components'
import Carousel from 'react-native-reanimated-carousel'
import { useNavigation } from '@react-navigation/native'
const Section = ({ title, onPress, children, style }) => {
  return (
    <View>
      <View style={[styles.section, style]}>
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
  const navigation = useNavigation();
  const [page, setPage] = useState(1)
  const _enerateArray = useCallback(
    (n) => {
      let arr = new Array(n);
      for (let i = 0; i < n; i++) {
        arr[i] = {
          id: i,
          name: "Hamburger",
          description: "Chicken patty hamburger",
          categories: [1, 2],
          price: 15.99,
          calories: 78,
          isFavourite: true,
          image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png'
        }
      }
      return arr;
    }, [])

  const [menuList, setMenuList] = useState(_enerateArray(20));
  const [recommends, setRecommends] = useState(_enerateArray(10));
  const [popular, setPopular] = useState(_enerateArray(20))

  const SearchInput = () => {
    return (
      <View style={styles.searchContainer}>
        {/* icon */}
        <Image source={icons.search} style={styles.icon} />
        {/* text input */}
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Search")}>
          <TextInput
            editable={false}
            placeholder='search food'
            style={styles.searchInput}></TextInput>
        </TouchableOpacity>
        {/* filter */}
        <TouchableOpacity>
          <Image source={icons.filter} style={styles.icon} />
        </TouchableOpacity>
      </View>
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
        style={{ marginTop: 0 }}
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
                  width: 210
                }}
                imageStyle={{
                  width: 150,
                  height: 150,
                  marginTop: SIZES.radius
                }}
              />
            )
          }} />
      </Section>
    )
  }

  const DeliveryTo = () => {
    return (
      <View
        style={{
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

  const MyCarousel = () => {
    return (
      <Carousel
        pagingEnabled
        snapEnabled={false}
        mode="parallax"
        loop
        width={SIZES.width}
        height={200}
        autoPlay={true}
        autoPlayInterval={1500}
        data={data.carousel}
        scrollAnimationDuration={3500}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log(item.id)}
            style={{
              flex: 1
            }}>
            <Image
              source={item.image}
              resizeMode='cover'
              style={{
                width: null,
                height: null,
                flex: 1
              }}
            />
          </TouchableOpacity>
        )}
      />
    )
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        {/* header */}
        <Header
          containerStyle={{
            paddingHorizontal: SIZES.padding,
            alignItems: 'center'
          }}
          rightComponent={
            <View>
              <Image style={styles.profile} source={{ uri: data.myProfile.profile_image }}></Image>
            </View>
          }
          leftComponent={
            <View>
              <Image source={images.logo_02} style={styles.logo} />
            </View>
          }
        />
        {/* search */}
        <SearchInput />
        {/* filter modal */}
        {/* delivery to */}
        <DeliveryTo />
        {/* carousel */}
        <MyCarousel />
        {/* list popular */}
        <PopularSection />
        {/* list recommended */}
        <RecommendedSection />
        {/* menu type */}
        {/* <HeaderMenuType /> */}
        {/* list */}
        <Text style={{
          marginTop: 30,
          marginHorizontal: SIZES.padding,
          marginBottom: 20,
          ...FONTS.h5, color: COLORS.blackText, fontWeight: 'bold'
        }}>Nearby you</Text>
        <FlatList
          data={menuList}
          scrollEnabled={false}
          keyExtractor={(item, index) => `${index}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                imageStyle={styles.imageCard}
                onPress={() => console.log("HorizontalFoodCard")}
                item={item}
                containerStyle={styles.horizontalFoodCard}
              />
            )
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  headerContainerStyle: {
    height: 50,
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 40
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
  logo: {
    resizeMode: 'contain',
    flex: 1,
    width: 140,
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
    height: 40,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.radius,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: 12,
    borderRadius: SIZES.padding,
    alignItems: 'center',
  }
})