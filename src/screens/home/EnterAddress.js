import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BadgeButton, Header} from '../../components';
import {COLORS, SIZES, icons} from '../../config';
const EnterAddress = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header
        title={'Enter Address'}
        containerStyle={{
          paddingHorizontal: SIZES.padding,
        }}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.arrow_back} style={styles.icon} />
          </TouchableOpacity>
        }></Header>
      <BadgeButton
        containerStyle={{
          width: 24,
          height: 24,
        }}
        icon={icons.notification}
        iconStyle={{
          width: 24,
          height: 24,
        }}
        badgeStyle={{
          position: 'absolute',
          width: 10,
          height: 10,
          borderRadius: 5,
          top: 0,
          right: 0,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </SafeAreaView>
  );
};

export default EnterAddress;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
});
