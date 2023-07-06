import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useCallback, useState, memo } from 'react'
import { ButtonText, Header, QuantityInput } from '../../components'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import { SharedElement } from 'react-navigation-shared-element'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../../redux/slice/cartSlice'
import Toast from 'react-native-simple-toast';
import data from '../../data'
import { addToFavorite, removeFromFavorite } from '../../redux/slice/userSlice'

const DetailFood = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.cartList);
  const favorite = useSelector(state => state.user.favorite);
  const item = route.params;
  const isFavorite = favorite.some(product => product.id === item.id);
  const [quantity, setQuantity] = useState(1);
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(item));
    } else {
      dispatch(addToFavorite(item));
    }
  };

  const onAddToCartPress = (item) => {
    const existingItem = cartList.find(itemCart => itemCart.id == item.id);
    if (existingItem) {
      Toast.show('The product already exists in the cart.', Toast.LONG);
      return;
    }
    dispatch(addItem({ ...item, quantity }));
    navigation.goBack();
    Toast.show('Add to cart successfully');
  }

  const TextMore = memo(() => {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = useCallback(() => { //To toggle the show text or hide it
      setTextShown(!textShown);
    }, [])

    const onTextLayout = useCallback(e => {
      setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    }, []);
    return (
      <View style={{ marginTop: SIZES.padding, marginBottom: SIZES.radius }}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : 4}
          style={{ color: COLORS.blackText, ...FONTS.bodyText1 }}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Text>
        {
          lengthMore ? <Text
            onPress={toggleNumberOfLines}
            style={{ color: COLORS.primary, ...FONTS.bodyText1, fontWeight: 'bold' }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
            : null
        }
      </View>
    )
  }, [item])

  const ImageFood = () => (
    <View style={{ paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          style={styles.imageFood}
          source={{ uri: item.image }} />
      </SharedElement>

    </View>
  )

  const InformationFood = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding
      }}>
      {/* input quantity */}
      <QuantityInput
        onAddPress={() => setQuantity(quantity => quantity + 1)}
        onRemovePress={() => {
          if (quantity > 0) setQuantity(quantity - 1)
        }}
        labelStyle={{
          color: COLORS.white,
          marginHorizontal: 5,
          ...FONTS.h6,
          fontWeight: 'bold'
        }}
        iconContainerStyle={{
          backgroundColor: COLORS.primary,
          borderRadius: 100,
          marginHorizontal: SIZES.radius,
        }}
        quantity={quantity}
        iconStyle={{
          width: 36,
          height: 36,
          tintColor: COLORS.white,
        }}
        containerStyle={{
          backgroundColor: COLORS.primary,
          borderRadius: 3 * SIZES.radius,
          height: 50,
          alignSelf: 'center',
          position: 'absolute',
          top: -25
        }}
      />
      {/* title */}
      <View
        style={{
          marginTop: SIZES.padding + SIZES.padding / 2,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <View style={{ flex: 1 }}>
          <View>
            <Text
              style={styles.textBody}>Mcdonalds</Text>
          </View>
          <Text
            style={styles.textTitle}>{item.name}</Text>
        </View>
        <Text
          style={[styles.textTitle, {
            paddingHorizontal: SIZES.padding,
          }]}>${item.price}</Text>
      </View>
      {/* desc */}
      <TextMore />
      {/* delivery */}
      <View
        style={{ flexDirection: 'row' }}>
        <Image
          source={icons.clock}
          style={styles.icon} />
        <Text
          style={{
            marginHorizontal: SIZES.radius,
            color: COLORS.black,
            ...FONTS.bodyText1
          }}
        >Delivery Time:
          <Text
            style={{ color: COLORS.gray }}
          > 30 Mins</Text></Text>

      </View>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        <Header
          containerStyle={{
            paddingHorizontal: SIZES.padding,
          }}
          leftComponent={(
            <TouchableOpacity
              style={styles.buttonNavWrapper}
              onPress={() => navigation.goBack()}>
              <Image
                source={icons.arrow_back}
                style={styles.icon} />
            </TouchableOpacity>
          )}
          rightComponent={(
            <TouchableOpacity
              onPress={() => handleToggleFavorite()}
              style={[styles.buttonNavWrapper, { alignItems: 'center' }]}
            >
              <Image
                source={isFavorite ? icons.favourite_fill : icons.favourite}
                style={[styles.icon, { tintColor: isFavorite ? COLORS.primary : COLORS.black }]} />
            </TouchableOpacity>
          )}
        />
        {/* image */}
        <ImageFood />
        {/* content */}
        <InformationFood />
        {/* footer */}
        <ButtonText
          onPress={() => onAddToCartPress(item)}
          label={"Add to Cart"}
          containerStyle={styles.buttonFooter}
          labelStyle={styles.labelFooter}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailFood

const styles = StyleSheet.create({
  buttonNavWrapper: {
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },

  labelFooter: {
    color: COLORS.white,
    ...FONTS.bodyText1,
    fontWeight: 'bold'
  },

  buttonFooter: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.radius,
    marginHorizontal: SIZES.padding,
    height: 50,
    flex: 1,
    borderRadius: SIZES.padding,
    backgroundColor: COLORS.primary
  },

  textTitle: {
    color: COLORS.blackText,
    ...FONTS.h5,
    fontWeight: 'bold'
  },
  textBody: {
    color: COLORS.blackText,
    ...FONTS.bodyText1
  },

  imageFood: {
    height: SIZES.height * 0.4,
    width: SIZES.width - 2 * SIZES.padding,
    resizeMode: 'cover'
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
})