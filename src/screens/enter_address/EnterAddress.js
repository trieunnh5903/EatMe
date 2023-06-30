import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components'
import { COLORS, SIZES, icons } from '../../constants'
const EnterAddress = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header
                title={"Enter Address"}
                containerStyle={{
                    paddingHorizontal: SIZES.padding
                }}
                leftComponent={(
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.arrow_back}
                            style={styles.icon} />
                    </TouchableOpacity>
                )}
            ></Header>
        </SafeAreaView>
    )
}

export default EnterAddress

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: COLORS.black
    },
})