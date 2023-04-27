import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

enum FONTS {
    // MONTSERRAT == AVENIR NEXT
    PRIMARY_100 = 'Montserrat-Thin',
    PRIMARY_300 = 'Montserrat-Light',
    PRIMARY_400 = 'Montserrat-Regular',
    PRIMARY_500 = 'Montserrat-Medium',
    PRIMARY_600 = 'Montserrat-SemiBold',
    PRIMARY_700 = 'Montserrat-Bold',
    PRIMARY_900 = 'Montserrat-Black',

    // HELVELTICA NEUE
    SECONDARY_100 = 'HelveticaNeue-Thin',
    SECONDARY_300 = 'HelveticaNeue-Light',
    SECONDARY_400 = 'HelveticaNeue-Regular',
    SECONDARY_500 = 'HelveticaNeue-Medium',
    SECONDARY_700 = 'HelveticaNeue-Bold',
}

enum COLORS {
    // EVERGLADE
    PRIMARY_1 = '#214E2C',
    PRIMARY_2 = '#4D7156',
    PRIMARY_3 = '#7A9580',
    PRIMARY_4 = '#1A3E23',
    PRIMARY_5 = '#142F1A',

    // MARIGOLD YELLOW
    SECONDARY_1 = '#FBF17B',
    SECONDARY_2 = '#FCF495',
    SECONDARY_3 = '#FDF7B0',
    SECONDARY_4 = '#C9C162',
    SECONDARY_5 = '#97914A',

    // COMMEONS
    BACKGROUND = '#F5F5F5',
    WHITE = '#FFFFFF',

}

export {
    FONTS,
    COLORS,
    wp,
    hp
}


