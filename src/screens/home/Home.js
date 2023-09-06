/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {icons, COLORS, SIZES, FONTS, images} from '../../config';
import data from '../../data';
import {
  BadgeButton,
  FocusAwareStatusBar,
  Header,
  HorizontalFoodCard,
  VerticalFoodCard,
} from '../../components';
import Carousel from 'react-native-reanimated-carousel';
import {useNavigation} from '@react-navigation/native';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
const Section = ({title, onPress, children, style}) => {
  return (
    <View>
      <View style={[styles.section, style]}>
        <Text style={styles.sectionHeadline}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: COLORS.primary, ...FONTS.title_medium}}>
            Tất cả
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

const Categories = () => (
  <View style={styles.categoriesWrapper}>
    {data.categories.map(item => {
      return (
        <TouchableOpacity key={item.id} style={styles.categoriesItem}>
          <Image source={item.icon} style={styles.categoryImage} />
          <Text
            style={{
              color: COLORS.blackText,
              ...FONTS.label_large,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const RecommendedSection = ({recommends, navigation}) => {
  return (
    <Section
      title={'Gợi ý'}
      onPress={() => console.log('show all recommended')}>
      <FlatList
        data={recommends}
        keyExtractor={item => `${item.id}`}
        horizontal
        decelerationRate="fast"
        snapToInterval={SIZES.width * 0.85 + 18}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              onPress={() => navigation.navigate('DetailFood', item)}
              imageStyle={styles.recommendImage}
              item={item}
              containerStyle={[
                styles.recommendContainer,
                {
                  marginLeft: index === 0 ? SIZES.padding : 18,
                  marginRight:
                    index === recommends.length - 1 ? SIZES.padding : 0,
                },
              ]}
            />
          );
        }}
      />
    </Section>
  );
};

const PopularSection = ({popular, navigation}) => {
  return (
    <Section
      style={{marginTop: 0}}
      onPress={() => console.log('Popular section')}
      title={'Phổ biến'}>
      <FlatList
        data={popular}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <VerticalFoodCard
              onPress={() => navigation.navigate('DetailFood', item)}
              item={item}
              containerStyle={[
                styles.popularContainer,
                {
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                },
              ]}
              imageStyle={styles.popularImage}
            />
          );
        }}
      />
    </Section>
  );
};

const DeliveryTo = ({navigation}) => {
  return (
    <View
      style={{
        marginHorizontal: SIZES.padding,
      }}>
      <Text
        style={{
          color: COLORS.primary,
          ...FONTS.title_medium,
        }}>
        GIAO ĐẾN
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('EnterAddress')}
        style={styles.deliveryTo}>
        <Text style={styles.deliveryAddress}>{data?.myProfile?.address}</Text>
        <Image source={icons.down_arrow} style={{width: 24, height: 24}} />
      </TouchableOpacity>
    </View>
  );
};

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
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => console.log(item.id)}
          style={{
            flex: 1,
          }}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.carouselImage}
          />
        </TouchableOpacity>
      )}
    />
  );
};
const Home = () => {
  const _enerateArray = useCallback(n => {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = {
        id: uuidv4(),
        name: 'Hamburger',
        description: 'Hamburger thịt gà',
        categories: [1, 2],
        // // favorite include id user
        // favorite: [],
        price: 15.99,
        calories: 78,
        image:
          'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png',
      };
    }
    return arr;
  }, []);
  const dispatch = useDispatch();
  const {isLoading, foodList, error} = useSelector(state => state.food);
  const [recommends, setRecommends] = useState(_enerateArray(10));
  const [popular, setPopular] = useState(_enerateArray(20));
  const navigation = useNavigation();
  useEffect(() => {
    dispatch({type: 'food/fetchFoodRequested'});
  }, [dispatch]);

  const handleLoadMore = () => {
    // console.log("handleLoadMore");
    dispatch({type: 'food/fetchFoodRequested'});
  };

  const renderFooter = () => {
    return (
      <ActivityIndicator
        style={styles.indicator}
        size="small"
        color={COLORS.primary}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <FocusAwareStatusBar />
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={styles.headerWrapper}>
          <Header
            containerStyle={styles.headerContainer}
            rightComponent={
              <BadgeButton
                onPress={() => navigation.navigate('Notification')}
                icon={icons.notification}
                iconStyle={styles.icon}
                badgeStyle={styles.badgeNotification}
              />
            }
            leftComponent={
              <View>
                <Image source={images.logo_02} style={styles.logo} />
              </View>
            }
          />
        </View>
        {/* delivery to */}
        <DeliveryTo navigation={navigation} />
        {/* carousel */}
        <MyCarousel />
        {/* category */}
        <Categories />
        {/* list popular */}
        <PopularSection navigation={navigation} popular={popular} />
        {/* list recommended */}
        <RecommendedSection navigation={navigation} recommends={recommends} />
        {/* list nearby you*/}
        <Text style={styles.headlineNearYou}>Gần bạn</Text>
        <FlatList
          data={foodList}
          style={{flex: 1}}
          contentContainerStyle={{flex: 1}}
          scrollEnabled={false}
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
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  popularContainer: {padding: SIZES.radius, width: 210},
  deliveryAddress: {
    ...FONTS.title_medium,
    color: COLORS.blackText,
    fontWeight: 'bold',
  },
  carouselImage: {
    width: null,
    height: null,
    flex: 1,
  },
  popularImage: {
    width: 150,
    height: 150,
    marginTop: SIZES.radius,
  },
  recommendImage: {
    marginTop: 35,
    height: 150,
    width: 150,
  },
  recommendContainer: {
    height: 180,
    width: SIZES.width * 0.85,
    paddingRight: SIZES.radius,
    alignItems: 'center',
  },
  headlineNearYou: {
    marginTop: 30,
    marginHorizontal: SIZES.padding,
    marginBottom: 20,
    fontWeight: 'bold',
    ...FONTS.headline_small,
    color: COLORS.blackText,
  },
  headerContainer: {
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  indicator: {
    alignSelf: 'flex-start',
    marginVertical: SIZES.radius,
    marginHorizontal: SIZES.padding,
  },
  categoryImage: {width: 48, height: 48, resizeMode: 'contain'},
  sectionHeadline: {
    ...FONTS.headline_small,
    fontWeight: 'bold',
    color: COLORS.blackText,
  },
  categoriesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    marginBottom: SIZES.padding,
    rowGap: 30,
    columnGap: 5,
  },

  badgeNotification: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 0,
    right: 0,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerWrapper: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
  profile: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  deliveryTo: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    alignItems: 'center',
  },
  iconBottomTab: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
    width: 120,
  },
  categoriesItem: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  section: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginVertical: SIZES.radius,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: 12,
    borderRadius: SIZES.padding,
    alignItems: 'center',
  },
});
