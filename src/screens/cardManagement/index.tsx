import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { AddCardModal, AddPlatformModal, AppHeader, Layout, PlatformListItem, TextButton } from '@src/components'
import PrimaryButton from '@src/components/primaryButton'
import { totalCards } from '@src/assets/images'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS, wp } from '@constants/styleGuide'
import AnySvg, { MasterCardIcon } from '@src/assets/svg'
import ModalBlurTemplate from '@src/components/popups/modalBlurTemplate'


const Data = [
    {
        id: 1,
        name: 'Netflix',
        date: "10/05/2020",
        amount: 10
    },
    {
        id: 2,
        name: 'Prime video',
        date: "10/05/2020",
        amount: 15
    },
]

const CardManagement: React.FC<any> = ({ navigation }) => {

    const [isCreditSeleceted, setisCreditSeleceted] = useState<boolean>(false)
    const [isAddCardModalVisible, setisAddCardModalVisible] = useState<boolean>(false)
    const [isAddPlatformModalVisible, setisAddPlatformModalVisible] = useState<boolean>(false)

    return (
        <View style={styles.main}>
            <AppHeader />

            <Layout fixed={false}>
                <View style={styles.layout}>
                    <Text style={styles.myCard}>My Cards</Text>

                    {/* RADIO BUTTONS */}
                    <View style={styles.radiobtnContainer}>

                        <PrimaryButton
                            style={[styles.radioBtn, isCreditSeleceted ? styles.inactveRadioBtn : styles.activeRadioBtn]}
                            textStyle={[styles.rabdioBtnTxt, isCreditSeleceted ? styles.inactveRadioBtntxt : styles.activeRadioBtnTxt]}
                            title={'Debit'}
                            onPress={() => setisCreditSeleceted(false)}
                        />

                        <PrimaryButton
                            style={[styles.radioBtn, !isCreditSeleceted ? styles.inactveRadioBtn : styles.activeRadioBtn]}
                            textStyle={[styles.rabdioBtnTxt, !isCreditSeleceted ? styles.inactveRadioBtntxt : styles.activeRadioBtnTxt]}
                            title={'Credit'}
                            onPress={() => setisCreditSeleceted(true)}
                        />

                    </View>
                    {/* END */}

                    {/* CARDS */}
                    <Text style={styles.totalTxt}>Total</Text>
                    <Text style={[styles.totalTxt, styles.cardsheading]}>4 cards</Text>

                    <View style={styles.cardImageContainer}>
                        <ImageBackground
                            source={totalCards}
                            style={styles.cardImage}
                            resizeMode='stretch'
                        >
                            <View style={styles.rowContainer}>
                                <Text style={styles.cardNumber}>***** 4589</Text>
                                <AnySvg name={MasterCardIcon} height={25} width={25} />
                            </View>

                            <View style={styles.rowContainer}>
                                <Text style={styles.cardNumber}>Active</Text>
                                <Text style={styles.bankName}>BanReservas</Text>
                            </View>

                        </ImageBackground>

                        <TouchableOpacity style={styles.addCardBtn}
                            activeOpacity={0.8}
                            onPress={() => setisAddCardModalVisible(true)}
                        >
                            <Feather name='plus' color={COLORS.PRIMARY_1} size={18} />
                            <Text style={styles.addCardTxt}>Add card</Text>
                        </TouchableOpacity>
                    </View>
                    {/* EMD */}

                    <View style={styles.viewAllContainer}>
                        <Text style={styles.listOfTxt}>List of platforms</Text>
                        <TextButton
                            title='All'
                        />
                    </View>

                    {
                        Data.map((item, index) => <PlatformListItem item={item} key={index} />)
                    }

                    <PrimaryButton
                        title='Add platform'
                        style={styles.addPlatformBtn}
                        textStyle={styles.addPlatformBtnTxt}
                        onPress={() => setisAddPlatformModalVisible(true)}
                    />

                </View>
            </Layout>

            {
                isAddPlatformModalVisible &&
                <AddPlatformModal
                    title='Add new platform'
                    isVisible={isAddPlatformModalVisible}
                    onclose={() => setisAddPlatformModalVisible(false)}
                />
            }

            {
                isAddCardModalVisible &&
                <AddPlatformModal
                    title='Add new Card'
                    isVisible={isAddCardModalVisible}
                    onclose={() => setisAddCardModalVisible(false)}
                />
            }
        </View>
    )
}

export default CardManagement