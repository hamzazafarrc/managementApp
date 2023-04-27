import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, { Children } from 'react'
import { BlurView, VibrancyView } from '@react-native-community/blur';
import commonStyles from '@styles/commonStyles';
import { COLORS, wp ,FONTS} from '@constants/styleGuide';

interface modalBlurTemplateProps {
    isVisible: boolean;
    onclose: any;
    children : React.ReactNode;
    title: string;
}

const ModalBlurTemplate = (props: modalBlurTemplateProps) => {
    const {children} = props
    return (
        <Modal
            visible={props.isVisible}
            animationType="fade"
            transparent
            onRequestClose={() => props.onclose()}>
            <View style={styles.container}>
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={3}
                    reducedTransparencyFallbackColor="white"
                />

                <View style={[styles.box,]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>

                    <View>
                        {children}
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default ModalBlurTemplate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...commonStyles.center_,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    box: {
        width: wp(90),
        elevation: 2,
        backgroundColor: COLORS.BACKGROUND,
        borderRadius: 10,
        overflow: 'hidden'
    },
    titleContainer: {
        backgroundColor: COLORS.PRIMARY_1
    },
    title :{
        fontFamily: FONTS.PRIMARY_600,
        color: COLORS.SECONDARY_1,
        paddingHorizontal:'5%',
        paddingVertical:12,
        fontSize:15
    }

})