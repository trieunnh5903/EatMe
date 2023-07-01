import {
  StyleSheet, Text, View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch
} from 'react-native'
import React, { useState } from 'react'
import data from '../../data'
import { COLORS, FONTS, SIZES, icons } from '../../constants'

const OptionItem = ({ icon, label }) => (
  <TouchableOpacity
    style={styles.optionItemWrapper}
  >
    <Image
      source={icon}
      style={styles.icon} />
    <Text
      style={{
        marginLeft: SIZES.radius,
        color: COLORS.blackText,
        ...FONTS.bodyText1,
        flex: 1
      }}
    >{label}
    </Text>
    <Image
      source={icons.chevron_right}
      style={styles.icon} />
  </TouchableOpacity>
)

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => setIsDarkMode(!isDarkMode)}
          style={{
            paddingTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            alignSelf: 'flex-end'
          }}>
          <Image
            source={isDarkMode ? icons.light_mode : icons.dark_mode}
            style={styles.icon} />
        </TouchableOpacity>

        {/* profile */}
        <View
          style={styles.profileWrapper}
        >
          <Image
            style={styles.profile}
            source={{ uri: data.myProfile.profile_image }}>
          </Image>
          <View>
            <Text
              style={{
                color: COLORS.blackText,
                ...FONTS.h6,
                fontWeight: 'bold'
              }}
            >{data.myProfile.name}</Text>
            <Text
              style={{
                color: COLORS.blackText,
                ...FONTS.subtitle2,
                fontWeight: 'bold'
              }}
            >Thành viên</Text>
          </View>
        </View>
        {/* user options */}
        {/* system options */}
        <View
          style={styles.optionWrapper}>
          <OptionItem icon={icons.person} label={"Personal Info"} />
          <View style={{ height: SIZES.radius }} />
          <OptionItem icon={icons.wallet} label={"Payment Method"} />
          <View style={{ height: SIZES.radius }} />
          <OptionItem icon={icons.address} label={"Addresses"} />
        </View>
        <View style={styles.optionWrapper}>
          <OptionItem icon={icons.policy} label={"Terms and Policy"} />
          <View style={{ height: SIZES.radius }} />
          <OptionItem icon={icons.support} label={"Support"} />
          <View style={{ height: SIZES.radius }} />
          <OptionItem icon={icons.notification_w400} label={"Notification"} />
        </View>
        <View style={styles.optionWrapper}>
          <OptionItem icon={icons.logout} label={"Logout"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({

  optionWrapper: {
    padding: 20,
    backgroundColor: COLORS.lightGray2,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius
  },

  optionItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 32,
    height: 32,
    tintColor: COLORS.black
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
    borderRadius: 80
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
})