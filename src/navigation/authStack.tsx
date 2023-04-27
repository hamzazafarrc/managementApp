import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@constants/routes';
import SignIn from '@screens/signIn';
import SignUp from '@screens/signUp';
import { StatusBar } from 'react-native';
import { COLORS } from '@src/constants/styleGuide';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <>
            <StatusBar backgroundColor={COLORS.PRIMARY_1} barStyle="light-content" />
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}>
                <Stack.Screen name={SCREENS.LOGIN} component={SignIn} />
                <Stack.Screen name={SCREENS.REGISTER} component={SignUp} />

            </Stack.Navigator>
        </>
    )
}

export default AuthStack