import { StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@constants/routes';
import { COLORS } from '@constants/styleGuide';
import AuthStack from './authStack';
import AppStack from './appStack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={COLORS.BACKGROUND} barStyle="dark-content" />
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={SCREENS.AUTH} component={AppStack} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack