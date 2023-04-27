import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "@constants/styleGuide";
import commonStyles from "@styles/commonStyles";

const styles = StyleSheet.create({
    main: {
        ...commonStyles.main,
    },
    headerContainer: {
        width: '100%',
        height: hp(30.5),
        backgroundColor: COLORS.PRIMARY_1,
        justifyContent: 'center',
        padding: '5%'
    },
    title: {
        color: COLORS.SECONDARY_1,
        fontFamily: FONTS.PRIMARY_700,
        fontSize: hp(4),
        lineHeight: hp(4.1)
    },
    subtitle: {
        color: COLORS.SECONDARY_1,
        fontFamily: FONTS.PRIMARY_400,
        fontSize: hp(1.8),
        lineHeight: hp(2.5),
        borderBottomWidth: 2,
        paddingBottom: 5,
        borderColor: COLORS.SECONDARY_1,
        alignSelf: 'flex-start'
    },
    subtle: {
        borderBottomWidth: 0,
        borderColor: COLORS.PRIMARY_1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    forgotBtn: {
        alignSelf: 'flex-end',
        marginRight: wp(7),
        marginVertical: 6
    },
    forgotBtnTxt: {
        color: COLORS.PRIMARY_1,
        fontFamily: FONTS.PRIMARY_400,
        fontSize: 12.5,
    },
    createAccountContainer: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: hp(4),
        alignSelf: 'center'
    },
    registerBtn: {
        fontFamily: FONTS.PRIMARY_700,

    }
})

export default styles