import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { Shadow } from 'react-native-shadow-2';
import { ButtonIcon, ButtonText } from '../../components';

const RADIUS = 26;

const Favourite = () => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['75%', '95%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss()
  }, []);

  // renders
  const SheetHandle = () => {
    return (
      <Shadow
        sides={{ start: false, end: false, bottom: false }}
        corners={{ bottomStart: false, bottomEnd: false }}
        distance={5}
        radius={RADIUS}
        viewStyle={styles.shadowContainer}>
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>
      </Shadow>
    )
  }

  const renderBottomSheet = () => {
    const Chip = ({ label }) => (
      <ButtonText
        label={label}
        labelStyle={{
          color: COLORS.white,
          ...FONTS.subtitle1
        }}
        containerStyle={{
          height: 40,
          marginRight: SIZES.spacing,
          marginBottom: SIZES.spacing,
          borderRadius: SIZES.padding,
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.padding,
          alignSelf: 'flex-start'
        }}
      />
    )
    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleComponent={SheetHandle}
      >
        <View style={styles.contentContainer}>
          {/* header */}
          <View
            style={{
              marginBottom: SIZES.padding,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: SIZES.radius
            }}>
            <Text
              style={{
                ...FONTS.h5,
                fontWeight: 'bold',
                color: COLORS.black,
                flex: 1
              }}
            >Filter</Text>
            <ButtonIcon
              icon={icons.close}
              iconStyle={styles.icon}
              containerStyle={{
                padding: SIZES.base,
                borderRadius: 24,
              }}
              onPress={handleDismissModalPress}
            />
          </View>
          {/* category */}
          <View>
            <Text
              style={{
                ...FONTS.subtitle1,
                color: COLORS.black,
                marginBottom: SIZES.radius
              }}
            >Category</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <Chip
                label={"All"}
              />
              <Chip
                label={"Hamburger"}
              />
              <Chip
                label={"Break"}
              />
              <Chip
                label={"Break"}
              />
              <Chip
                label={"Break"}
              />
            </View>
          </View>
          {/* price */}
          <Text
             style={{
              marginTop: SIZES.padding,
              ...FONTS.subtitle1,
              color: COLORS.black,
            }}
          >Price</Text>
        </View>
      </BottomSheetModal>
    )
  }
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            height: 50, width: 100, backgroundColor: COLORS.red
          }}
          onPress={handlePresentModalPress}
        >
          <Text style={{ fontSize: 20 }}>Open</Text>
        </TouchableOpacity>
        {renderBottomSheet()}
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
    resizeMode: 'cover'
  },

  // sheet
  shadowContainer: {
    width: '100%',
  },
  handleContainer: {
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
  },
  handle: {
    width: 30,
    height: 4,
    backgroundColor: COLORS.blackText,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.white
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding
  },
});

export default Favourite;