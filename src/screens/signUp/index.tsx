import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Layout, PrimaryButton, Spacer, PrimaryInput } from '@src/components'
import { hp } from '@src/constants/styleGuide'
import { SCREENS } from '@src/constants/routes'

const SignUp: React.FC<any> = ({ navigation }) => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')

    return (
        <View style={styles.main}>
            {/* HEADER CONTAINER */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{`Register`}</Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.subtitle}>Create </Text>
                    <Text style={[styles.subtitle, styles.subtle]}>your account</Text>
                </View>
            </View>
            {/* END */}

            {/* CONTEXT */}
            <Layout fixed={false}>

                <View style={{ minHeight: hp(69.5) }}>
                    <Spacer height={hp(5)} />
                    <PrimaryInput
                        title='Name'
                        value={email}
                    />
                    <PrimaryInput
                        title='Email'
                        value={email}
                    />
                    <PrimaryInput
                        title='Phone'
                        value={email}
                    />

                    <PrimaryInput
                        title='Password'
                        value={password}
                        isPassword={true}
                    />

                    <PrimaryInput
                        title='Repeat Password'
                        value={password}
                        isPassword={true}
                    />

                    <PrimaryButton
                        onPress={() => { }}
                        title='Register'
                    />
                    


                    <View style={[styles.titleContainer, styles.createAccountContainer]}>
                        <Text style={styles.forgotBtnTxt}>I have an account? </Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate(SCREENS.LOGIN)}>
                            <Text style={[styles.forgotBtnTxt, styles.registerBtn]}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Layout>
            {/* END */}
        </View>
    )
}

export default SignUp