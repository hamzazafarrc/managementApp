import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import React, { Children } from 'react'
import commonStyles from '@styles/commonStyles';
import { COLORS, wp, FONTS } from '@constants/styleGuide';
import ModalBlurTemplate from './modalBlurTemplate';
import { cardGradient } from '@src/assets/images';
import PrimaryInput from '../primaryInput';
import PrimaryButton from '../primaryButton';

interface addPlatformModalProps {
    isVisible: boolean;
    onclose: any;
    title: string;
}

const AddPlatformModal = (props: addPlatformModalProps) => {
    return (
        <ModalBlurTemplate
            isVisible={props.isVisible}
            onclose={() => props.onclose()}
            title={props.title}
        >
            <View style={styles.main}>

                <View style={styles.inputContainer}>
                    <PrimaryInput
                        containerStyles={styles.fullWidthInput}
                        inputStyles={styles.inputStyles}
                        title='Platform'
                    />

                </View>

                <View style={styles.inputContainer}>
                    <PrimaryInput
                        containerStyles={styles.halfwidthInput}
                        inputStyles={styles.inputStyles}
                        title='Amount'
                    />
                    <PrimaryInput
                        containerStyles={styles.halfwidthInput}
                        inputStyles={styles.inputStyles}
                        title='Sub. Date'
                    />
                </View>



                <View style={[styles.inputContainer, { marginTop: 8 }]}>
                    <PrimaryButton
                        style={[styles.halfwidthInput, styles.whiteBtn]}
                        textStyle={{ color: COLORS.PRIMARY_1, fontSize: 12 }}
                        title='Cancel'
                        onPress={() => props.onclose()}
                    />
                    <PrimaryButton
                        style={[styles.halfwidthInput, styles.greenBtn]}
                        textStyle={{ fontSize: 12 }}
                        title='Create'
                    />

                </View>

            </View>
        </ModalBlurTemplate>
    )
}

export default AddPlatformModal

const styles = StyleSheet.create({
    main: {
        paddingVertical: 22,
        backgroundColor: COLORS.BACKGROUND
    },
    cardImage: {
        width: wp(82),
        height: wp(45),
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingVertical: '5%',
        paddingHorizontal: '7%'
    },
    txtRow: {
        ...commonStyles.flexRowSpaceBetween
    },
    txtBold: {
        ...commonStyles.primaryTxt600,
        fontSize: 15.5,
        letterSpacing: -0.2
    },
    textLight: {
        ...commonStyles.primaryTxt400,
        fontSize: 15.5,
        letterSpacing: -0.2
    },
    halfwidthInput: {
        width: '48%',
    },
    inputContainer: {
        ...commonStyles.flexRowSpaceBetween,
        width: wp(82),
        alignSelf: 'center',
        marginTop: 23,
        borderRadius: 10
    },
    inputStyles: {
        height: 41
    },
    fullWidthInput: {
        width: '100%',
        marginTop: 0
    },
    whiteBtn: {
        height: 35,
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY_1
    },
    greenBtn: {
        height: 35
    }
})