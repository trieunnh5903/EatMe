/* eslint-disable react-hooks/rules-of-hooks */
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {COLORS, SIZES, images, FONTS} from '../../config';
import data from '../../data';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {ButtonText, FocusAwareStatusBar} from '../../components';

const renderItem = ({item, index}) => {
  return (
    <View style={styles.itemWrapper}>
      <ImageBackground
        resizeMode="cover"
        style={{flex: 1}}
        source={item.backgroundImage}>
        <View style={[styles.bannerImageWrapper]}>
          <Image
            resizeMode="contain"
            style={[styles.bannerImage]}
            source={item.bannerImage}
          />
        </View>
      </ImageBackground>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

const OnBoarding = ({navigation}) => {
  const scrollX = useRef(useSharedValue(0)).current;
  const flastListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const firstVisibleItem = viewableItems[0];
      setCurrentIndex(firstVisibleItem.index);
    }
  });

  const onScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       {data.onboarding_screens.map((item, index) => {
  //         const reanimatedStyle = useAnimatedStyle(() => {
  //           const inputRange = [
  //             (index - 1) * SIZES.width,
  //             index * SIZES.width,
  //             (index + 1) * SIZES.width,
  //           ];
  //           const backgroundColor = interpolateColor(
  //             scrollX.value,
  //             inputRange,
  //             [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
  //           );
  //           const width = interpolate(
  //             scrollX.value,
  //             inputRange,
  //             [10, 30, 10],
  //             Extrapolate.CLAMP,
  //           );
  //           return {
  //             backgroundColor,
  //             width,
  //           };
  //         });
  //         return (
  //           <Animated.View
  //             key={`${item.id}`}
  //             style={[
  //               {
  //                 borderRadius: 10,
  //                 marginHorizontal: SIZES.base,
  //                 width: 10,
  //                 height: 10,
  //                 backgroundColor: COLORS.primary,
  //               },
  //               reanimatedStyle,
  //             ]}></Animated.View>
  //         );
  //       })}
  //     </View>
  //   );
  // };

  const onNextPress = useCallback(() => {
    let nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (flastListRef.current) {
      flastListRef.current.scrollToIndex({index: nextIndex, animated: true});
    }
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar />
      {/* logo */}
      <View style={styles.headerLogo}>
        <Image
          style={styles.logo}
          source={images.logo_02}
          resizeMode="contain"
        />
      </View>
      {/* content */}
      <Animated.FlatList
        ref={flastListRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
        pagingEnabled
        horizontal
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        data={data.onboarding_screens}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
      {/* dots */}
      <View
        style={{
          marginTop: SIZES.spacing,
        }}>
        <View style={styles.dotContainer}>
          {data.onboarding_screens.map((item, index) => {
            // <Dot index={index} item={item} />;
            const reanimatedStyle = useAnimatedStyle(() => {
              const inputRange = [
                (index - 1) * SIZES.width,
                index * SIZES.width,
                (index + 1) * SIZES.width,
              ];
              const backgroundColor = interpolateColor(
                scrollX.value,
                inputRange,
                [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
              );
              const width = interpolate(
                scrollX.value,
                inputRange,
                [10, 30, 10],
                Extrapolate.CLAMP,
              );
              return {
                backgroundColor,
                width,
              };
            });
            return (
              <Animated.View
                key={`${item.id}`}
                style={[styles.dotItem, reanimatedStyle]}
              />
            );
          })}
        </View>
      </View>
      {/* button */}
      <View style={styles.btnSkipContainer}>
        <ButtonText
          onPress={() => navigation.navigate('Login')}
          label={'Bỏ qua'}
          labelStyle={[FONTS.title_medium, {color: COLORS.gray}]}
        />
        <ButtonText
          onPress={() => {
            if (currentIndex < 2) {
              onNextPress();
            } else {
              navigation.navigate('Login');
            }
          }}
          label={'Tiếp tục'}
          labelStyle={[FONTS.title_medium, {color: COLORS.white}]}
          containerStyle={styles.btnNextContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  dotContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnNextContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    width: SIZES.width * 0.5,
    borderRadius: SIZES.radius,
  },

  dotItem: {
    borderRadius: 10,
    marginHorizontal: SIZES.base,
    width: 10,
    height: 10,
    backgroundColor: COLORS.primary,
  },

  btnSkipContainer: {
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  itemWrapper: {flex: 1, width: SIZES.width},
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SIZES.padding,
    padding: SIZES.base,
  },
  itemDescription: {
    color: COLORS.gray,
    textAlign: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.radius,
    ...FONTS.body_large,
  },
  itemTitle: {
    color: COLORS.blackText,
    textAlign: 'center',
    ...FONTS.headline_medium,
  },
  bannerImage: {
    width: SIZES.width * 0.7,
    height: SIZES.width * 0.7,
    marginBottom: -10,
  },
  bannerImageWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: COLORS.red
  },

  logo: {
    width: SIZES.width * 0.5,
    height: 100,
  },

  headerLogo: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
