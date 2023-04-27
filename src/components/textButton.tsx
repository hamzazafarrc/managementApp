import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React from 'react'
import { COLORS, wp, hp, FONTS } from '@constants/styleGuide';
import  commonStyles  from '@styles/commonStyles'


interface textButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
}

const TextButton = (props: textButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.main, props.style]}
            activeOpacity={0.8}
            onPress={() => props.onPress()}
            disabled={props.isLoading}
        >
            {
                props.isLoading ?
                    <ActivityIndicator color={COLORS.WHITE} />
                    :
                    <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

TextButton.defaultProps = {
    title: 'title',
    onPress: () => { },
    isLoading: false
}

export default React.memo(TextButton)

const styles = StyleSheet.create({
    main: {
 
    },
    title: {
        color: COLORS.PRIMARY_1,
        fontSize: 15,
        fontFamily: FONTS.PRIMARY_700
    }
})