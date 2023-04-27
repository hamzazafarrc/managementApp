import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "@constants/styleGuide";
import commonStyles from "@styles/commonStyles";

const styles = StyleSheet.create({
    main: {
        ...commonStyles.main,
    },
    layout: {
        minHeight: hp(90),
        paddingHorizontal: '6%'
    },
    myCard: {
        ...commonStyles.primaryTxt600,
        fontSize: hp(2.6),
        marginVertical: 15
    },
    radiobtnContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.PRIMARY_1,
        borderStyle: 'dashed',
        borderRadius: 8,
        paddingHorizontal: wp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    activeRadioBtn: {
        backgroundColor: COLORS.PRIMARY_3
    },
    inactveRadioBtn: {
        backgroundColor: COLORS.BACKGROUND
    },
    radioBtn: {
        width: '47%',
        height: 33,
        borderRadius: 9,
        marginVertical: 8
    },
    rabdioBtnTxt: {
        fontFamily: FONTS.PRIMARY_500,
        fontSize: 14
    },
    activeRadioBtnTxt: {
        color: COLORS.SECONDARY_1
    },
    inactveRadioBtntxt: {
        color: COLORS.PRIMARY_1
    },
    totalTxt: {
        fontFamily: FONTS.SECONDARY_300,
        color: COLORS.PRIMARY_1,
        fontSize: 14,
        marginTop: hp(2.5)
    },
    cardsheading: {
        fontSize: 28,
        marginTop: -5
    },
    cardImageContainer: {
        ...commonStyles.flexRowSpaceBetween,
        marginTop: 15

    },
    cardImage: {
        width: wp(70),
        height: wp(39),
        justifyContent: 'space-between',
        paddingRight: wp(7),
        paddingVertical: '4%'
    },
    addCardBtn: {
        borderWidth: 1,
        minWidth: wp(11),
        height: wp(28),
        borderColor: COLORS.PRIMARY_1,
        borderStyle: 'dashed',
        borderRadius: 10,
        ...commonStyles.center_
    },
    addCardTxt: {
        ...commonStyles.primaryTxt400,
        fontSize: 7.5
    },
    rowContainer: {
        ...commonStyles.flexRowSpaceBetween,
        paddingHorizontal: '6%'
    },
    cardNumber: {
        ...commonStyles.primaryTxt400,
        fontSize: 14
    },
    bankName: {
        ...commonStyles.primaryTxt600,
        fontSize: 14
    },
    viewAllContainer: {
        ...commonStyles.flexRowSpaceBetween,
        marginTop: hp(4.5)
    },
    listOfTxt: {
        ...commonStyles.primaryTxt500,
        fontSize: 15,
        letterSpacing: -0.3
    },
    addPlatformBtn :{
        alignSelf:'flex-end',
        width: 100,
        height :35,
        backgroundColor: COLORS.BACKGROUND,
        borderWidth:1,
        borderStyle:'dashed',
        borderColor: COLORS.PRIMARY_1
    },
    addPlatformBtnTxt :{
        ...commonStyles.primaryTxt400,
        fontSize:12
    }
})

export default styles