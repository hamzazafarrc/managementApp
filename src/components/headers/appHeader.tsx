import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS, FONTS } from '@constants/styleGuide'
import FastImage from 'react-native-fast-image'
import { batman } from '@src/assets/images'
import { getGreetings } from '@utils/myUtils'

interface appHeaderProps {
    title?: string
}

const AppHeader = (props: appHeaderProps) => {
    return (
        <View style={styles.main}>
            <View style={styles.profileContainer}>
                <FastImage
                    source={batman}
                    style={styles.avatar}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.greeting}>{getGreetings()}</Text>
                    <Text style={styles.title}>Hamza Zafar</Text>
                </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
            >
                <Feather name='log-out' color={COLORS.PRIMARY_1} size={26} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(AppHeader)

const styles = StyleSheet.create({
    main: {
        width: '100%',
        borderBottomWidth: 0.8,
        borderColor: COLORS.PRIMARY_1,
        paddingHorizontal: '7%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25
    },
    greeting: {
        color: COLORS.PRIMARY_1,
        fontFamily: FONTS.PRIMARY_400,
        fontSize: 12
    },
    title: {
        color: COLORS.PRIMARY_1,
        fontFamily: FONTS.PRIMARY_700,
        fontSize: 14,
        marginTop: 4
    },
    titleContainer: {
        marginLeft: 10
    }

})