import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import commonStyles from '@src/assets/styles/commonStyles'
import AnySvg, { TrashIcon } from '@src/assets/svg'
import { wp } from '@src/constants/styleGuide'

interface platformListItemProps {
    item: any;
}

const PlatformListItem = (props: platformListItemProps) => {

    const { item } = props
    return (
        <View style={styles.main}>
            <View style={styles.context}>

                <View style={styles.txtContainer}>
                    <Text style={styles.txtType1}>{item.name}</Text>
                    <Text style={styles.txtType2}>Amount</Text>
                </View>

                <View style={styles.txtContainer}>
                    <Text style={styles.txtType2}>{item.date}</Text>
                    <Text style={styles.txtType1}>{`$ ${item.amount}`}</Text>
                </View>

            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity>
                    <AnySvg
                        name={TrashIcon}
                        height={20}
                        width={20}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PlatformListItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        borderWidth: 1,
        ...commonStyles.flexRowSpaceBetween,
        paddingVertical: 9,
        borderRadius: 10,
        marginTop: 15,
        marginBottom:2
    },
    context: {
        flex: 1,
        paddingLeft: '5%'
    },
    btnContainer: {
        paddingHorizontal: wp(4.5),
        ...commonStyles.center_
    },
    txtType1: {
        ...commonStyles.primaryTxt700
    },
    txtType2: {
        ...commonStyles.primaryTxt400
    },
    txtContainer: {
        ...commonStyles.flexRowSpaceBetween,
        marginVertical: 2
    }
})