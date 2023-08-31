import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import { ButtonIcon } from '../../components'
import { COLORS, FONTS, SIZES, icons } from '../../config'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import Chip from '../../components/Chip'
const RADIUS = 26;
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

const SortBottomSheet = ({ bottomSheetModalRef }) => {
    const snapPoints = useMemo(() => ['50%'], []);
    const [selectedCategoryChip, setSelectedCategoryChip] = useState(null);
    const [selectedPriceChip, setSelectedPriceChip] = useState(null);
    const handleCategoryChipPress = (chip) => {
        setSelectedCategoryChip(chip);
    };
    const handlePriceChipPress = (chip) => {
        setSelectedPriceChip(chip);
    };
    const handleDismissModalPress = useCallback(() => {
        bottomSheetModalRef?.current?.dismiss()
    }, []);
    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            handleComponent={SheetHandle}
        >
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding
            }}>
                {/* header */}
                <ButtonIcon
                    icon={icons.close}
                    iconStyle={styles.icon}
                    containerStyle={{
                        padding: SIZES.base,
                        borderRadius: 24,
                        alignSelf: 'flex-end'
                    }}
                    onPress={handleDismissModalPress}
                />
                {/* category */}
                <View>
                    <Text
                        style={{
                            ...FONTS.title_large,
                            color: COLORS.black,
                            marginBottom: SIZES.radius
                        }}
                    >Category</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 10
                        }}>
                        <Chip
                            label="Nearby You"
                            onPress={() => handleCategoryChipPress('Chip 1')}
                            selected={selectedCategoryChip === 'Chip 1'}
                        />
                        <Chip
                            label="Popular"
                            onPress={() => handleCategoryChipPress('Chip 2')}
                            selected={selectedCategoryChip === 'Chip 2'}
                        />
                        <Chip
                            label="High Recommend"
                            onPress={() => handleCategoryChipPress('Chip 3')}
                            selected={selectedCategoryChip === 'Chip 3'}
                        />
                    </View>
                </View>
                {/* price */}
                <View>
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            ...FONTS.subtitle1,
                            color: COLORS.black,
                        }}
                    >Price</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 10
                        }}>
                        <Chip
                            label="High to low"
                            onPress={() => handlePriceChipPress('Chip 1')}
                            selected={selectedPriceChip === 'Chip 1'}
                        />
                        <Chip
                            label="Low to high"
                            onPress={() => handlePriceChipPress('Chip 2')}
                            selected={selectedPriceChip === 'Chip 2'}
                        />
                    </View>
                </View>
            </View>
        </BottomSheetModal>
    )
}

export default SortBottomSheet

const styles = StyleSheet.create({
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
    icon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
})