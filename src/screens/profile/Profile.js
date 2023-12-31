import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import data from '../../data';
import {COLORS, FONTS, SIZES, icons} from '../../config';

const OptionItem = ({icon, label}) => (
  <TouchableOpacity style={styles.optionItemWrapper}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.itemLabel}>{label}</Text>
    <Image source={icons.chevron_right} style={styles.icon} />
  </TouchableOpacity>
);

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => setIsDarkMode(!isDarkMode)}
          style={styles.btnDarkMode}>
          <Image
            source={isDarkMode ? icons.light_mode : icons.dark_mode}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* profile */}
        <View style={styles.profileWrapper}>
          <Image
            style={styles.profile}
            source={{uri: data.myProfile.profile_image}}
          />
          <View>
            <Text style={styles.profileName}>{data.myProfile.name}</Text>
            <Text
              style={{
                color: COLORS.blackText,
                ...FONTS.label_large,
              }}>
              Thành viên
            </Text>
          </View>
        </View>
        {/* user options */}
        {/* system options */}
        <View style={styles.optionWrapper}>
          <OptionItem icon={icons.person} label={'Chỉnh sửa thông tin'} />
          <View style={{height: SIZES.radius}} />
          <OptionItem icon={icons.wallet} label={'Phương thức thanh toán'} />
          <View style={{height: SIZES.radius}} />
          <OptionItem icon={icons.address} label={'Địa chỉ'} />
        </View>
        <View style={styles.optionWrapper}>
          <OptionItem icon={icons.policy} label={'Điều khoản và Chính sách'} />
          <View style={{height: SIZES.radius}} />
          <OptionItem icon={icons.support} label={'Hỗ trợ'} />
          <View style={{height: SIZES.radius}} />
          <OptionItem icon={icons.notification_w400} label={'Thông báo'} />
        </View>
        <View style={styles.optionWrapper}>
          <OptionItem icon={icons.logout} label={'Đăng xuất'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  itemLabel: {
    marginLeft: SIZES.radius,
    color: COLORS.blackText,
    ...FONTS.label_large,
    flex: 1,
  },

  btnDarkMode: {
    paddingTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    alignSelf: 'flex-end',
  },
  optionWrapper: {
    padding: 20,
    backgroundColor: COLORS.lightGray2,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
  },

  optionItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 32,
    height: 32,
    tintColor: COLORS.black,
  },

  profileName: {
    color: COLORS.blackText,
    ...FONTS.title_large,
    fontWeight: 'bold',
  },
  profileWrapper: {
    flexDirection: 'row',
    // justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },

  profile: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
