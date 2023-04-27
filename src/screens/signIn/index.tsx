import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Layout, PrimaryButton, PrimaryInput, Spacer } from '@src/components'
import { SCREENS } from '@constants/routes'
import { hp } from '@src/constants/styleGuide'

const SignIn: React.FC<any> = ({ navigation }) => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')

    return (
        <View style={styles.main}>
            {/* HEADER CONTAINER */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{`Sign in to your\nAccount`}</Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.subtitle}>Sign </Text>
                    <Text style={[styles.subtitle, styles.subtle]}>in to your account</Text>
                </View>
            </View>
            {/* END */}

            {/* CONTEXT */}
            <Layout fixed={false}>

                <View style={{ minHeight: hp(69.5) }}>
                    <Spacer />
                    <PrimaryInput
                        title='Email'
                        value={email}
                    />

                    <PrimaryInput
                        title='Password'
                        value={password}
                        isPassword={true}
                    />

                    <TouchableOpacity style={styles.forgotBtn} activeOpacity={0.8}>
                        <Text style={styles.forgotBtnTxt}>Forget password?</Text>
                    </TouchableOpacity>

                    <PrimaryButton
                        onPress={() => navigation.navigate(SCREENS.REGISTER)}
                        title='Login'
                    />


                    <View style={[styles.titleContainer, styles.createAccountContainer]}>
                        <Text style={styles.forgotBtnTxt}>Don’t have an account? </Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate(SCREENS.REGISTER)}>
                            <Text style={[styles.forgotBtnTxt, styles.registerBtn]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Layout>
            {/* END */}
        </View>
    )
}

export default SignIn