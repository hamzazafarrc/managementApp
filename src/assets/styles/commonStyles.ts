import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@constants/styleGuide";

const commonStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND
    },
    center_: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    primaryTxt400: {
        color: COLORS.PRIMARY_1,
        fontFamily: FONTS.PRIMARY_400
    },
    primaryTxt600: {
        color: COLORS.PRIMARY_1,
        fontFamily: FONTS.PRIMARY_600
    },
    primaryTxt500: {
        color: COLORS.PRIMARY_1,
        fontFamily: FONTS.PRIMARY_500
    },
    primaryTxt700: {
        color: COLORS.PRIMARY_1,
        fontFamily: FONTS.PRIMARY_700
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default commonStyles