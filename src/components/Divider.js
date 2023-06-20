import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Divider = () => {
  return (
    <View style={{
        marginVertical: SIZES.padding,
        height: 2,
        backgroundColor: COLORS.lightGray1
    }}>
     
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({})