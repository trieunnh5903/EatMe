import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { Header } from '../../components'
const Search = () => {
  const navigation = useNavigation();
  const SearchInput = () => {
    return (
      <View style={styles.searchContainer}>
        {/* icon */}
        <Image source={icons.search} style={styles.icon} />
        {/* text input */}
        <TextInput
          cursorColor={COLORS.black}
          placeholder='search food'
          style={styles.searchInput}></TextInput>
        {/* filter */}
        <TouchableOpacity>
          <Image source={icons.close} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header
        containerStyle={{
          marginHorizontal: SIZES.padding,
        }}
        leftComponent={(
          <TouchableOpacity
            style={{ paddingRight: SIZES.base }}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.arrow_back}
              style={[styles.icon]} />
          </TouchableOpacity>
        )}
        rightComponent={(
          <TouchableOpacity
            style={{ paddingLeft: SIZES.base }}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.filter}
              style={styles.icon} />
          </TouchableOpacity>
        )}
        title={"Search"}
      />
      <SearchInput />
      {/* list */}
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    paddingHorizontal: 12,
    borderRadius: SIZES.padding,
    alignItems: 'center',
    marginHorizontal: SIZES.padding
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
  }
})